import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, ShieldAlert, Mail, ArrowLeft } from 'lucide-react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Header */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-4xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-volt-gold hover:text-amber-500 mb-2 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Privacy Policy
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-mono">
              Official Governance, Terms of Community Participation &amp; Confidentiality Agreements
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 md:py-16 bg-white dark:bg-onyx-900/40">
        <div className="container-custom max-w-4xl mx-auto space-y-12 text-neutral-700 dark:text-neutral-300">
          {/* Section 1: Privacy Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="p-2.5 rounded-xl bg-volt-gold/10 text-volt-gold">
                <Lock size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  1. Information Privacy
                </h2>
                <span className="text-xs font-mono text-neutral-500">How your details are collected and handled</span>
              </div>
            </div>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                VoltEdge Innovation Community respects your privacy. When you apply for membership, we collect basic contact information (full name, email, phone number), your college or institution, branch/year, and your areas of interest.
              </p>
              <p>
                <strong>Purpose of Data Collection:</strong> Information provided is used solely for welcoming members, reviewing membership submissions, adding verified members to private WhatsApp and Discord community channels, and coordinating peer project squads.
              </p>
              <p>
                <strong>Data Protection:</strong> We do not sell, rent, or distribute member contact details to any third parties or advertisers. Internal records are accessed only by community coordinators for team operations.
              </p>
              <p>
                You may request an update or removal of your details from our records at any time by contacting us directly.
              </p>
            </div>
          </div>

          {/* Section 2: Terms of Community Participation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent">
                <FileText size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  2. Community Participation
                </h2>
                <span className="text-xs font-mono text-neutral-500">Collaborative rules and project ownership</span>
              </div>
            </div>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                VoltEdge is an open student innovation community. By joining our platform, you agree to participate constructively and respect fellow members.
              </p>
              <p>
                <strong>Peer-to-Peer Model:</strong> Members connect based on shared problem statements and build projects together. Every member retains intellectual ownership of their individual contributions.
              </p>
              <p>
                <strong>Community Banner:</strong> When teams or squads are formed through the community network to solve problems or compete, projects and milestones are recognized and recorded under the VoltEdge Innovation Community banner.
              </p>
            </div>
          </div>

          {/* Section 3: Code of Conduct */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                <Shield size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  3. Code of Conduct
                </h2>
                <span className="text-xs font-mono text-neutral-500">Mutual respect and constructive culture</span>
              </div>
            </div>

            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                We are committed to providing a welcoming, harassment-free environment for everyone regardless of experience level, academic branch, or background.
              </p>
              <p>
                <strong>Expected Behavior:</strong> Be respectful, collaborate openly, give proper credit to teammates, and support peers. Constructive discussions and helpful problem-solving are expected in all channels.
              </p>
              <p>
                <strong>Unacceptable Behavior:</strong> Intimidation, bullying, spamming, derogatory remarks, and academic dishonesty are strictly forbidden. Any violation will lead to immediate suspension or removal.
              </p>
            </div>
          </div>

          {/* Section 4: Anti-Leak Policy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
              <div className="p-2.5 rounded-xl bg-red-500/10 text-red-500">
                <ShieldAlert size={22} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                  4. Strict Anti-Leak Policy
                </h2>
                <span className="text-xs font-mono text-red-500 font-bold">Confidentiality of Community Links</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 space-y-3 text-sm leading-relaxed">
              <p className="font-bold text-red-600 dark:text-red-400">
                Sharing WhatsApp Community or Discord server invite links with non-verified individuals is strictly prohibited.
              </p>
              <p className="text-neutral-700 dark:text-neutral-300">
                Community channels are reserved exclusively for members who have applied and passed verification. Any member found leaking or circulating private access links to external groups will face immediate, permanent expulsion from VoltEdge.
              </p>
            </div>
          </div>

          {/* Section 5: Contact Us */}
          <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-3">
            <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white flex items-center gap-2">
              <Mail size={18} className="text-volt-gold" />
              <span>Questions or Concerns?</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              If you have any questions regarding our privacy guidelines, membership status, or wish to report a conduct concern, email our coordination team:
            </p>
            <div className="pt-1">
              <a
                href="mailto:contact@voltedge.org"
                className="text-volt-gold font-mono font-bold hover:underline text-sm"
              >
                contact@voltedge.org
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
