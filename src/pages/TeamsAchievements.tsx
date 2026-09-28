import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Trophy, Users, Calendar, MapPin, Award } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import { INITIAL_TEAMS, INITIAL_ACHIEVEMENTS } from '../data/seedData';

const TeamsAchievements: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>TEAMS &amp; ACHIEVEMENTS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              Teams &amp; Achievements
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Official teams and verified achievements recorded in the VoltEdge Innovation Community (VIC) registry.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* SECTION 1: ACHIEVEMENTS (SIMPLE & CLEAN) */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-6xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Verified Milestones
              </span>
              <h2 className="section-title">Achievements</h2>
              <p className="section-subtitle mx-auto">
                Awards, competition honours, and organizational milestones of VoltEdge Innovation Community.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INITIAL_ACHIEVEMENTS.map((ach, idx) => (
              <ScrollAnimationWrapper key={ach.id} delay={idx * 0.06}>
                <CardComponent className="h-full p-6 flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 hover:border-volt-gold/60 transition-all shadow-sm">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-volt-gold/15 text-amber-600 dark:text-volt-gold border border-volt-gold/30 font-mono font-bold text-xs">
                        {ach.id}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-onyx-800 text-neutral-600 dark:text-neutral-300 font-mono font-bold text-[11px]">
                        {ach.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white leading-snug">
                        {ach.title}
                      </h3>
                      <div className="text-xs font-mono font-bold text-amber-600 dark:text-volt-yellow mt-1 flex items-center gap-1.5">
                        <Trophy size={13} />
                        <span>{ach.positionResult}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {ach.description}
                    </p>

                    <div className="pt-2 space-y-1.5 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                      <div className="flex items-center gap-1.5">
                        <Award size={13} className="text-volt-gold shrink-0" />
                        <span className="truncate">Recipient: {ach.recipient}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-volt-gold shrink-0" />
                        <span>{ach.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-volt-gold shrink-0" />
                        <span>{ach.location}</span>
                      </div>
                    </div>
                  </div>

                  {ach.evidenceUrl && (
                    <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-neutral-500">{ach.eventName}</span>
                      <a
                        href={ach.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-volt-gold hover:underline"
                      >
                        <span>Details</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ACTIVE TEAMS (SIMPLE & CLEAN) */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-6xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Official Teams
              </span>
              <h2 className="section-title">Active Teams</h2>
              <p className="section-subtitle mx-auto">
                Specialized project, research, workshop, and operations teams across our four divisions.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_TEAMS.map((team, idx) => (
              <ScrollAnimationWrapper key={team.id} delay={idx * 0.06}>
                <CardComponent className="h-full p-6 flex flex-col justify-between border border-neutral-200 dark:border-neutral-800 hover:border-volt-gold/60 transition-all shadow-sm">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-volt-gold/15 text-amber-600 dark:text-volt-gold border border-volt-gold/30 font-mono font-bold text-xs">
                        {team.id}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 font-mono font-bold text-[11px]">
                        {team.teamType}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                        {team.name}
                      </h3>
                      <div className="text-xs font-mono text-amber-600 dark:text-volt-yellow mt-0.5">
                        {team.division}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {team.description}
                    </p>

                    {team.members && team.members.length > 0 && (
                      <div className="pt-1">
                        <div className="text-[11px] font-mono font-bold text-neutral-500 dark:text-neutral-400 uppercase mb-1.5 flex items-center gap-1.5">
                          <Users size={12} className="text-volt-gold" />
                          <span>Assigned Members ({team.members.length}):</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {team.members.map((m) => (
                            <span
                              key={m}
                              className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {team.externalUrl && (
                    <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                      <span className="text-xs font-mono text-neutral-500">Team Portfolio</span>
                      <a
                        href={team.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-volt-gold hover:underline"
                      >
                        <span>Visit Portfolio</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/apply">
              <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-mono font-bold inline-flex items-center gap-2">
                <span>Apply to Join a Team</span>
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamsAchievements;
