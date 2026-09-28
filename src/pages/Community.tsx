import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Code, Calendar, Share2, Users, Zap, Lightbulb, Trophy } from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Community: React.FC = () => {
  const divisions = [
    {
      id: 'VIC-DIV-01',
      roman: 'Division I',
      title: 'Division of Electronics & Robotic Systems',
      icon: <Bot className="w-8 h-8 text-volt-gold" />,
      focus:
        'Focuses on electronics, embedded systems, robotics, automation, hardware development, sensor networks, and intelligent physical systems.',
      subsections: ['Robotics', 'Embedded Systems', 'Hardware R&D', 'Sensors & IoT', 'Automation'],
      status: 'Active Division',
    },
    {
      id: 'VIC-DIV-02',
      roman: 'Division II',
      title: 'Division of Computing & Intelligent Sciences',
      icon: <Code className="w-8 h-8 text-accent" />,
      focus:
        'Focuses on core computer science, software engineering, artificial intelligence, machine learning, web/app development, and computing research.',
      subsections: ['Software Development', 'Artificial Intelligence', 'Machine Learning', 'Web Platforms', 'Data Science'],
      status: 'Active Division',
    },
    {
      id: 'VIC-DIV-03',
      roman: 'Division III',
      title: 'Division of Events, Workshops & Community Outreach',
      icon: <Calendar className="w-8 h-8 text-volt-yellow" />,
      focus:
        'Organizes technical workshops, hackathons, seminars, STEM outreach programs, school/community engagement, and volunteer coordination.',
      subsections: ['Technical Workshops', 'STEM Outreach', 'Community Programs', 'Volunteer Coordination'],
      status: 'Active Division',
    },
    {
      id: 'VIC-DIV-04',
      roman: 'Division IV',
      title: 'Division of Organizational Operations & Administration',
      icon: <Share2 className="w-8 h-8 text-emerald-400" />,
      focus:
        'Responsible for the internal operation and administration of VIC, including official documentation, records, digital assets, communications, and finance administration.',
      subsections: ['Official Documentation', 'Organizational Operations', 'Records & Finance', 'Digital Assets'],
      status: 'Active Division',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>DIVISIONS &amp; COLLABORATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              VoltEdge Divisions
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Explore our four permanent divisions. Choose your primary division when applying and collaborate across all teams and projects.
            </p>

            <div className="pt-2">
              <Link to="/apply">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold">
                  Apply for Membership →
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. FOUR PERMANENT DIVISIONS */}
      <section className="section bg-white dark:bg-onyx-900/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Permanent Structure
              </span>
              <h2 className="section-title">Four Divisions</h2>
              <p className="section-subtitle mx-auto">
                Specialized divisions providing dedicated engineering focus, project teams, and technical collaboration.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((div, index) => (
              <ScrollAnimationWrapper key={div.id} delay={index * 0.08}>
                <CardComponent className="h-full flex flex-col justify-between border-t-4 border-t-volt-gold/80 p-6">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center space-x-3">
                        <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                          {div.icon}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold text-volt-gold uppercase">
                            {div.roman} • {div.id}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold font-display text-neutral-900 dark:text-white">
                            {div.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {div.focus}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {div.subsections.map((sub) => (
                        <span
                          key={sub}
                          className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-[11px] font-mono text-neutral-700 dark:text-neutral-300"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">Division Status</span>
                    <span className="text-volt-gold font-bold">{div.status}</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WORKING TOGETHER */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="text-center space-y-3 mb-10">
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                  Collaboration
                </span>
                <h2 className="section-title">Inter-Division Collaboration</h2>
                <p className="section-subtitle mx-auto">
                  Members across all four divisions collaborate seamlessly on joint hardware, software, AI, and STEM outreach initiatives.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-volt-gold/10 border border-volt-gold/30 flex items-center justify-center text-volt-gold">
                  <Bot size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                  Hardware &amp; Software
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Division I and Division II teams partner to build autonomous rovers, smart IoT nodes, and computer vision pipelines.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <Users size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                  Workshops &amp; STEM
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Division III coordinates hands-on technical workshops, demonstrations, and school/college outreach programs.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Trophy size={16} />
                </div>
                <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                  Documentation &amp; Records
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Division IV maintains official documentation, member registries, project records, and institutional continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA */}
      <section className="py-16 bg-[#0A0A0A] text-white text-center">
        <div className="container-custom max-w-xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase">
              Join a Division
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Submit your membership application and select your preferred division.
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

export default Community;
