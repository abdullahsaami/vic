import {
  Member,
  Application,
  Project,
  CommunityTeam,
  CommunityAchievement,
  CommunityAnnouncement,
} from '../types';

export const CORE_LEADERSHIP_TEAM = [
  {
    id: 'VIC-M001',
    name: 'Abdullah Saami',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to robotics, embedded systems, web platforms, and organizational operations.',
    division: 'Division IV — Organizational Operations & Administration',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'VIC-M002',
    name: 'Omer Ruknuddin',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to robotics engineering, control systems, microcontrollers, and hardware prototyping.',
    division: 'Division I — Electronics & Robotic Systems',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'VIC-M003',
    name: 'Mohammad Zaid',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to PCB design, sensor fusion, embedded hardware, and IoT systems.',
    division: 'Division I — Electronics & Robotic Systems',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'VIC-M004',
    name: 'Shamveel Bukhari',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to artificial intelligence, machine learning, computer vision, and intelligent systems research.',
    division: 'Division II — Computing & Intelligent Sciences',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'VIC-M005',
    name: 'Ahmed Irfan',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to full-stack software development, web architecture, and digital platforms.',
    division: 'Division II — Computing & Intelligent Sciences',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 'VIC-M006',
    name: 'Mohiddin Ahmed',
    role: 'Founding Member',
    desc: 'Founding Member of VoltEdge Innovation Community contributing to technical workshops, STEM outreach programs, and community events.',
    division: 'Division III — Events, Workshops & Community Outreach',
    linkedin: 'https://linkedin.com',
  },
];

export const GOVERNANCE_NOTE =
  'VoltEdge Innovation Community (VIC) is governed under the VIC Founding Charter across four permanent divisions by its six Founding Members. Members collaborate through project teams, workshops, and peer engineering initiatives.';

export const INITIAL_MEMBERS: Member[] = [
  {
    id: 'VIC-M001',
    name: 'Abdullah Saami',
    email: 'abdullahone2006@gmail.com',
    phone: '+91 98765 43210',
    institution: 'Engineering Institute, Karnataka',
    education: 'B.E. / B.Tech (2nd Year)',
    primaryDivision: 'Division IV — Organizational Operations & Administration',
    secondaryInterests: [
      'Division I — Electronics & Robotic Systems',
      'Division II — Computing & Intelligent Sciences',
    ],
    skills: ['Robotics', 'Embedded Systems', 'Web Development', 'Python', 'Project Management'],
    membershipStatus: 'Active',
    joinDate: '2026-09-14',
    projects: [
      'Autonomous Rover System (EdgeBot Platform)',
      'VIC Organizational Documentation & Operations Suite',
    ],
    teams: ['Robotics & Embedded Systems Team', 'Documentation & Operations Team'],
    achievements: [
      'Community Champions Award — National Robotics League Finals',
      'Founding Member',
    ],
    leadershipRole: 'Founding Member',
    bio: 'Founding Member of VIC Innovation Community. Dedicated to multidisciplinary engineering, robotics, and institutional operations.',
    portfolioUrl: 'https://voltedge007.pages.dev',
  },
];

export const INITIAL_APPLICATIONS: Application[] = [];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'VIC-P001',
    title: 'Autonomous Rover System (EdgeBot Platform)',
    division: 'Division I — Electronics & Robotic Systems',
    teamName: 'Robotics & Embedded Systems Team',
    category: 'Hardware & Robotics',
    status: 'Active',
    description:
      'Autonomous terrain rover featuring differential drive kinematics, sensor fusion, and real-time obstacle avoidance.',
    objectives:
      'Develop a modular robotics testbed for national competitions and student research.',
    techStack: ['Embedded C++', 'Python', 'ROS', 'OpenCV', 'ESP32'],
    members: ['Abdullah Saami', 'Omer Ruknuddin', 'Mohammad Zaid'],
    repositoryUrl: 'https://github.com/abdullahsaami/VIC-ADMIN',
    liveUrl: 'https://voltedge007.pages.dev',
  },
  {
    id: 'VIC-P002',
    title: 'Smart IoT Environmental & Irrigation Node',
    division: 'Division I — Electronics & Robotic Systems',
    teamName: 'Hardware & IoT Innovation Team',
    category: 'Hardware & Robotics',
    status: 'Active',
    description:
      'Low-power multi-sensor telemetry node for automated precision irrigation and soil monitoring.',
    objectives:
      'Deploy field-ready sensor nodes with solar charging and LoRa/Wi-Fi telemetry.',
    techStack: ['ESP32', 'Arduino', 'IoT', 'Sensors', 'C++'],
    members: ['Mohammad Zaid'],
    repositoryUrl: 'https://github.com/abdullahsaami',
  },
  {
    id: 'VIC-P003',
    title: 'AI Vision & Intelligent Diagnostics Suite',
    division: 'Division II — Computing & Intelligent Sciences',
    teamName: 'AI & Intelligent Systems Research Team',
    category: 'Software & AI',
    status: 'Active',
    description:
      'Edge-deployable computer vision pipeline for real-time lane detection, object tracking, and visual telemetry.',
    objectives:
      'Provide low-latency inference models for Division I and Division II joint projects.',
    techStack: ['Python', 'PyTorch', 'OpenCV', 'YOLO'],
    members: ['Shamveel Bukhari'],
    repositoryUrl: 'https://github.com/abdullahsaami',
  },
  {
    id: 'VIC-P004',
    title: 'VIC Organizational Documentation & Operations Suite',
    division: 'Division IV — Organizational Operations & Administration',
    teamName: 'Web & Software Engineering Team',
    category: 'Operations & Tools',
    status: 'Completed',
    description:
      'Internal organizational management system and structured documentation suite for VIC administration.',
    objectives:
      'Maintain auditable member, division, team, project, and governance records.',
    techStack: ['Astro', 'TypeScript', 'React', 'IndexedDB'],
    members: ['Abdullah Saami', 'Ahmed Irfan'],
    repositoryUrl: 'https://github.com/abdullahsaami/VIC-ADMIN',
    liveUrl: 'https://voltedge007.pages.dev',
  },
  {
    id: 'VIC-P005',
    title: 'Community STEM & Robotics Workshop Curriculum',
    division: 'Division III — Events, Workshops & Community Outreach',
    teamName: 'STEM Workshops & Community Outreach Team',
    category: 'Community & STEM',
    status: 'Planning',
    description:
      'Open educational lab kits and workshop modules introducing school and college students to electronics and AI.',
    objectives:
      'Conduct structured hands-on workshops across Bhatkal and coastal Karnataka.',
    techStack: ['STEM Kits', 'Microcontrollers', 'Python Basics'],
    members: ['Mohiddin Ahmed'],
  },
];

export const INITIAL_TEAMS: CommunityTeam[] = [
  {
    id: 'VIC-T001',
    name: 'Robotics & Embedded Systems Team (Team VoltEdge 007)',
    tagline: 'Autonomous Rovers & Embedded Control Systems',
    division: 'Division I — Electronics & Robotic Systems',
    teamType: 'Project Team',
    members: [
      'Abdullah Saami',
      'Omer Ruknuddin',
      'Mohammad Zaid',
      'Shamveel Bukhari',
      'Ahmed Irfan',
      'Mohiddin Ahmed',
    ],
    achievement: 'Community Champions Award — National Robotics League 2025 (IIT Bombay)',
    status: 'Active',
    externalUrl: 'https://voltedge007.pages.dev',
    description:
      'Designs and builds autonomous rovers, robotic manipulators, and embedded control systems. Founding heritage team that represented VoltEdge at IIT Bombay.',
  },
  {
    id: 'VIC-T002',
    name: 'Hardware & IoT Innovation Team',
    tagline: 'Custom PCBs, Sensor Networks & Smart Hardware',
    division: 'Division I — Electronics & Robotic Systems',
    teamType: 'Research Team',
    members: ['Mohammad Zaid'],
    status: 'Active',
    description:
      'Focuses on custom PCB design, sensor networks, ESP32/STM32 firmware, and smart hardware prototypes.',
  },
  {
    id: 'VIC-T003',
    name: 'AI & Intelligent Systems Research Team',
    tagline: 'Computer Vision, Machine Learning & Automation',
    division: 'Division II — Computing & Intelligent Sciences',
    teamType: 'Research Team',
    members: ['Shamveel Bukhari'],
    status: 'Active',
    description:
      'Conducts applied research in computer vision, machine learning models, and intelligent automation.',
  },
  {
    id: 'VIC-T004',
    name: 'Web & Software Engineering Team',
    tagline: 'Full-Stack Platforms & Digital Infrastructure',
    division: 'Division II — Computing & Intelligent Sciences',
    teamType: 'Project Team',
    members: ['Ahmed Irfan'],
    status: 'Active',
    description:
      'Develops full-stack web platforms, community tools, and internal digital infrastructure.',
  },
  {
    id: 'VIC-T005',
    name: 'STEM Workshops & Community Outreach Team',
    tagline: 'Hands-On Robotics, Coding & Student Outreach',
    division: 'Division III — Events, Workshops & Community Outreach',
    teamType: 'Workshop Team',
    members: ['Mohiddin Ahmed'],
    status: 'Active',
    description:
      'Plans and facilitates hands-on robotics, coding, and STEM outreach sessions for students.',
  },
  {
    id: 'VIC-T006',
    name: 'Documentation & Operations Team',
    tagline: 'Official Documentation, Records & Operations',
    division: 'Division IV — Organizational Operations & Administration',
    teamType: 'Operations Team',
    members: ['Abdullah Saami'],
    status: 'Active',
    description:
      'Manages official institutional documentation, member registries, financial logs, and media archives.',
  },
];

export const INITIAL_ACHIEVEMENTS: CommunityAchievement[] = [
  {
    id: 'VIC-A001',
    title: 'Community Champions Award — National Robotics League Finals',
    recipient: 'Team VoltEdge (Founding Heritage)',
    scope: 'Team',
    category: 'Competition',
    eventName: 'National Robotics League 2025',
    date: '18 January 2025',
    positionResult: 'Community Champions Award & National Finalist',
    location: 'IIT Bombay, Mumbai',
    issuedBy: 'The Innovation Story / IIT Bombay',
    description:
      'Recognized at IIT Bombay for robotics engineering excellence, collaborative spirit, and community STEM impact.',
    evidenceUrl: 'https://voltedge007.pages.dev',
  },
  {
    id: 'VIC-A002',
    title: 'Establishment & Ratification of VIC Founding Charter v1.0',
    recipient: 'VoltEdge Innovation Community (VIC)',
    scope: 'Organization',
    category: 'Organizational',
    eventName: 'VIC Founding General Assembly',
    date: '14 September 2026',
    positionResult: 'Charter Enacted',
    location: 'Bhatkal, Karnataka',
    issuedBy: 'VIC Founding Assembly',
    description:
      'Formal constitution of VoltEdge Innovation Community across four permanent divisions by the six Founding Members.',
  },
  {
    id: 'VIC-A003',
    title: 'EdgeBot Autonomous Navigation Prototype Completion',
    recipient: 'Robotics & Embedded Systems Team (VIC-T001)',
    scope: 'Team',
    category: 'Research',
    eventName: 'Internal Technical Review',
    date: '20 September 2026',
    positionResult: 'Milestone Completed',
    location: 'Bhatkal, Karnataka',
    issuedBy: 'Division I — Electronics & Robotic Systems',
    description:
      'Successful field test of closed-loop motor control and vision-assisted path tracking.',
    evidenceUrl: 'https://voltedge007.pages.dev',
  },
];

export const INITIAL_ANNOUNCEMENTS: CommunityAnnouncement[] = [
  {
    id: 'ann-001',
    title: 'VoltEdge Innovation Community Membership Applications Open',
    date: '2026-09-28',
    category: 'Community',
    author: 'VIC Administration',
    content:
      'Applications are officially open for student innovators to apply across our four permanent divisions.',
    urgent: true,
  },
];
