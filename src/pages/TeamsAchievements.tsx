import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const TeamsAchievements: React.FC = () => {
  const team007Members = [
    'Abdullah',
    'Mohiddin',
    'Omer',
    'Irfan',
    'Zaid',
    'Shamveel'
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>COMMUNITY SQUADS &amp; HONORS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Teams &amp; Achievements
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Discover the competitive project squads and achievements emerging from VoltEdge Innovation Community.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* SECTION 1: ACTIVE TEAMS */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Student Squads
              </span>
              <h2 className="section-title">Active Teams</h2>
              <p className="section-subtitle mx-auto">
                Collaborative teams assembled within the VoltEdge Innovation Community.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Team VoltEdge 007 Card */}
            <div className="lg:col-span-7">
              <ScrollAnimationWrapper animation="fade-right">
                <CardComponent className="h-full border-2 border-volt-gold/70 p-6 sm:p-8 flex flex-col justify-between shadow-lg">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-volt-gold text-black font-mono font-black text-xs">
                        TEAM VOLTEDGE 007
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-500 dark:text-neutral-400">
                        NRL 2025 • IIT Bombay
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 dark:text-white uppercase">
                        Team VoltEdge 007
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                        Participated in the <strong>National Robotics League 2025</strong> at the Indian Institute of Technology Bombay.
                      </p>
                    </div>

                    {/* Team Members List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono font-bold text-amber-600 dark:text-volt-gold uppercase">
                        <span>Team Members (6):</span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {team007Members.map((member, idx) => (
                          <div 
                            key={idx}
                            className="px-3 py-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 text-center"
                          >
                            {member}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs font-mono text-neutral-500">
                      Official Team Portfolio
                    </span>
                    <a
                      href="https://voltedge007.pages.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-xs py-2.5 px-5 font-mono font-bold w-full sm:w-auto inline-flex items-center justify-center gap-2"
                    >
                      <span>VoltEdge 007 Portfolio</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            </div>

            {/* Future Teams Card */}
            <div className="lg:col-span-5">
              <ScrollAnimationWrapper animation="fade-left" delay={0.15}>
                <CardComponent className="h-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-onyx-950/50 p-6 sm:p-8 flex flex-col justify-between text-center group hover:border-volt-gold/60 transition-colors">
                  <div className="space-y-5 pt-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-amber-600 dark:text-volt-gold font-bold tracking-widest uppercase block">
                        Squad Roadmap
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 dark:text-white uppercase">
                        Future Teams
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm mx-auto">
                      More teams will emerge from VoltEdge Innovation Community. Join us, propose your challenge, and assemble your squad.
                    </p>
                  </div>

                  <div className="pt-8">
                    <Link to="/join">
                      <button className="btn btn-secondary w-full text-xs font-mono font-bold py-3.5 group-hover:border-volt-gold inline-flex items-center justify-center gap-2">
                        <span>Join VoltEdge</span>
                        <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ACHIEVEMENTS */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Recognition
              </span>
              <h2 className="section-title">Achievements</h2>
              <p className="section-subtitle mx-auto">
                Milestones and awards earned by VoltEdge community squads.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch max-w-5xl mx-auto">
            {/* Community Champions Award Card */}
            <div className="lg:col-span-7">
              <ScrollAnimationWrapper animation="fade-right">
                <CardComponent className="h-full border-2 border-volt-gold/70 p-0 overflow-hidden shadow-lg flex flex-col justify-between">
                  <div>
                    {/* Stage Celebration Photo */}
                    <div className="relative h-56 sm:h-72 w-full bg-black overflow-hidden group">
                      <img
                        src="https://voltedge007.pages.dev/assets/builds/stage-victory-celebration.jpg"
                        alt="Community Champions Celebration at IIT Bombay"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full bg-volt-gold text-black font-mono font-black text-xs shadow-md">
                          HONOR &amp; AWARD
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <div className="text-[11px] font-mono font-bold text-volt-yellow uppercase tracking-widest">
                          National Robotics League 2025
                        </div>
                        <h4 className="text-lg sm:text-2xl font-black font-display uppercase">
                          Stage Celebration at IIT Bombay
                        </h4>
                      </div>
                    </div>

                    {/* Award Details without medal/badge symbol */}
                    <div className="p-6 space-y-3">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold font-display text-neutral-900 dark:text-white">
                          Community Champions Award
                        </h4>
                        <p className="text-xs font-mono text-amber-600 dark:text-volt-gold font-semibold mt-1">
                          National Robotics League 2025 • Awarded on stage at IIT Bombay Powai
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
                        Awarded on stage at the Indian Institute of Technology Bombay for outstanding community STEM engagement, hands-on robotics workshops, and student outreach.
                      </p>
                    </div>
                  </div>

                  {/* Portfolio Link Button */}
                  <div className="p-5 bg-neutral-50 dark:bg-onyx-950 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs font-mono text-neutral-500">
                      View Award Details &amp; Video
                    </span>
                    <a
                      href="https://voltedge007.pages.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary text-xs py-2.5 px-5 font-mono font-bold w-full sm:w-auto inline-flex items-center justify-center gap-2"
                    >
                      <span>View Portfolio</span>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            </div>

            {/* Future Achievements Card */}
            <div className="lg:col-span-5">
              <ScrollAnimationWrapper animation="fade-left" delay={0.15}>
                <CardComponent className="h-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-neutral-50/50 dark:bg-onyx-950/50 p-6 sm:p-8 flex flex-col justify-between text-center group hover:border-volt-gold/60 transition-colors">
                  <div className="space-y-5 pt-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-amber-600 dark:text-volt-gold font-bold tracking-widest uppercase block">
                        Milestones Roadmap
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 dark:text-white uppercase">
                        Future Achievements
                      </h3>
                    </div>

                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm mx-auto">
                      More achievements will be coming as community squads compete and innovate in technical competitions.
                    </p>
                  </div>

                  <div className="pt-8">
                    <Link to="/join">
                      <button className="btn btn-outline w-full text-xs font-mono font-bold py-3.5 group-hover:border-volt-gold inline-flex items-center justify-center gap-2">
                        <span>Build With Us</span>
                        <ArrowRight size={14} />
                      </button>
                    </Link>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsAchievements;

