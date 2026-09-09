import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Code, 
  Calendar, 
  Share2, 
  ArrowRight, 
  Users, 
  Zap,
  Lightbulb,
  Trophy
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Community: React.FC = () => {
  const divisions = [
    {
      id: 'robotics',
      title: 'Robotics Engineering',
      icon: <Bot className="w-8 h-8 text-volt-gold" />,
      focus: 'Connect with like-minded peers interested in robotics and hardware systems. Form squads to build wherever you want, collaborating through our community with future plans for dedicated community maker spaces.',
      status: 'Active Track'
    },
    {
      id: 'computing',
      title: 'Computing Technology',
      icon: <Code className="w-8 h-8 text-accent" />,
      focus: 'Web development, software applications, full-stack programming, digital tools, utility software, data science, artificial intelligence, and machine learning.',
      status: 'Active Track'
    },
    {
      id: 'events',
      title: 'Events Workshops',
      icon: <Calendar className="w-8 h-8 text-volt-yellow" />,
      focus: 'Community meetups, peer-to-peer tutorials, collaborative technical sessions, workshops, and STEM outreach—with future plans to invite external engineers and industry professionals for guest sessions.',
      status: 'Active Track'
    },
    {
      id: 'operations',
      title: 'Operations Community',
      icon: <Share2 className="w-8 h-8 text-emerald-400" />,
      focus: 'Community management, social media, project documentation, member support, event logistics, and coordinating cross-team activities.',
      status: 'Active Track'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative py-14 md:py-20 bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom text-center max-w-3xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-volt-gold/10 text-amber-600 dark:text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold select-none">
              <span>COMMUNITY OVERVIEW</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display text-neutral-900 dark:text-white uppercase tracking-tight">
              VoltEdge Community
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Join students who want to build and learn together. Choose a primary interest track, and collaborate freely across all areas.
            </p>

            <div className="pt-2">
              <Link to="/join">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold">
                  Become Member →
                </button>
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 2. FOUR TRACKS */}
      <section className="section bg-white dark:bg-onyx-900/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Disciplines
              </span>
              <h2 className="section-title">Four Tracks</h2>
              <p className="section-subtitle mx-auto">
                Specialized divisions providing dedicated learning, sharing, and team formation.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((div, index) => (
              <ScrollAnimationWrapper key={div.id} delay={index * 0.08}>
                <CardComponent className="h-full flex flex-col justify-between border-t-4 border-t-volt-gold/80">
                  <div>
                    <div className="flex items-center space-x-3 mb-3.5">
                      <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                        {div.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                          {div.title}
                        </h3>
                        <span className="text-[10px] font-mono text-neutral-400">TRACK 0{index + 1}</span>
                      </div>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {div.focus}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">Track Status</span>
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
          <div className="max-w-3xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="text-center space-y-3 mb-10">
                <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase">
                  Collaboration
                </span>
                <h2 className="section-title">Working Together</h2>
                <p className="section-subtitle mx-auto">
                  There are no rigid boundaries. A programmer can team up with someone designing physical prototypes, and anyone can help with workshops and media.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <ScrollAnimationWrapper delay={0.1}>
                <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <Code size={16} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                    Code &amp; Hardware
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Software learners team up with physical builders to create connected projects and smart devices.
                  </p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.2}>
                <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-volt-gold/10 border border-volt-gold/30 flex items-center justify-center text-volt-gold">
                    <Share2 size={16} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                    Design &amp; Media
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    Creative members help design clean user interfaces, take photography, and document project stories.
                  </p>
                </div>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.3}>
                <div className="p-5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-2.5 shadow-sm">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Users size={16} />
                  </div>
                  <h4 className="font-display font-bold text-sm text-neutral-900 dark:text-white">
                    Shared Sessions
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    All members gather for peer-to-peer tutorials, collaborative technical discussions, problem brainstorming, and guest masterclasses.
                  </p>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY FLOWCHART */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Collaborative Pipeline
              </span>
              <h2 className="section-title">Community Flowchart</h2>
              <p className="section-subtitle mx-auto">
                How student builders connect, post problem statements, form squads, and build prototypes together.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Quick Flow Summary Bar */}
            <ScrollAnimationWrapper delay={0.05}>
              <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-center">
                <span className="px-3 py-1 rounded-lg bg-volt-gold/10 text-volt-gold font-bold">1. Join Channels</span>
                <span className="text-neutral-400">→</span>
                <span className="px-3 py-1 rounded-lg bg-accent/10 text-accent font-bold">2. Post Problem</span>
                <span className="text-neutral-400">→</span>
                <span className="px-3 py-1 rounded-lg bg-volt-yellow/10 text-volt-yellow font-bold">3. Connect Peers</span>
                <span className="text-neutral-400">→</span>
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold">4. Form Squad</span>
                <span className="text-neutral-400">→</span>
                <span className="px-3 py-1 rounded-lg bg-sky-500/10 text-sky-400 font-bold">5. Build &amp; Test</span>
                <span className="text-neutral-400">→</span>
                <span className="px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 font-bold">6. Deploy &amp; Record</span>
              </div>
            </ScrollAnimationWrapper>

            {/* Detailed 6-Step Visual Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <ScrollAnimationWrapper delay={0.1}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-volt-gold">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-volt-gold/10 text-volt-gold border border-volt-gold/30">
                        STEP 01
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-volt-gold">
                        <Users size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Join Channels
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">WhatsApp &amp; Discord</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Get verified and added to the official community communication channels and discussion groups.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Access Granted</span>
                    <span className="text-volt-gold">Next: Idea →</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.15}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-accent">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-accent/10 text-accent border border-accent/30">
                        STEP 02
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-accent">
                        <Lightbulb size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Post Problem
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">Real-World Statement</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Share real problem statements, bottlenecks, or concepts you want to tackle collaboratively.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Open Proposal</span>
                    <span className="text-accent">Next: Network →</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.2}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-volt-yellow">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-volt-yellow/10 text-volt-yellow border border-volt-yellow/30">
                        STEP 03
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-volt-yellow">
                        <Zap size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Connect Peers
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">Find Like-Minded</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Engage with fellow builders across hardware and software who share an interest in solving it.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Alignment Found</span>
                    <span className="text-volt-yellow">Next: Assemble →</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.25}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-emerald-400">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        STEP 04
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-emerald-400">
                        <Bot size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Form Squad
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">Squad Formation</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Assemble a focused project team with complementary skills across design, code, and hardware.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Team Ready</span>
                    <span className="text-emerald-400">Next: Build →</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.3}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-sky-400">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">
                        STEP 05
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-sky-400">
                        <Code size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Build &amp; Test
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">Iterative Prototypes</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Brainstorm architectures, construct working prototypes, and test through rapid feedback cycles.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Prototypes Live</span>
                    <span className="text-sky-400">Next: Launch →</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>

              <ScrollAnimationWrapper delay={0.35}>
                <CardComponent className="h-full flex flex-col justify-between border-t-2 border-t-amber-400">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30">
                        STEP 06
                      </span>
                      <div className="p-2 rounded-xl bg-neutral-100 dark:bg-onyx-800 text-amber-400">
                        <Trophy size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        Deploy &amp; Record
                      </h4>
                      <span className="text-[11px] font-mono text-neutral-500">VoltEdge Banner</span>
                    </div>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      Showcase results in our community Projects section, participate in competitions, and record achievements under VoltEdge.
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
                    <span>Project Credited</span>
                    <span className="text-amber-400">Community Impact</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMMUNITY PROJECTS (COMING SOON / WORKING SOON) */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom max-w-4xl">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Squad Roadmap
              </span>
              <h2 className="section-title">Community Projects</h2>
              <p className="section-subtitle mx-auto">
                Collaborative initiatives proposed and built together by our member squads.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={0.1}>
            <CardComponent className="p-8 sm:p-10 border-2 border-volt-gold/30 bg-gradient-to-b from-white to-neutral-50 dark:from-onyx-900 dark:to-onyx-950 shadow-xl text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-volt-gold/10 text-volt-gold border border-volt-gold/30 text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-volt-gold animate-ping" />
                <span>ACTIVE PIPELINE</span>
              </div>

              <div className="space-y-3 max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-black font-display text-neutral-900 dark:text-white">
                  Member Project Squads &amp; Builds
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We are actively assembling our founding student cohort across all tracks. Once in the WhatsApp and Discord channels, members propose problem statements, assemble squads, and build prototypes together.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2 text-xs font-mono">
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                  <span className="text-volt-gold font-bold block">Problem Statements</span>
                  <span className="text-[10px] text-neutral-500">Member Proposed</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                  <span className="text-accent font-bold block">Cross-Track</span>
                  <span className="text-[10px] text-neutral-500">Squad Teams</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                  <span className="text-volt-yellow font-bold block">Peer Feedback</span>
                  <span className="text-[10px] text-neutral-500">Rapid Testing</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                  <span className="text-emerald-400 font-bold block">Competitions</span>
                  <span className="text-[10px] text-neutral-500">Showcases &amp; Demos</span>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/projects">
                  <button className="btn btn-primary px-8 py-3.5 text-xs sm:text-sm font-bold">
                    Explore Active Projects →
                  </button>
                </Link>
              </div>
            </CardComponent>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-[#0A0A0A] text-white text-center">
        <div className="container-custom max-w-xl mx-auto space-y-4">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl sm:text-3xl font-display font-black uppercase">
              Join Us
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
              Find your squad and start building. Membership applications are open.
            </p>
            <div className="pt-2">
              <Link to="/join">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold">
                  Become a Member
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
