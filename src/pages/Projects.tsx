import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Users, FolderKanban } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { INITIAL_PROJECTS } from '../data/seedData';

const Projects: React.FC = () => {
  const formationSteps = [
    {
      num: '01',
      title: 'Problem Statements & Team Formation',
      desc: 'Members identify real engineering challenges across robotics, IoT, AI, and web platforms and form focused project teams.',
    },
    {
      num: '02',
      title: 'Architecture & Prototyping',
      desc: 'Teams design hardware schematics, embedded firmware, and software architectures and build iterative working prototypes.',
    },
    {
      num: '03',
      title: 'Deployment & Verification',
      desc: 'Completed builds are tested, documented in Official Documentation, and deployed for competitions or community impact.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>COMMUNITY PROJECTS REGISTRY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Community Projects
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Active and completed hardware, software, AI, and STEM outreach projects engineered by VoltEdge Innovation Community teams.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. ACTIVE & COMPLETED PROJECTS (FROM INTERNAL REGISTRY) */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Official Registry
              </span>
              <h2 className="section-title">Projects Overview</h2>
              <p className="section-subtitle mx-auto">
                Projects registered across our four permanent divisions.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {INITIAL_PROJECTS.map((project, idx) => (
              <ScrollAnimationWrapper key={project.id} delay={idx * 0.06}>
                <CardComponent className="h-full p-6 sm:p-7 flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 hover:border-volt-gold/60 transition-all shadow-sm">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-volt-gold/15 text-amber-600 dark:text-volt-gold border border-volt-gold/30 font-mono font-bold text-xs">
                        {project.id}
                      </span>
                      <span
                        className={`px-2.5 py-1 rounded-full font-mono font-bold text-[11px] ${
                          project.status === 'Completed'
                            ? 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30'
                            : project.status === 'Active'
                            ? 'bg-amber-500/15 text-volt-gold border border-volt-gold/30'
                            : 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="text-xs font-mono text-amber-600 dark:text-volt-yellow mt-1">
                        {project.division}
                      </div>
                      {project.teamName && (
                        <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                          Team: {project.teamName}
                        </div>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {project.description}
                    </p>

                    {project.techStack && project.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.members && project.members.length > 0 && (
                      <div className="pt-2">
                        <div className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase mb-1.5 flex items-center gap-1.5">
                          <Users size={12} className="text-volt-gold" />
                          <span>Project Members ({project.members.length}):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {project.members.map((memberName) => (
                            <span
                              key={memberName}
                              className="px-2.5 py-1 rounded-lg bg-volt-gold/10 text-amber-700 dark:text-volt-gold border border-volt-gold/25 text-xs font-semibold"
                            >
                              {memberName}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {(project.liveUrl || project.repositoryUrl) && (
                    <div className="pt-4 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
                      <span className="text-[11px] font-mono text-neutral-500 flex items-center gap-1">
                        <FolderKanban size={12} /> {project.category || 'Engineering Project'}
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono font-bold text-volt-gold hover:underline"
                        >
                          <span>View Project</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  )}
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW TEAMS BUILD TOGETHER */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Workflow
              </span>
              <h2 className="section-title">How Teams Build Together</h2>
              <p className="section-subtitle mx-auto">
                Every project starts from a real problem statement and collaborative team effort.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {formationSteps.map((step, idx) => (
              <ScrollAnimationWrapper key={idx} delay={idx * 0.08}>
                <CardComponent className="h-full p-6 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-mono text-2xl font-black text-volt-gold block">
                      {step.num}
                    </span>
                    <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
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

          <div className="mt-10 text-center">
            <Link to="/apply">
              <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-mono font-bold inline-flex items-center gap-2">
                <span>Apply to Join &amp; Build</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
