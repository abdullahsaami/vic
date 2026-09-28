import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageSquare, BookOpen, Trophy } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const JoinUs: React.FC = () => {
  const benefits = [
    {
      icon: <MessageSquare size={20} />,
      title: 'Official Division Membership',
      color: 'border-l-volt-gold text-volt-gold',
      desc: 'Receive an official Member ID (VIC-M001+) and join one of our four permanent divisions.',
    },
    {
      icon: <Users size={20} />,
      title: 'Project Teams',
      color: 'border-l-accent text-accent',
      desc: 'Collaborate with fellow engineering students in dedicated hardware, software, AI, and workshop teams.',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Workshops & Research',
      color: 'border-l-volt-yellow text-volt-yellow',
      desc: 'Learn collaboratively through hands-on technical tutorials, lab prototyping, and community STEM initiatives.',
    },
    {
      icon: <Trophy size={20} />,
      title: 'Competitions & Recognition',
      color: 'border-l-emerald-500 text-emerald-400',
      desc: 'Represent VoltEdge in collegiate robotics and technical competitions and have your achievements officially recorded.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Submit Application',
      desc: 'Complete the official online membership application form with your academic and technical details.',
    },
    {
      num: '02',
      title: 'Internal Review',
      desc: 'Your application is sent directly to the VIC Internal Administration system for board review.',
    },
    {
      num: '03',
      title: 'Approval & Induction',
      desc: 'Once approved, you are inducted into the official Member Registry with a permanent Member ID.',
    },
    {
      num: '04',
      title: 'Join Your Team',
      desc: 'Receive your official welcome communication and begin collaborating with your division and project team.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>MEMBERSHIP OVERVIEW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Become a Member
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Join VoltEdge Innovation Community (VIC) to collaborate across electronics, robotics, software, AI, and STEM outreach.
            </p>

            <div className="pt-3">
              <Link to="/apply">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-mono font-bold shadow-lg inline-flex items-center gap-2">
                  <span>Open Application Form</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. MEMBER PRIVILEGES */}
      <section className="section bg-white dark:bg-onyx-900/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-4xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Privileges
              </span>
              <h2 className="section-title">What You Get</h2>
              <p className="section-subtitle mx-auto">
                What you receive upon verified induction into VoltEdge Innovation Community.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {benefits.map((benefit, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.08}>
                <CardComponent
                  className={`p-6 border-l-4 ${benefit.color} h-full flex flex-col justify-between shadow-sm`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                        {benefit.title}
                      </h3>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-neutral-700 dark:text-neutral-300">
                        {benefit.icon}
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FOUR-STEP APPLICATION PROCESS */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-4xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Workflow
              </span>
              <h2 className="section-title">How to Join</h2>
              <p className="section-subtitle mx-auto">
                Four simple steps from submitting your application to joining your division and team.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.08}>
                <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2 h-full flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xl font-bold text-amber-600 dark:text-volt-gold block">
                      STEP {step.num}
                    </span>
                    <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white mt-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. APPLICATION GATEWAY CARD */}
      <section className="py-16 sm:py-20 bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 dark:bg-onyx-900 border-2 border-volt-gold/60 text-center space-y-6 shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold tracking-widest text-amber-600 dark:text-volt-gold uppercase block">
                  Official Registration
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-neutral-900 dark:text-white">
                  Ready to Apply?
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto leading-relaxed">
                  Complete the membership application form. Your submission goes directly to the VIC Internal Administration portal.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 max-w-lg mx-auto text-left space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="font-mono font-bold text-amber-600 dark:text-volt-gold uppercase tracking-wider text-xs">
                  Application Checklist:
                </div>
                <div>• Student contact &amp; academic details</div>
                <div>• Preferred Division (Division I, II, III, or IV)</div>
                <div>• Technical skills &amp; engineering interests</div>
                <div>• Community pledge confirmation</div>
              </div>

              <div className="pt-2">
                <Link to="/apply">
                  <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-mono font-bold shadow-lg inline-flex items-center gap-2">
                    <span>Proceed to Application Form</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;
