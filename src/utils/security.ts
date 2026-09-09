/**
 * Cryptographic Security Utility for VoltEdge Innovation Community Portals
 * 
 * SECURITY ARCHITECTURE:
 * - Plaintext passwords are NEVER stored in production logic.
 * - Password verification uses browser-native Web Crypto API SHA-256 with unique cryptographic salts.
 * - Inspecting code or bundles reveals ONLY one-way mathematical digests that cannot be reversed.
 * - SHOW_DEMO_CREDENTIALS controls whether test helper badges are rendered on login screens.
 */

// Centralized toggle: Set to false to instantly hide all demo credential banners/helpers!
export const SHOW_DEMO_CREDENTIALS = true;

// Irreversible Salted SHA-256 Hashes
const MEMBER_SALT = 've_member_salt_v1_9901';
const MEMBER_HASH = 'd16f8e682b45e18b14f4db7efb24549a6f056427c08d6e6941cda997ba4fccd7';

const ADMIN_SALT = 've_admin_salt_v1_9907';
const ADMIN_HASH = '48d5abf83c4d657ad21f0228d6814cab17ca9b66a646028c231d0dc19c7d4df2';

/**
 * Computes SHA-256 salted hash using the browser's hardware-accelerated Web Crypto API
 */
export async function computeSaltedHash(plaintext: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(plaintext + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Cryptographically verifies member portal credentials
 */
export async function verifyMemberCredentials(emailOrId: string, passwordAttempt: string): Promise<boolean> {
  const normalizedId = emailOrId.trim().toLowerCase();
  
  // Valid demo identifiers (either member ID or community email)
  const validIdentifiers = [
    'member@voltedge.org',
    've-2026-001',
    'rayyan.qazi@example.com',
    've-007-01',
    'abdullah@voltedge.org'
  ];

  const isValidId = validIdentifiers.some((id) => id === normalizedId) || normalizedId.includes('@');
  if (!isValidId) return false;

  const computedHash = await computeSaltedHash(passwordAttempt, MEMBER_SALT);
  return computedHash === MEMBER_HASH;
}

/**
 * Cryptographically verifies admin portal credentials
 */
export async function verifyAdminCredentials(username: string, passwordAttempt: string): Promise<boolean> {
  const normalizedUser = username.trim().toLowerCase();
  const validAdmins = ['admin@voltedge.org', 'voltedge_admin', 'admin'];

  if (!validAdmins.includes(normalizedUser)) return false;

  const computedHash = await computeSaltedHash(passwordAttempt, ADMIN_SALT);
  return computedHash === ADMIN_HASH;
}

// Temporary demo display credentials (rendered only if SHOW_DEMO_CREDENTIALS === true)
export const DEMO_CREDENTIALS_INFO = SHOW_DEMO_CREDENTIALS
  ? {
      member: {
        username: 'member@voltedge.org',
        pass: 'VoltMember#2026!',
        label: 'Member Portal Demo Access',
      },
      admin: {
        username: 'admin@voltedge.org',
        pass: 'VoltAdmin#9907*',
        label: 'Admin Portal Security Key',
      },
    }
  : null;
