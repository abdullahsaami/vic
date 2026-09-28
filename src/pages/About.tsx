import React from 'react';
import { Link } from 'react-router-dom';
import {
  Lightbulb,
  Users2,
  Code,
  ShieldCheck,
  GraduationCap,
  Linkedin,
  Info,
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { CORE_LEADERSHIP_TEAM, GOVERNANCE_NOTE } from '../data/seedData';

const About: React.FC = () => {
  const values = [
    {
      title: 'Peer Learning',
      icon: <Users2 className="w-6 h-6 text-volt-gold" />,
      description:
        'A peer-to-peer engineering environment where students learn from each other through collaborative hardware and software projects.',
    },
    {
      title: 'Problem Statements',
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      description:
        'Members identify real technical challenges across robotics, computing, and community outreach and form teams to solve them.',
    },
    {
      title: 'Prototype & Build',
      icon: <Code className="w-6 h-6 text-volt-yellow" />,
      description:
        'Focusing on designing architectures, testing iterations, and building working prototypes with verifiable outcomes.',
    },
    {
      title: 'Workshops & STEM Outreach',
      icon: <GraduationCap className="w-6 h-6 text-emerald-400" />,
      description:
        'Organizing hands-on technical workshops, student tutorials, and community STEM awareness initiatives.',
    },
    {
      title: 'Structured Governance',
      icon: <ShieldCheck className="w-6 h-6 text-pink-400" />,
      description:
        'Operating under the VIC Founding Charter with clear documentation, ethical collaboration, and member recognition.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'SUBMIT APPLICATION',
      desc: 'Apply online with your academic background, division preference, and technical skills.',
    },
    {
      step: '02',
      title: 'ADMINISTRATION REVIEW',
      desc: 'Your application is reviewed directly inside the VIC Internal Administration system.',
    },
    {
      step: '03',
      title: 'MEMBER INDUCTION',
      desc: 'Approved members receive an official Member ID (VIC-M001+) and division assignment.',
    },
    {
      step: '04',
      title: 'JOIN DIVISION & TEAM',
      desc: 'Collaborate inside one of our four permanent divisions and specialized project teams.',
    },
    {
      step: '05',
      title: 'BUILD & PROTOTYPE',
      desc: 'Develop robotics platforms, IoT hardware, AI models, web systems, or STEM programs.',
    },
    {
      step: '06',
      title: 'RECORD ACHIEVEMENTS',
      desc: 'Showcase completed projects and competition milestones under the VoltEdge banner.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>ABOUT VOLTEDGE INNOVATION COMMUNITY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              About VoltEdge
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Founded in Bhatkal, Karnataka, VoltEdge Innovation Community (VIC) is a multidisciplinary student engineering and innovation organization structured across four permanent divisions.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. CORE MISSION & CORE VISION */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollAnimationWrapper delay={0.1}>
              <CardComponent className="h-full border-l-4 border-l-volt-gold p-6 sm:p-8">
                <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase block mb-2">
                  Action Statement
                </span>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3">
                  Core Mission
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Provide a structured, collaborative engineering platform where students across electronics, robotics, computing, AI, and community outreach work together in specialized teams to build real-world prototypes.
                </p>
              </CardComponent>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.2}>
              <CardComponent className="h-full border-l-4 border-l-accent p-6 sm:p-8">
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block mb-2">
                  Future Horizon
                </span>
                <h3 className="text-2xl font-bold font-display text-neutral-900 dark:text-white mb-3">
                  Core Vision
                </h3>
                <p className="text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  Build an enduring multidisciplinary student innovation community that develops impactful hardware and software systems, competes at national levels, and advances STEM outreach.
                </p>
              </CardComponent>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Ethos
              </span>
              <h2 className="section-title">Our Values</h2>
              <p className="section-subtitle mx-auto">
                Guiding principles that define our community culture and engineering standards.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.06}>
                <CardComponent className="h-full flex flex-col p-6">
                  <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 w-fit mb-4">
                    {v.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                    {v.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {v.description}
                  </p>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR WORKFLOW */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Process
              </span>
              <h2 className="section-title">How VIC Operates</h2>
              <p className="section-subtitle mx-auto">
                From membership application to division assignment, team collaboration, and project delivery.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {workflowSteps.map((step, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.05}>
                <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200/80 dark:border-neutral-800 h-full flex flex-col justify-between hover:border-volt-gold/40 transition-colors shadow-sm">
                  <div>
                    <span className="font-mono text-xl font-black text-volt-gold block mb-2">
                      {step.step}
                    </span>
                    <h4 className="font-display font-bold text-sm sm:text-base text-neutral-900 dark:text-white mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOUNDING MEMBERS */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Founding Assembly
              </span>
              <h2 className="section-title">Founding Members</h2>
              <p className="section-subtitle mx-auto">
                The six Founding Members of VoltEdge Innovation Community (VIC-M001 to VIC-M006).
              </p>
            </div>
          </ScrollAnimationWrapper>

          {/* Governance Notice Banner */}
          <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-volt-gold/10 border border-volt-gold/30 text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-start gap-3">
            <Info size={18} className="text-volt-gold shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Founding Charter Framework</strong>: {GOVERNANCE_NOTE}
            </p>
          </div>

          {/* Simple Founding Member Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_LEADERSHIP_TEAM.map((member, idx) => (
              <ScrollAnimationWrapper key={member.id} delay={idx * 0.06}>
                <CardComponent className="h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="inline-block text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-volt-gold/15 text-amber-600 dark:text-volt-gold border border-volt-gold/30 mb-1.5">
                          {member.id}
                        </span>
                        <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                          {member.name}
                        </h3>
                        <div className="text-xs font-mono font-bold text-amber-600 dark:text-volt-yellow mt-0.5">
                          {member.role}
                        </div>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-onyx-800 dark:hover:bg-onyx-700 text-neutral-600 dark:text-neutral-300 hover:text-volt-gold border border-neutral-200 dark:border-neutral-700 transition-colors shrink-0"
                        aria-label={`${member.name} LinkedIn`}
                        title="View LinkedIn"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>

                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {member.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                    <span className="text-volt-gold font-bold truncate">{member.division}</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-[#0A0A0A] text-white text-center">
        <div className="container-custom max-w-xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase">
              Apply to Join VIC
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Submit your application to join one of our four permanent divisions and collaborate on engineering projects.
            </p>
            <div className="pt-2">
              <Link to="/apply">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold">
                  Open Application Form
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default About;
