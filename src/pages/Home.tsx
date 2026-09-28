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
  Lightbulb,
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const Home: React.FC = () => {
  const whatWeDo = [
    {
      icon: <Lightbulb className="w-7 h-7 text-volt-gold" />,
      title: 'Propose Problems',
      description:
        'Post a problem statement, real-world engineering challenge, or project concept and find like-minded collaborators.',
      link: '/community',
    },
    {
      icon: <Users className="w-7 h-7 text-volt-gold" />,
      title: 'Form Teams',
      description:
        'Assemble focused multi-disciplinary project teams across robotics, software, AI, and outreach.',
      link: '/teams',
    },
    {
      icon: <Cpu className="w-7 h-7 text-volt-gold" />,
      title: 'Build Prototypes',
      description:
        'Brainstorm architectures, develop working proof-of-concepts, and test your solutions iteratively.',
      link: '/projects',
    },
    {
      icon: <Rocket className="w-7 h-7 text-volt-gold" />,
      title: 'Community Projects',
      description:
        'Turn concepts into working hardware and software systems recorded and credited in our Projects registry.',
      link: '/projects',
    },
    {
      icon: <Trophy className="w-7 h-7 text-volt-gold" />,
      title: 'Competitions & Milestones',
      description:
        'Team up with community members to represent VoltEdge in national robotics and technical competitions.',
      link: '/teams',
    },
    {
      icon: <Calendar className="w-7 h-7 text-volt-gold" />,
      title: 'Workshops & Outreach',
      description:
        'Participate in hands-on workshops, technical tutorials, and student STEM outreach programs.',
      link: '/community',
    },
  ];

  const divisions = [
    {
      code: 'VIC-DIV-01',
      roman: 'DIVISION I',
      icon: <Bot className="w-8 h-8 text-volt-gold" />,
      title: 'Division of Electronics & Robotic Systems',
      desc: 'Focuses on electronics, embedded systems, robotics, automation, hardware development, sensor networks, and intelligent physical systems.',
      highlight: 'Robotics • Embedded Systems • Hardware • IoT & Sensors',
    },
    {
      code: 'VIC-DIV-02',
      roman: 'DIVISION II',
      icon: <Code className="w-8 h-8 text-accent" />,
      title: 'Division of Computing & Intelligent Sciences',
      desc: 'Focuses on core computer science, software engineering, artificial intelligence, machine learning, web/app development, and computing research.',
      highlight: 'Software Engineering • AI & ML • Computer Vision • Web Platforms',
    },
    {
      code: 'VIC-DIV-03',
      roman: 'DIVISION III',
      icon: <Calendar className="w-8 h-8 text-volt-yellow" />,
      title: 'Division of Events, Workshops & Community Outreach',
      desc: 'Organizes technical workshops, hackathons, seminars, STEM outreach programs, school/community engagement, and volunteer coordination.',
      highlight: 'Technical Workshops • STEM Outreach • Community Programs',
    },
    {
      code: 'VIC-DIV-04',
      roman: 'DIVISION IV',
      icon: <Share2 className="w-8 h-8 text-emerald-400" />,
      title: 'Division of Organizational Operations & Administration',
      desc: 'Responsible for the internal operation and administration of VIC, including official documentation, records, digital assets, communications, and finance administration.',
      highlight: 'Official Documentation • Operations • Records & Media',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[82vh] flex items-center bg-gray-50 dark:bg-onyx-950 py-12 md:py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
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
                <span>VOLTEDGE INNOVATION COMMUNITY (VIC)</span>
              </motion.div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-display tracking-tight text-neutral-900 dark:text-white uppercase leading-tight">
                  VoltEdge <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-volt-gold to-yellow-400">
                    Innovation
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl leading-relaxed">
                  A student-founded engineering and innovation community connecting creators across electronics, robotics, software, AI, and STEM outreach through collaborative project teams.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link to="/apply" className="w-full sm:w-auto">
                  <button className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm py-3.5 px-7 font-mono font-bold flex items-center justify-center gap-2 shadow-lg">
                    <span>Apply to Join</span>
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
                  <div className="text-xs font-mono font-bold text-volt-gold">4 DIVISIONS</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Robotics, Computing &amp; AI, Events &amp; Outreach, and Operations.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-volt-gold">6 ACTIVE TEAMS</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Dedicated project, research, workshop, and operations teams.
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-xs font-mono font-bold text-volt-gold">REAL BUILDS</div>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400">
                    Autonomous rovers, IoT nodes, computer vision, and STEM kits.
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
                      <p className="text-neutral-500">// Multidisciplinary engineering &amp; innovation</p>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">LOCATION:</span>
                        <span className="text-emerald-400 font-bold">BHATKAL, KARNATAKA</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">FOUNDING MEMBERS:</span>
                        <span className="text-volt-gold font-bold">6 FOUNDERS (VIC-M001..006)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">DIVISIONS:</span>
                        <span className="text-white font-bold">4 PERMANENT DIVISIONS</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>6 Active Teams • 5 Projects</span>
                      <Link to="/teams" className="text-volt-gold font-bold hover:underline">
                        View Teams &amp; Achievements →
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
                VoltEdge Innovation Community (VIC) is a structured student engineering organization where members collaborate across four permanent divisions to build hardware, software, AI systems, and community STEM programs.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="section bg-gray-50 dark:bg-onyx-950 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <ScrollAnimationWrapper>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                Activities
              </span>
              <h2 className="section-title">What We Do</h2>
              <p className="section-subtitle mx-auto">
                Everything in VoltEdge revolves around engineering real prototypes, conducting research, and growing together.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeDo.map((action, index) => (
              <ScrollAnimationWrapper key={index} delay={index * 0.06}>
                <CardComponent className="h-full flex flex-col justify-between p-6">
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

      {/* 4. FOUR PERMANENT DIVISIONS */}
      <section className="section bg-white dark:bg-onyx-900/40 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <ScrollAnimationWrapper>
              <div>
                <span className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase">
                  Organizational Structure
                </span>
                <h2 className="section-title">Four Permanent Divisions</h2>
                <p className="section-subtitle mb-0">
                  Four specialized divisions working together across hardware, software, outreach, and operations.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={0.1}>
              <Link
                to="/community"
                className="mt-3 md:mt-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-volt-gold hover:text-amber-400"
              >
                <span>Explore Divisions</span>
                <ArrowRight size={14} />
              </Link>
            </ScrollAnimationWrapper>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {divisions.map((div, index) => (
              <ScrollAnimationWrapper key={div.code} delay={index * 0.08}>
                <CardComponent className="h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="p-2.5 rounded-2xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700">
                        {div.icon}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-neutral-100 dark:bg-onyx-800 text-volt-gold border border-volt-gold/30">
                        {div.roman} • {div.code}
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
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="py-16 bg-[#0A0A0A] text-white text-center border-t border-neutral-800">
        <div className="container-custom max-w-3xl mx-auto space-y-5">
          <ScrollAnimationWrapper>
            <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white uppercase">
              Ready to Join VoltEdge?
            </h2>

            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
              Submit your membership application directly to the VoltEdge Innovation Community administration board.
            </p>

            <div className="pt-2">
              <Link to="/apply">
                <button className="btn btn-primary text-xs sm:text-sm px-8 py-3.5 font-bold shadow-xl">
                  Open Membership Application Form
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
