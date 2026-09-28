import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowLeft,
  CheckCircle2,
  Send,
  AlertCircle,
  Lock,
  ChevronDown,
  Plus,
  X,
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { DivisionType } from '../types';

const PREDEFINED_SKILLS = [
  'Robotics & Hardware',
  'Arduino & ESP32',
  'Embedded C / C++',
  'ROS 2 & Autonomous Navigation',
  'Web Development (React / Next.js)',
  'Full-Stack (Node.js / Python)',
  'AI & Machine Learning',
  'Computer Vision & OpenCV',
  'CAD & 3D Modeling',
  'PCB Design & Circuitry',
  'UI/UX Design & Prototyping',
  'Event Organization & Logistics',
  'Media, Video Editing & Photography',
  'Technical Documentation & Writing',
  'Cloud & DevOps',
  'Mobile App Development',
];

const DIVISIONS_LIST: DivisionType[] = [
  'Division I — Electronics & Robotic Systems',
  'Division II — Computing & Intelligent Sciences',
  'Division III — Events, Workshops & Community Outreach',
  'Division IV — Organizational Operations & Administration',
];

const ROLES_LIST = [
  'Team Member',
  'Hardware & Robotics Member',
  'Software & AI Contributor',
  'Research Contributor',
  'STEM Workshop & Outreach Member',
  'Documentation & Operations Member',
];

function calculateAgeFromDob(dob: string): string {
  if (!dob) return '19';
  const birth = new Date(dob);
  if (Number.isNaN(birth.getTime())) return '19';
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  return age > 10 && age < 80 ? String(age) : '19';
}

const Apply: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assignedId, setAssignedId] = useState('');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [institution, setInstitution] = useState('');
  const [course, setCourse] = useState('');
  const [yearSemester, setYearSemester] = useState('');

  const [primaryDivision, setPrimaryDivision] = useState<DivisionType>(
    'Division I — Electronics & Robotic Systems'
  );
  const [roleAppliedFor, setRoleAppliedFor] = useState<string>('Team Member');
  const [secondaryInterests, setSecondaryInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [customSkillInput, setCustomSkillInput] = useState('');

  const [whyJoin, setWhyJoin] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');

  // Genuine student agreement checkpoints
  const [agreeRespect, setAgreeRespect] = useState(false);
  const [agreeAntiLeak, setAgreeAntiLeak] = useState(false);
  const [agreeVerification, setAgreeVerification] = useState(false);
  const [agreeAccuracy, setAgreeAccuracy] = useState(false);

  const [validationError, setValidationError] = useState<string | null>(null);

  const toggleSecondary = (interest: string) => {
    setSecondaryInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleAddCustomSkill = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = customSkillInput.trim();
    if (!trimmed) return;
    if (!skills.includes(trimmed)) {
      setSkills((prev) => [...prev, trimmed]);
    }
    setCustomSkillInput('');
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills((prev) => prev.filter((s) => s !== skillToRemove));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !city.trim() ||
      !institution.trim() ||
      !course.trim()
    ) {
      return setValidationError(
        'Please fill in all required contact and academic fields marked with an asterisk (*).'
      );
    }

    if (skills.length === 0) {
      return setValidationError('Please select or add at least one skill or area of interest.');
    }

    if (!whyJoin.trim() || !projectIdea.trim()) {
      return setValidationError(
        'Please share what you want to learn/build and the problem statements that interest you.'
      );
    }

    if (!agreeRespect || !agreeAntiLeak || !agreeVerification || !agreeAccuracy) {
      return setValidationError(
        'Please review and confirm all four community agreement checkpoints before submitting.'
      );
    }

    setIsSubmitting(true);

    const submissionId = `PUB-${Date.now()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const createdAt = new Date().toISOString();
    const submittedDate = createdAt.slice(0, 10);
    const trimmedPortfolio = portfolioUrl.trim();

    // Direct Normalized Record for VIC Internal Administration System (Members -> Applications)
    const internalRecord = {
      submissionId,
      id: submissionId,
      applicantName: fullName.trim(),
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      whatsapp: phone.trim(),
      age: calculateAgeFromDob(dob),
      dob,
      city: city.trim(),
      institution: institution.trim(),
      course: course.trim(),
      year: yearSemester.trim() || '1st Year',
      yearSemester: yearSemester.trim() || '1st Year',
      preferredDivision: primaryDivision,
      primaryDivision,
      roleAppliedFor: roleAppliedFor || 'Team Member',
      skills,
      interests: secondaryInterests.length > 0 ? secondaryInterests : [primaryDivision],
      secondaryInterests,
      motivation: whyJoin.trim(),
      whyJoin: whyJoin.trim(),
      experience: `Location: ${city.trim()} | Course: ${course.trim()} (${yearSemester.trim() || 'Student'})`,
      projects: projectIdea.trim(),
      projectIdea: projectIdea.trim(),
      portfolioUrl: trimmedPortfolio,
      githubUrl: trimmedPortfolio.includes('github.com') ? trimmedPortfolio : '',
      linkedinUrl: trimmedPortfolio.includes('linkedin.com') ? trimmedPortfolio : '',
      submittedDate,
      submittedAt: createdAt,
      createdAt,
      status: 'Pending',
    };

    // 1. Save to localStorage queues for instant local & same-origin sync with Internal Administration
    try {
      const pubQueueRaw = localStorage.getItem('vic_public_submitted_applications_v1');
      const pubQueue = pubQueueRaw ? JSON.parse(pubQueueRaw) : [];
      const filteredPub = Array.isArray(pubQueue)
        ? pubQueue.filter(
            (a: any) => (a.email || '').toLowerCase() !== internalRecord.email.toLowerCase()
          )
        : [];
      localStorage.setItem(
        'vic_public_submitted_applications_v1',
        JSON.stringify([internalRecord, ...filteredPub])
      );

      const veQueueRaw = localStorage.getItem('voltedge_applications');
      const veQueue = veQueueRaw ? JSON.parse(veQueueRaw) : [];
      const filteredVe = Array.isArray(veQueue)
        ? veQueue.filter(
            (a: any) => (a.email || '').toLowerCase() !== internalRecord.email.toLowerCase()
          )
        : [];
      localStorage.setItem(
        'voltedge_applications',
        JSON.stringify([internalRecord, ...filteredVe])
      );

      if ('BroadcastChannel' in window) {
        const bc1 = new BroadcastChannel('vic_public_applications_channel');
        bc1.postMessage({
          type: 'NEW_PUBLIC_APPLICATION',
          application: internalRecord,
          record: internalRecord,
        });
        bc1.close();

        const bc2 = new BroadcastChannel('vic_applications_sync_v1');
        bc2.postMessage({
          type: 'NEW_PUBLIC_APPLICATION',
          application: internalRecord,
          record: internalRecord,
        });
        bc2.close();
      }
    } catch {
      // ignore local storage errors
    }

    // 2. Send to Cloudflare Pages Function (/api/applications) so D1/KV stores it directly for Internal Admin
    try {
      const apiEndpoints = ['/api/applications'];
      const customApiBase = (import.meta as any).env?.VITE_ADMIN_API_URL;
      if (customApiBase) {
        apiEndpoints.unshift(`${String(customApiBase).replace(/\/$/, '')}/api/applications`);
      }

      for (const endpoint of apiEndpoints) {
        try {
          const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(internalRecord),
          });
          if (res.ok) {
            break;
          }
        } catch {
          // continue to fallback endpoint
        }
      }
    } catch {
      // offline fallback already saved
    } finally {
      setIsSubmitting(false);
    }

    setAssignedId(submissionId);
    setIsSubmitted(true);
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  return (
    <div className="overflow-hidden min-h-screen bg-[#F8F9FA] dark:bg-[#070709] transition-colors duration-200">
      {/* 1. TOP HEADER WITH CLEAN LEFT-ALIGNED BACK BUTTON */}
      <section className="relative py-8 sm:py-12 md:py-16 bg-white dark:bg-[#0A0A0C] border-b border-neutral-200 dark:border-neutral-800">
        <div className="container-custom max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <ScrollAnimationWrapper>
            <div className="flex items-center justify-start">
              <Link
                to="/join"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-mono text-xs font-bold border border-neutral-300 dark:border-neutral-700 transition-colors shadow-sm"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </Link>
            </div>

            <div className="text-center space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/10 dark:bg-volt-gold/15 text-amber-700 dark:text-volt-gold border border-amber-500/30 dark:border-volt-gold/30 text-xs font-mono font-bold select-none">
                <span>OFFICIAL VIC APPLICATION FORM</span>
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
                Membership Application
              </h1>

              <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
                Submit your membership application directly to the VoltEdge Innovation Community (VIC) internal administration system.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. APPLICATION FORM CONTENT */}
      <section className="py-6 sm:py-10 md:py-14">
        <div className="container-custom max-w-3xl mx-auto px-3 sm:px-6">
          {isSubmitted ? (
            <ScrollAnimationWrapper>
              <CardComponent className="p-5 sm:p-8 md:p-12 text-center space-y-6 border-2 border-amber-500 dark:border-volt-gold shadow-2xl bg-white dark:bg-[#0E0E11]">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/15 border-2 border-emerald-500 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mx-auto animate-pulse">
                  <CheckCircle2 size={32} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-volt-gold tracking-widest uppercase">
                    Application Sent to VIC Administration
                  </span>
                  <h2 className="text-xl sm:text-3xl font-black font-display text-neutral-900 dark:text-white">
                    Thank You, {fullName}!
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-md mx-auto leading-relaxed">
                    Your membership application has been transmitted directly to the VIC Internal Administration portal for review.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-[#151518] border border-neutral-200 dark:border-neutral-800 max-w-sm mx-auto space-y-1">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase font-semibold">
                    Application Reference ID
                  </span>
                  <div className="text-lg sm:text-xl font-mono font-black text-amber-600 dark:text-volt-gold tracking-wider">
                    {assignedId}
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-volt-gold/10 border border-amber-200 dark:border-volt-gold/30 text-xs sm:text-sm text-left text-neutral-800 dark:text-neutral-200 space-y-2.5 leading-relaxed">
                  <div className="font-bold text-amber-700 dark:text-volt-yellow text-xs sm:text-sm uppercase font-mono">
                    <span>What Happens Next:</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1.5 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm">
                    <li>The VIC Administration Board will review your application under <strong>Members → Applications</strong>.</li>
                    <li>Once approved, you will be inducted with an official Member ID (e.g., <strong>VIC-M007</strong>) and assigned to your division.</li>
                    <li>Official onboarding details will be sent to <strong className="text-neutral-900 dark:text-white underline">{email}</strong>.</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <Link to="/projects" className="w-full sm:w-auto">
                    <button className="btn btn-secondary text-xs sm:text-sm font-mono font-bold px-6 py-3 w-full sm:w-auto">
                      <span>Explore Projects</span>
                    </button>
                  </Link>
                  <Link to="/" className="w-full sm:w-auto">
                    <button className="btn btn-primary text-xs sm:text-sm font-mono font-bold px-6 py-3 w-full sm:w-auto">
                      <span>Return Home</span>
                    </button>
                  </Link>
                </div>
              </CardComponent>
            </ScrollAnimationWrapper>
          ) : (
            <ScrollAnimationWrapper>
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                {validationError && (
                  <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 text-xs sm:text-sm font-medium flex items-start gap-2.5 shadow-sm">
                    <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-600 dark:text-red-400" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Section 1: Personal & Contact */}
                <CardComponent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 bg-white dark:bg-[#0E0E11] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 dark:bg-volt-gold/15 text-amber-700 dark:text-volt-gold flex items-center justify-center font-mono font-bold text-xs">
                        1
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                        Personal &amp; Contact Details
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 pl-8">
                      Your identity and contact information for membership verification.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Full Name <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Abdullah Saami"
                        className="input-field"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        max="2012-12-31"
                        min="1995-01-01"
                        className="input-field cursor-pointer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Email Address <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. student@example.com"
                        className="input-field"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Phone / WhatsApp Number <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="input-field"
                      />
                    </div>

                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        City / Location <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Bhatkal, Karnataka"
                        className="input-field"
                      />
                    </div>
                  </div>
                </CardComponent>

                {/* Section 2: Academic Background */}
                <CardComponent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 bg-white dark:bg-[#0E0E11] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 dark:bg-volt-gold/15 text-amber-700 dark:text-volt-gold flex items-center justify-center font-mono font-bold text-xs">
                        2
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                        Academic Background
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 pl-8">
                      Your institution and current academic program.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        College / Institution Name <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                        placeholder="e.g. Anjuman Institute of Technology and Management (AITM)"
                        className="input-field"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Course / Branch <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        placeholder="e.g. B.E. Computer Science / Electronics"
                        className="input-field"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Year / Semester
                      </label>
                      <input
                        type="text"
                        value={yearSemester}
                        onChange={(e) => setYearSemester(e.target.value)}
                        placeholder="e.g. 2nd Year"
                        className="input-field"
                      />
                    </div>
                  </div>
                </CardComponent>

                {/* Section 3: Division, Role & Skills */}
                <CardComponent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 bg-white dark:bg-[#0E0E11] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 dark:bg-volt-gold/15 text-amber-700 dark:text-volt-gold flex items-center justify-center font-mono font-bold text-xs">
                        3
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                        Division, Role &amp; Technical Skills
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 pl-8">
                      Select your preferred VIC division, role, and technical skills.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          Preferred Division <span className="text-amber-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={primaryDivision}
                            onChange={(e) => setPrimaryDivision(e.target.value as DivisionType)}
                            className="input-field appearance-none cursor-pointer pr-10"
                          >
                            {DIVISIONS_LIST.map((div) => (
                              <option
                                key={div}
                                value={div}
                                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white py-2"
                              >
                                {div}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500 dark:text-neutral-400">
                            <ChevronDown size={16} />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                          Role Applied For <span className="text-amber-500 font-bold">*</span>
                        </label>
                        <div className="relative">
                          <select
                            value={roleAppliedFor}
                            onChange={(e) => setRoleAppliedFor(e.target.value)}
                            className="input-field appearance-none cursor-pointer pr-10"
                          >
                            {ROLES_LIST.map((role) => (
                              <option
                                key={role}
                                value={role}
                                className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white py-2"
                              >
                                {role}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-500 dark:text-neutral-400">
                            <ChevronDown size={16} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-1">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Secondary Division Interests
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {DIVISIONS_LIST.filter((d) => d !== primaryDivision).map((div) => {
                          const isSelected = secondaryInterests.includes(div);
                          return (
                            <button
                              type="button"
                              key={div}
                              onClick={() => toggleSecondary(div)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 select-none min-h-[38px] flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-amber-500 dark:bg-volt-gold text-black font-bold shadow-sm border border-amber-600 dark:border-volt-gold'
                                  : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700'
                              }`}
                            >
                              {isSelected && <Check size={13} className="stroke-[3]" />}
                              <span>{div}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Predefined Skills Options */}
                    <div className="space-y-2 pt-1">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Skills &amp; Technical Capabilities <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {PREDEFINED_SKILLS.map((skill) => {
                          const isSelected = skills.includes(skill);
                          return (
                            <button
                              type="button"
                              key={skill}
                              onClick={() => toggleSkill(skill)}
                              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all active:scale-95 select-none min-h-[38px] flex items-center gap-1.5 ${
                                isSelected
                                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-black font-bold shadow-sm border border-neutral-900 dark:border-white'
                                  : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700'
                              }`}
                            >
                              {isSelected && <Check size={13} className="stroke-[3]" />}
                              <span>{skill}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Custom Skill Adder Input Box */}
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 space-y-3">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Add Custom Skills or Tools
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={customSkillInput}
                          onChange={(e) => setCustomSkillInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleAddCustomSkill();
                            }
                          }}
                          placeholder="e.g. Rust, PyTorch, SolidWorks, Figma..."
                          className="input-field flex-1 text-xs sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => handleAddCustomSkill()}
                          className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 dark:bg-volt-gold dark:hover:bg-yellow-400 text-black font-mono font-bold text-xs sm:text-sm shrink-0 flex items-center gap-1 shadow-sm transition-all active:scale-95 min-h-[42px]"
                        >
                          <Plus size={16} />
                          <span>Add</span>
                        </button>
                      </div>

                      {skills.filter((s) => !PREDEFINED_SKILLS.includes(s)).length > 0 && (
                        <div className="pt-1">
                          <span className="text-[11px] font-mono text-neutral-500 uppercase block mb-1.5">
                            Custom Added Skills:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {skills
                              .filter((s) => !PREDEFINED_SKILLS.includes(s))
                              .map((cSkill) => (
                                <span
                                  key={cSkill}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-volt-gold/15 text-amber-700 dark:text-volt-gold border border-volt-gold/40 text-xs font-semibold"
                                >
                                  <span>{cSkill}</span>
                                  <button
                                    type="button"
                                    onClick={() => handleRemoveSkill(cSkill)}
                                    className="text-amber-700 dark:text-volt-gold hover:text-red-500 p-0.5"
                                    title="Remove skill"
                                  >
                                    <X size={13} />
                                  </button>
                                </span>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardComponent>

                {/* Section 4: Goals & Project Interests */}
                <CardComponent className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-5 bg-white dark:bg-[#0E0E11] border border-neutral-200 dark:border-neutral-800 shadow-sm">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-amber-500/10 dark:bg-volt-gold/15 text-amber-700 dark:text-volt-gold flex items-center justify-center font-mono font-bold text-xs">
                        4
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                        Goals &amp; Project Interests
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 pl-8">
                      Tell us what you want to build, learn, or contribute to within VoltEdge.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        What do you want to build or learn at VoltEdge? <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={whyJoin}
                        onChange={(e) => setWhyJoin(e.target.value)}
                        placeholder="e.g. Looking to collaborate with fellow creators across robotics, web applications, and embedded electronics, join project teams, and represent the community in technical competitions."
                        className="input-field resize-y min-h-[90px] leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Problem Statements or Projects You Want to Work On <span className="text-amber-500 font-bold">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={projectIdea}
                        onChange={(e) => setProjectIdea(e.target.value)}
                        placeholder="e.g. Developing an autonomous obstacle avoidance ground rover with computer vision and real-time telemetry feedback."
                        className="input-field resize-y min-h-[90px] leading-relaxed"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                        Portfolio / GitHub / LinkedIn Link (Optional)
                      </label>
                      <input
                        type="url"
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                        placeholder="e.g. https://github.com/username"
                        className="input-field"
                      />
                    </div>
                  </div>
                </CardComponent>

                {/* Section 5: Genuine Student Agreement Checkpoints */}
                <CardComponent className="p-4 sm:p-6 md:p-8 space-y-4 bg-white dark:bg-[#0E0E11] border-2 border-amber-500/50 dark:border-volt-gold/50 shadow-sm">
                  <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Lock size={16} className="text-amber-600 dark:text-volt-gold shrink-0" />
                      <h3 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white">
                        5. Community Pledges &amp; Checkpoints
                      </h3>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                      Please read and confirm our community expectations. Tap each box to agree.
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    <div
                      onClick={() => setAgreeRespect(!agreeRespect)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        agreeRespect
                          ? 'bg-amber-50 dark:bg-volt-gold/10 border-amber-500 dark:border-volt-gold shadow-sm'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={agreeRespect}
                        onChange={(e) => setAgreeRespect(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-0.5 w-5 h-5 rounded text-amber-500 dark:text-volt-gold accent-amber-500 dark:accent-volt-gold cursor-pointer shrink-0"
                      />
                      <div className="text-xs sm:text-sm leading-relaxed">
                        <strong className="text-neutral-900 dark:text-white font-bold block mb-0.5">
                          Peer Respect &amp; Integrity
                        </strong>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          I understand VoltEdge is a collaborative student community and I agree to work respectfully with fellow members.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setAgreeAntiLeak(!agreeAntiLeak)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        agreeAntiLeak
                          ? 'bg-amber-50 dark:bg-volt-gold/10 border-amber-500 dark:border-volt-gold shadow-sm'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={agreeAntiLeak}
                        onChange={(e) => setAgreeAntiLeak(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-0.5 w-5 h-5 rounded text-amber-500 dark:text-volt-gold accent-amber-500 dark:accent-volt-gold cursor-pointer shrink-0"
                      />
                      <div className="text-xs sm:text-sm leading-relaxed">
                        <strong className="text-neutral-900 dark:text-white font-bold block mb-0.5">
                          Confidentiality &amp; Documentation Standards
                        </strong>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          I agree to respect internal project documentation, repositories, and community guidelines.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setAgreeVerification(!agreeVerification)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        agreeVerification
                          ? 'bg-amber-50 dark:bg-volt-gold/10 border-amber-500 dark:border-volt-gold shadow-sm'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={agreeVerification}
                        onChange={(e) => setAgreeVerification(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-0.5 w-5 h-5 rounded text-amber-500 dark:text-volt-gold accent-amber-500 dark:accent-volt-gold cursor-pointer shrink-0"
                      />
                      <div className="text-xs sm:text-sm leading-relaxed">
                        <strong className="text-neutral-900 dark:text-white font-bold block mb-0.5">
                          Administrative Review &amp; Induction
                        </strong>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          I understand that submitting this application sends my details to the VIC Administration Board for review and formal member induction.
                        </span>
                      </div>
                    </div>

                    <div
                      onClick={() => setAgreeAccuracy(!agreeAccuracy)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        agreeAccuracy
                          ? 'bg-amber-50 dark:bg-volt-gold/10 border-amber-500 dark:border-volt-gold shadow-sm'
                          : 'bg-neutral-50 dark:bg-neutral-900/60 border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={agreeAccuracy}
                        onChange={(e) => setAgreeAccuracy(e.target.checked)}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-0.5 w-5 h-5 rounded text-amber-500 dark:text-volt-gold accent-amber-500 dark:accent-volt-gold cursor-pointer shrink-0"
                      />
                      <div className="text-xs sm:text-sm leading-relaxed">
                        <strong className="text-neutral-900 dark:text-white font-bold block mb-0.5">
                          Accuracy Declaration
                        </strong>
                        <span className="text-neutral-700 dark:text-neutral-300">
                          I confirm that all details and information provided in this application are genuine and accurate.
                        </span>
                      </div>
                    </div>
                  </div>
                </CardComponent>

                {/* Submit Action */}
                <div className="pt-3 pb-8 text-center space-y-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary text-sm sm:text-base font-mono font-bold px-8 py-4 sm:px-10 sm:py-4 shadow-xl w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[52px]"
                  >
                    <span>
                      {isSubmitting
                        ? 'Submitting to VIC Administration...'
                        : 'Submit Membership Application'}
                    </span>
                    <Send size={16} />
                  </button>
                  <p className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    Applications are delivered directly to the VIC Internal Administration system.
                  </p>
                </div>
              </form>
            </ScrollAnimationWrapper>
          )}
        </div>
      </section>
    </div>
  );
};

export default Apply;
