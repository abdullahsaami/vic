export const CORE_LEADERSHIP_TEAM = [
  {
    name: 'Abdullah Saami Sada',
    role: 'Founder & Director of Operations & Community',
    desc: 'First-year student directing community operations, managing private channels, coordinating project squads, and handling member communications.',
    division: 'Operations & Community',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mohiddin Ahmed Motiya',
    role: 'Founder & Director of Events & Workshops',
    desc: 'First-year student directing technical events, scheduling collaborative peer meetups, and coordinating external industry guest sessions.',
    division: 'Events & Workshops',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Omer Ruknuddin',
    role: 'Founder & Director of Computing & Technology',
    desc: 'First-year student directing the computing division, managing software development initiatives, and coordinating technical problem statements.',
    division: 'Computing & Technology',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Ahmed Irfan Akrami',
    role: 'Founder & Director of Robotics & Engineering',
    desc: 'First-year student directing the robotics division, organizing hardware project squads, and facilitating prototype engineering.',
    division: 'Robotics & Engineering',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Mohammed Zaid Fareed',
    role: 'Founder & Assistant Lead – Robotics, Engineering & Events',
    desc: 'First-year student assisting in the Robotics & Engineering division as well as the Events & Workshops division, supporting technical activities and meetups.',
    division: 'Robotics & Events',
    linkedin: 'https://linkedin.com'
  },
  {
    name: 'Shamveel Bukhari Khateeb',
    role: 'Founder & Lead – Media & Documentation',
    desc: 'First-year student managing community media, official project documentation, visual branding, and sharing squad milestones.',
    division: 'Operations & Community',
    linkedin: 'https://linkedin.com'
  }
];

export const GOVERNANCE_NOTE = "VoltEdge is built by students for students. Members learn from each other through active problem-solving and building projects, complemented by special sessions with external industry professionals.";

import { Member, Application, Project, CommunityTeam, CommunityAnnouncement } from '../types';

export const INITIAL_MEMBERS: Member[] = [
  {
    id: 'VE-2026-001',
    name: 'Abdullah Saami Sada',
    email: 'abdullah@voltedge.community',
    phone: '+91 98765 43210',
    institution: 'Anjuman Institute of Technology and Management',
    education: 'B.E. (Mechanical)',
    primaryDivision: 'Operations & Community',
    secondaryInterests: ['Robotics & Engineering', 'Computing & Technology'],
    skills: ['Firmware Development', 'Robotics', 'Operations', 'Leadership'],
    membershipStatus: 'Active',
    joinDate: '2025-01-15',
    projects: ['Autonomous Rover Platform', 'Community Core Infrastructure'],
    teams: ['Team VoltEdge 007'],
    achievements: ['Community Champions Award - Technovate 2025', 'Founding Member'],
    leadershipRole: 'CEO / Operations Director',
    bio: 'Founding member of VoltEdge Innovation Community. Enthusiastic about robotics, microcontrollers, and peer-to-peer engineering culture.',
    avatar: 'https://voltedge007.pages.dev/assets/squad/abdullah.jpg',
    portfolioUrl: 'https://voltedge007.pages.dev'
  }
];

export const INITIAL_APPLICATIONS: Application[] = [
  {
    id: 'APP-2026-101',
    fullName: 'Aditya Shenoy',
    dobOrAge: '2004-05-12',
    email: 'aditya.shenoy@example.com',
    phone: '+91 91234 56789',
    city: 'Bhatkal',
    institution: 'AITM',
    course: 'B.E. Computer Science',
    yearSemester: '3rd Year / 5th Sem',
    primaryDivision: 'Computing & Technology',
    secondaryInterests: ['Robotics & Engineering'],
    skills: ['Python', 'Embedded Systems', 'IoT'],
    whyJoin: 'Passionate about integrating machine learning with robotics and wanting to work with the community.',
    contribution: 'Willing to contribute to software stacks and firmware simulation.',
    agreedCodeOfConduct: true,
    agreedApprovalPolicy: true,
    agreedCommunityPolicy: true,
    agreedPrivacyConsent: true,
    submittedAt: '2026-03-01T10:00:00Z',
    status: 'Pending'
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-001',
    title: 'EdgeBot 007 – High-Speed Arena Combat Rover',
    division: 'Robotics & Engineering',
    status: 'Active Build',
    problemStatement: 'Engineering an ultra-responsive, agile ground rover capable of high-torque maneuvers and precise wireless telemetry under strict tournament weight and power boundaries.',
    solution: 'Designed a 4WD differential drive platform with custom gyro stabilization algorithms, dual H-bridge motor drivers, and low-latency gamepad communication.',
    techStack: ['Arduino C++', 'Differential Drive', 'RF Telemetry', 'Fusion 360', 'PWM Controllers'],
    members: ['Abdullah Saami Sada', 'Mohiddin Ahmed Motiya', 'Omer Ruknuddin', 'Ahmed Irfan Akrami', 'Mohammed Zaid Fareed', 'Shamveel Bukhari Khateeb'],
    repositoryUrl: 'https://github.com/voltedgeinnovationcommunity/edgebot-007',
    liveUrl: 'https://voltedge007.pages.dev'
  },
  {
    id: 'proj-002',
    title: 'VoltEdge Innovation Platform & Web Architecture',
    division: 'Computing & Technology',
    status: 'In Progress',
    problemStatement: 'Student technical communities often suffer from fragmented communication, lack of project visibility, and opaque membership tracking without dedicated digital infrastructure.',
    solution: 'Engineered a lightning-fast, responsive web hub with division portals, open-source project showcases, verified application pipelines, and dynamic theme support.',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'Framer Motion'],
    members: ['Omer Ruknuddin', 'Abdullah Saami Sada'],
    repositoryUrl: 'https://github.com/voltedgeinnovationcommunity/community-web',
    liveUrl: 'https://voltedgeinnovationcommunity.pages.dev'
  },
  {
    id: 'proj-003',
    title: 'VisionSort – Computer Vision Parcel Sorting Prototype',
    division: 'Robotics & Engineering',
    status: 'Prototyping',
    problemStatement: 'Campus mail and local project inventory sorting is currently manual, time-consuming, and prone to sorting errors.',
    solution: 'Constructing an automated conveyor station utilizing OpenCV edge detection and color segmentation models on a microcomputer to actuate servo diverters.',
    techStack: ['Python', 'OpenCV', 'Raspberry Pi', 'Servo Actuators', 'Embedded Linux'],
    members: ['Ahmed Irfan Akrami', 'Mohammed Zaid Fareed', 'Omer Ruknuddin'],
    repositoryUrl: 'https://github.com/voltedgeinnovationcommunity/vision-sorter'
  },
  {
    id: 'proj-004',
    title: 'VoltEdge Session Dispatcher & Notification Hub',
    division: 'Operations & Community',
    status: 'In Incubation',
    problemStatement: 'Coordinating guest masterclasses and squad sprint calls across disparate messaging groups often leads to missed sessions and low member engagement.',
    solution: 'Developing an automated event scheduler and notification bot that synchronizes community calendar invites and broadcasts reminders across Discord and WhatsApp channels.',
    techStack: ['Node.js', 'Discord.js', 'WhatsApp Web API', 'SQLite', 'Express'],
    members: ['Mohiddin Ahmed Motiya', 'Shamveel Bukhari Khateeb', 'Abdullah Saami Sada'],
    repositoryUrl: 'https://github.com/voltedgeinnovationcommunity/session-dispatcher'
  }
];

export const INITIAL_TEAMS: CommunityTeam[] = [
  {
    id: 'team-007',
    name: 'Team VoltEdge 007',
    tagline: 'Flagship Competitive Robotics Crew',
    division: 'Robotics & Engineering',
    achievement: 'Community Champions Award at Technovate 2025',
    status: 'Active Competitor',
    externalUrl: 'https://voltedge007.pages.dev',
    image: 'https://voltedge007.pages.dev/assets/squad/squad-banner.jpg',
    description: 'The premier national robotics squad from VoltEdge Innovation Community representing the team in competitive tournaments.'
  }
];

export const INITIAL_ANNOUNCEMENTS: CommunityAnnouncement[] = [
  {
    id: 'ann-001',
    title: 'VoltEdge Innovation Community Cohort 2026 Open',
    date: '2026-03-01',
    category: 'Community',
    author: 'VoltEdge Executive Board',
    content: 'Applications are officially open for new student innovators to apply across all four divisions.',
    urgent: true
  }
];
