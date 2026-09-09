import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Users, 
  Trophy, 
  Calendar, 
  Rocket, 
  Bot, 
  Code, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  Terminal,
  Zap,
  Lightbulb
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  const whatWeDo = [
    {
      icon: <Lightbulb className="w-7 h-7 text-volt-gold" />,
      title: 'Propose Problems',
      description: 'Post a problem statement, real-world challenge, or project concept and find like-minded collaborators.',
      link: '/community'
    },
    {
      icon: <Users className="w-7 h-7 text-volt-gold" />,
      title: 'Form Squads',
      description: 'Assemble focused multi-track project sub-teams across software, hardware, and design on WhatsApp & Discord.',
      link: '/community'
    },
    {
      icon: <Cpu className="w-7 h-7 text-volt-gold" />,
      title: 'Build Prototypes',
      description: 'Brainstorm architectures, develop working proof-of-concepts, and test your solutions iteratively.',
      link: '/community'
    },
    {
      icon: <Rocket className="w-7 h-7 text-volt-gold" />,
      title: 'Community Projects',
      description: 'Turn concepts into working tools and open-source systems, displayed and credited directly in our Projects section.',
      link: '/projects'
    },
    {
      icon: <Trophy className="w-7 h-7 text-volt-gold" />,
      title: 'Competitions',
      description: 'Team up with community members to represent squads and compete in collegiate engineering and technical competitions.',
      link: '/teams'
    },
    {
      icon: <Calendar className="w-7 h-7 text-volt-gold" />,
      title: 'Collaborative Sessions',
      description: 'Attend peer-led meetups, technical tutorials, and interactive sessions with plans for future external guest talks.',
      link: '/community'
    }
  ];

  const divisions = [
    {
      icon: <Bot className="w-8 h-8 text-volt-gold" />,
      title: 'Robotics Engineering',
      desc: 'Connect with like-minded peers passionate about robotics and hardware systems. Form squads to build machines and projects wherever you work, collaborating through our community with plans for future dedicated maker spaces.',
      highlight: 'Robotics Systems • Hardware Prototyping • Like-Minded Creators'
    },
    {
      icon: <Code className="w-8 h-8 text-accent" />,
      title: 'Computing Technology',
      desc: 'Web development, software applications, full-stack development, programming, digital tools, utility software, data science, artificial intelligence, and machine learning.',
      highlight: 'Full-Stack • AI & ML • Data Science • Utility Software'
    },
    {
      icon: <Calendar className="w-8 h-8 text-volt-yellow" />,
      title: 'Events Workshops',
      desc: 'Community meetups, peer-to-peer tutorials, collaborative technical workshops, and STEM outreach programs—with future plans to invite external engineers and industry professionals for guest sessions.',
      highlight: 'Peer Tutorials • Tech Meetups • STEM Outreach'
    },
    {
      icon: <Share2 className="w-8 h-8 text-emerald-400" />,
      title: 'Operations Community',
      desc: 'Operating this community: community management, community social media, project documentation, member support, and coordinating team activities.',
      highlight: 'Community Operations • Documentation • Coordination'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center bg-gray-50 dark:bg-onyx-950 py-12 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:28px_28px] opacity-40 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-volt-gold border border-volt-gold/40 text-xs font-mono font-bold"
              >
                <span>PEER-TO-PEER NETWORK</span>
              </motion.div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-900 dark:text-white uppercase leading-tight">
                  VoltEdge <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-volt-gold to-yellow-400">
                    Innovation
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
                  A student-founded engineering community connecting ambitious creators across robotics, full-stack software, data science, and AI through real problem statements and project squads.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/join" className="w-full sm:w-auto">
                  <button className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm py-3.5 px-7 font-mono font-bold flex items-center justify-center gap-2 shadow-lg">
                    <span>Join Community</span>
                    <ArrowRight size={15} />
                  </button>
                </Link>
                <Link to="/projects" className="w-full sm:w-auto">
                  <button className="btn btn-secondary w-full sm:w-auto text-xs sm:text-sm py-3.5 px-6 font-mono font-bold flex items-center justify-center gap-2">
                    <span>Explore Projects</span>
                  </button>
                </Link>
              </div>

              {/* 3 Core Community Focus Points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-volt-gold">COMMUNITY MISSION</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Collaborate and create a network of like-minded problem solvers.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-volt-gold">PEER SQUADS</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Students form teams based on real problem statements.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-volt-gold">BUILD &amp; TEST</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Brainstorm architectures and build working prototypes.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-5">
              <ScrollAnimationWrapper animation="fade-left">
                <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-b from-volt-gold/30 via-volt-gold/10 to-transparent p-1 shadow-2xl">
                  <div className="rounded-[22px] bg-neutral-900 p-6 sm:p-7 border border-neutral-800 space-y-5 font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-bold text-white tracking-wider">VOLTEDGE COMMUNITY</span>
                      </div>
                      <span className="text-volt-gold font-bold">STATUS ACTIVE</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <p className="text-neutral-500">// Problem-solving &amp; project building network</p>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">COMMUNITY TYPE:</span>
                        <span className="text-emerald-400 font-bold">PEER-TO-PEER</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">CORE MODEL:</span>
                        <span className="text-volt-gold font-bold">SQUAD FORMATION</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">CHANNELS:</span>
                        <span className="text-white font-bold">WHATSAPP &amp; DISCORD</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>4 Divisions • Active Squads</span>
                      <Link to="/community" className="text-volt-gold font-bold hover:underline">
                        Explore Divisions →
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR PURPOSE */}
      <section className="section bg-white dark:bg-onyx-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Core Identity
              </span>
              <h2 className="section-title">Our Purpose</h2>
              <p className="text-base sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-200 leading-relaxed">
                VoltEdge Innovation Community is a collaborative student platform where members connect with like-minded peers, post real problem statements, form focused squads on WhatsApp &amp; Discord, and build prototypes together under the VoltEdge banner.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 3. WHAT WE DO (6 SIMPLE PILLARS) */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Activities
              </span>
              <h2 className="section-title">What We Do</h2>
              <p className="section-subtitle mx-auto">
                Everything in VoltEdge revolves around learning together, building cool things, and helping each other grow.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((action, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.06}>
                <CardComponent className="h-full flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-2xl bg-volt-gold/10 border border-volt-gold/20 w-fit mb-4">
                      {action.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 font-display">
                      {action.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
                      {action.description}
                    </p>
                  </div>
                  <Link
                    to={action.link}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-volt-gold hover:text-amber-500 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={13} />
                  </Link>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
      {/* 4. FOUR DIVISIONS (THE FOUR AREAS) */}
      <section className="section bg-white dark:bg-onyx-900/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <ScrollAnimationWrapper>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                  Community Tracks
                </span>
                <h2 className="section-title">Four Divisions</h2>
                <p className="section-subtitle mb-0">
                  Four specialized tracks that collaborate seamlessly without departmental boundaries.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.1}>
              <Link to="/community" className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-volt-gold hover:text-amber-400">
                <span>Explore Community</span>
                <ArrowRight size={14} />
              </Link>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((div, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.08}>
                <CardComponent className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                        {div.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-onyx-800 text-neutral-500">
                        TRACK 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 font-display">
                      {div.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {div.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-500">
                    <span className="text-volt-gold font-semibold">{div.highlight}</span>
                  </div>
                </CardComponent>
              </ScrollAnimationWrapper>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/community">
              <button className="btn btn-secondary px-7 py-3 text-xs font-mono group">
                <span>Explore Community Tracks</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-16 bg-[#0A0A0A] text-white text-center border-t border-neutral-800">
        <div className="container-custom max-w-3xl mx-auto space-y-5">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
              Join Community
            </h2>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Join a dedicated community of creators, students, and engineers turning bold concepts into working prototypes.
            </p>

            <div className="pt-2">
              <Link to="/join">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold shadow-xl">
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

export default Home;
