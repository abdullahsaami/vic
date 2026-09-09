import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Projects: React.FC = () => {
  const formationSteps = [
    {
      num: '01',
      title: 'Problem Statements & Squad Formation',
      desc: 'Members identify real-world technical challenges or engineering problem statements across robotics, full-stack tools, and AI. Like-minded students connect directly on our channels to form a dedicated project team.',
    },
    {
      num: '02',
      title: 'Guidance & Architecture Mentorship',
      desc: 'Teams receive hands-on peer guidance from experienced division members on system architecture, hardware component selection, circuit design, and software stack decisions before writing code or assembling hardware.',
    },
    {
      num: '03',
      title: 'Competition Readiness & Deployment',
      desc: 'Squads build and iteratively test their prototypes, preparing to represent VoltEdge in collegiate technical competitions, robotics challenges, and technology showcases.',
    },
  ];

  const projectStages = [
    {
      phase: 'Phase 01',
      title: 'Problem Discovery',
      detail: 'Posting problem statements, discussing feasibility, and defining required technical disciplines (hardware, firmware, frontend, backend).',
    },
    {
      phase: 'Phase 02',
      title: 'Team Assembly',
      detail: 'Forming multi-disciplinary squads where members take clear responsibilities tailored to their learning interests.',
    },
    {
      phase: 'Phase 03',
      title: 'Iterative Prototyping',
      detail: 'Designing schematics, 3D modeling, writing modular code, and building physical and digital working models.',
    },
    {
      phase: 'Phase 04',
      title: 'Verification & Showcase',
      detail: 'Testing in realistic conditions, preparing documentation, open-sourcing repositories, and competing in technical events.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>SQUAD BUILDS &amp; TEAM FORMATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Community Projects
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              How student squads form, receive architectural guidance, build prototypes around genuine problem statements, and prepare for competitions.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. TEAM FORMATION & GUIDANCE */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Collaboration Model
              </span>
              <h2 className="section-title">How Squads Build Together</h2>
              <p className="section-subtitle mx-auto">
                No simulated or artificial projects. Every initiative starts from a real student proposal and collaborative squad effort.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {formationSteps.map((step, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.1}>
                <CardComponent className="h-full p-6 sm:p-8 flex flex-col justify-between border-2 border-neutral-200 dark:border-neutral-800 hover:border-volt-gold/60 transition-all shadow-md">
                  <div className="space-y-4">
                    <span className="font-mono text-2xl sm:text-3xl font-black text-amber-600 dark:text-volt-gold block">
                      {step.num}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT DEVELOPMENT STAGES */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-5xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Workflow
              </span>
              <h2 className="section-title">Project Development Roadmap</h2>
              <p className="section-subtitle mx-auto">
                The structured pathway from an initial proposal to a verified build.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projectStages.map((stg, sIdx) => (
              <ScrollAnimationWrapper key={sIdx} delay={sIdx * 0.08}>
                <div className="p-6 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-volt-gold uppercase tracking-wider block">
                      {stg.phase}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold font-display text-neutral-900 dark:text-white mt-1">
                      {stg.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2">
                      {stg.detail}
                    </p>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MORE PROJECTS COMING SOON - CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-3xl mx-auto">
          <ScrollAnimationWrapper>
            <div className="p-8 sm:p-12 rounded-3xl bg-neutral-100 dark:bg-onyx-900 border-2 border-volt-gold/60 text-center space-y-6 shadow-xl">
              <div className="space-y-3">
                <span className="text-xs font-mono font-black text-amber-600 dark:text-volt-gold uppercase tracking-widest block">
                  Active Community Pipeline
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-neutral-900 dark:text-white">
                  More Projects Coming Soon
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto leading-relaxed">
                  As newly joined members form project squads, their verified builds, hardware schematics, and open-source software repositories will be published and credited directly on this page.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 max-w-lg mx-auto text-left space-y-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="font-mono font-bold text-amber-600 dark:text-volt-gold uppercase tracking-wider text-xs">
                  Want to build a project?
                </div>
                <div>• Propose a problem statement you want to solve</div>
                <div>• Connect with peers across software, hardware, and design</div>
                <div>• Receive component and architecture guidance from leads</div>
                <div>• Prepare to represent your squad in technical competitions</div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link to="/join">
                  <button className="btn btn-primary text-xs sm:text-sm px-7 py-3.5 font-mono font-bold shadow-md w-full sm:w-auto inline-flex items-center justify-center gap-2">
                    <span>Join VoltEdge &amp; Form a Squad</span>
                    <ArrowRight size={14} />
                  </button>
                </Link>
                <a
                  href="https://voltedge007.pages.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary text-xs sm:text-sm px-6 py-3.5 font-mono font-bold w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>View Team 007 Portfolio</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </div>
  );
};

export default Projects;
