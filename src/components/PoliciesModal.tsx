import React from 'react';
import { X, Shield, FileText, CheckCircle2, Lock, Users, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type PolicyKey = 'privacy' | 'terms' | 'conduct' | 'guidelines';

interface PoliciesModalProps {
  isOpen: boolean;
  initialPolicy?: PolicyKey;
  onClose: () => void;
}

const PoliciesModal: React.FC<PoliciesModalProps> = ({ isOpen, initialPolicy = 'privacy', onClose }) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (isOpen && initialPolicy) {
      setTimeout(() => {
        scrollToSection(`policy-${initialPolicy}`);
      }, 100);
    }
  }, [isOpen, initialPolicy]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Document */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[88vh] bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-onyx-950">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white font-display">
                VoltEdge Community Policies
              </h3>
              <p className="text-xs text-neutral-500 font-mono mt-0.5">
                Official governance, terms, privacy guidelines &amp; community agreements
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-onyx-800 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Jump Bar */}
          <div className="flex flex-wrap items-center gap-2 p-3 px-6 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-onyx-950/60 text-xs font-mono">
            <span className="text-neutral-500 hidden sm:inline">Jump to:</span>
            <button
              onClick={() => scrollToSection('policy-privacy')}
              className="px-3 py-1 rounded-lg bg-white dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-volt-gold"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => scrollToSection('policy-terms')}
              className="px-3 py-1 rounded-lg bg-white dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-volt-gold"
            >
              Terms &amp; Conditions
            </button>
            <button
              onClick={() => scrollToSection('policy-conduct')}
              className="px-3 py-1 rounded-lg bg-white dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-volt-gold"
            >
              Code of Conduct
            </button>
            <button
              onClick={() => scrollToSection('policy-guidelines')}
              className="px-3 py-1 rounded-lg bg-white dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-200 hover:text-volt-gold"
            >
              Community Guidelines
            </button>
          </div>

          {/* Scrollable Single Page Document */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-neutral-700 dark:text-neutral-300">
            {/* Section 1: Privacy Policy */}
            <section id="policy-privacy" className="space-y-4 pt-2">
              <div className="flex items-center gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-xl bg-volt-gold/10 text-volt-gold">
                  <Lock size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                    1. Privacy Policy
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">Last updated: February 2026</span>
                </div>
              </div>
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  VoltEdge Innovation Community values your privacy. We are committed to protecting the personal information you share when applying for membership or participating in community activities.
                </p>
                <p>
                  <strong>Information We Collect:</strong> When you submit an application, we collect your name, email, phone number, college/institution, division interests, and optional portfolio links.
                </p>
                <p>
                  <strong>Purpose of Data Use:</strong> Your information is used strictly to review membership applications, welcome new members, communicate community updates, and form collaborative project squads. We do not sell or share personal data with third-party marketers.
                </p>
                <p>
                  <strong>Data Security:</strong> Access to applicant submissions is restricted to authorized team coordinators. You may request the update or deletion of your information anytime by reaching out to contact@voltedge.org.
                </p>
              </div>
            </section>

            {/* Section 2: Terms & Conditions */}
            <section id="policy-terms" className="space-y-4 pt-4">
              <div className="flex items-center gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-xl bg-accent/10 text-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                    2. Terms &amp; Conditions
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">Last updated: February 2026</span>
                </div>
              </div>
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  By participating in VoltEdge Innovation Community, you agree to comply with these terms. Our community is intended for mutual learning, student collaboration, and positive engineering pursuits.
                </p>
                <p>
                  <strong>Membership Eligibility:</strong> Membership is open to students, creators, and developers of all academic backgrounds who are committed to constructive collaboration.
                </p>
                <p>
                  <strong>Project Ownership:</strong> Members retain ownership of their individual contributions. We encourage open-source sharing and crediting peers for their collaborative contributions.
                </p>
                <p>
                  <strong>Representation:</strong> Members must not make unauthorized public commitments or commercial contracts on behalf of VoltEdge without prior alignment with community coordinators.
                </p>
              </div>
            </section>

            {/* Section 3: Code of Conduct */}
            <section id="policy-conduct" className="space-y-4 pt-4">
              <div className="flex items-center gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                    3. Code of Conduct
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">Last updated: February 2026</span>
                </div>
              </div>
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <p>
                  We are committed to providing a friendly, safe, and welcoming environment for everyone, regardless of skill level, gender, branch, or identity.
                </p>
                <p>
                  <strong>Expected Behavior:</strong> Be respectful, open-minded, and helpful. Welcome beginners with patience, credit teammates for their contributions, and communicate constructively in all group discussions.
                </p>
                <p>
                  <strong>Unacceptable Behavior:</strong> Harassment, bullying, discriminatory language, academic dishonesty, and trolling are strictly prohibited. Violators may have their membership suspended or permanently revoked.
                </p>
              </div>
            </section>

            {/* Section 4: Community Guidelines & Anti-Leak Policy */}
            <section id="policy-guidelines" className="space-y-4 pt-4">
              <div className="flex items-center gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-800">
                <div className="p-2 rounded-xl bg-red-500/10 text-red-400">
                  <ShieldAlert size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                    4. Community Guidelines &amp; Anti-Leak Policy
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">Last updated: February 2026</span>
                </div>
              </div>
              <div className="space-y-3 text-xs sm:text-sm leading-relaxed">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-300 font-mono text-xs">
                  <strong>Strict Warning:</strong> Discord and WhatsApp group invite links are private and intended exclusively for verified members. Sharing these invite links with unverified individuals will result in immediate disqualification and permanent expulsion.
                </div>
                <p>
                  <strong>Group Etiquette:</strong> Keep discussions helpful and aligned with the designated channels (projects, study help, general chat, announcements). Avoid spamming or self-promotion unrelated to student projects.
                </p>
                <p>
                  <strong>Reporting Concerns:</strong> If you witness any misconduct or policy violations, please notify any community coordinator or email contact@voltedge.org for confidential assistance.
                </p>
              </div>
            </section>
          </div>

          {/* Footer of Modal */}
          <div className="p-4 px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-onyx-950 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black text-xs font-mono font-bold hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PoliciesModal;
