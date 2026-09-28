// s:/VIC/application-form/functions/api/applications.js
// Cloudflare Pages Function for the Public Joining Application Form Website
// Writes submitted applications directly into the shared free Cloudflare D1 (env.VIC_DB) or KV (env.VIC_KV) database.

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

async function ensureD1Table(db) {
  await db
    .prepare(
      `CREATE TABLE IF NOT EXISTS vic_applications (
        id TEXT PRIMARY KEY,
        email TEXT NOT NULL,
        applicant_name TEXT NOT NULL,
        payload_json TEXT NOT NULL,
        created_at TEXT NOT NULL
      )`
    )
    .run();
}

export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const applicantName = (body.applicantName || body.fullName || body.name || '').trim();
    const email = (body.email || '').trim();

    if (!applicantName || !email) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Applicant name and email are required.' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const submissionId =
      body.submissionId ||
      `PUB-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const createdAt = new Date().toISOString();

    const normalizedRecord = {
      submissionId,
      applicantName,
      email,
      phone: String(body.phone || '').trim(),
      whatsapp: String(body.whatsapp || body.phone || '').trim(),
      age: String(body.age || '19').trim(),
      institution: String(body.institution || '').trim(),
      course: String(body.course || '').trim(),
      year: String(body.year || '').trim(),
      preferredDivision: String(
        body.preferredDivision || 'Division I — Electronics & Robotic Systems'
      ).trim(),
      roleAppliedFor: String(body.roleAppliedFor || 'Team Member').trim(),
      skills: Array.isArray(body.skills)
        ? body.skills
        : String(body.skills || '')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
      interests: Array.isArray(body.interests)
        ? body.interests
        : String(body.interests || '')
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
      motivation: String(body.motivation || '').trim(),
      experience: String(body.experience || '').trim(),
      projects: String(body.projects || '').trim(),
      githubUrl: String(body.githubUrl || '').trim(),
      linkedinUrl: String(body.linkedinUrl || '').trim(),
      portfolioUrl: String(body.portfolioUrl || '').trim(),
      submittedDate: createdAt.slice(0, 10),
      createdAt,
    };

    if (env && env.VIC_DB) {
      await ensureD1Table(env.VIC_DB);
      await env.VIC_DB.prepare(
        `INSERT OR REPLACE INTO vic_applications (id, email, applicant_name, payload_json, created_at)
         VALUES (?1, ?2, ?3, ?4, ?5)`
      )
        .bind(
          submissionId,
          email.toLowerCase(),
          applicantName,
          JSON.stringify(normalizedRecord),
          createdAt
        )
        .run();

      return new Response(
        JSON.stringify({ ok: true, storage: 'cloudflare-d1', submissionId }),
        { status: 201, headers: CORS_HEADERS }
      );
    }

    if (env && env.VIC_KV) {
      const raw = await env.VIC_KV.get('vic_applications_list');
      const existing = raw ? JSON.parse(raw) : [];
      const filtered = existing.filter(
        (a) => (a.email || '').toLowerCase() !== email.toLowerCase()
      );
      const updated = [normalizedRecord, ...filtered].slice(0, 500);
      await env.VIC_KV.put('vic_applications_list', JSON.stringify(updated));

      return new Response(
        JSON.stringify({ ok: true, storage: 'cloudflare-kv', submissionId }),
        { status: 201, headers: CORS_HEADERS }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, storage: 'local-browser-mode', submissionId }),
      { status: 201, headers: CORS_HEADERS }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err.message || 'Invalid payload' }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
