export type DivisionType = 
  | 'Robotics & Engineering'
  | 'Computing & Technology'
  | 'Events & Workshops'
  | 'Operations & Community';

export interface Member {
  id: string;
  name: string;
  email: string;
  phone: string;
  institution: string;
  education: string;
  primaryDivision: DivisionType;
  secondaryInterests: string[];
  skills: string[];
  membershipStatus: 'Active' | 'Under Review' | 'Alumni' | 'Suspended';
  joinDate: string;
  projects: string[];
  teams: string[];
  achievements: string[];
  leadershipRole?: string;
  bio: string;
  avatar?: string;
  portfolioUrl?: string;
}

export interface Application {
  id: string;
  fullName: string;
  dobOrAge: string;
  email: string;
  phone: string;
  city: string;
  institution: string;
  course: string;
  yearSemester: string;
  primaryDivision: DivisionType;
  secondaryInterests: string[];
  skills: string[];
  whyJoin: string;
  contribution: string;
  pastProjects?: string;
  portfolioUrl?: string;
  agreedCodeOfConduct: boolean;
  agreedApprovalPolicy: boolean;
  agreedCommunityPolicy: boolean;
  agreedPrivacyConsent: boolean;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  reviewNotes?: string;
}

export interface Project {
  id: string;
  title: string;
  division: DivisionType;
  status: 'In Incubation' | 'Prototyping' | 'In Progress' | 'Active Build' | 'Completed' | 'Recruiting';
  problemStatement?: string;
  solution?: string;
  techStack?: string[];
  members?: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  description?: string;
  lead?: string;
  lookingFor?: string[];
  tags?: string[];
  membersCount?: number;
}

export interface CommunityTeam {
  id: string;
  name: string;
  tagline: string;
  division: string;
  achievement: string;
  status: 'Active Competitor' | 'R&D Group' | 'Recruiting';
  externalUrl?: string;
  image: string;
  description: string;
}

export interface CommunityAnnouncement {
  id: string;
  title: string;
  date: string;
  category: 'Competition' | 'Workshop' | 'Community' | 'Achievement';
  author: string;
  content: string;
  urgent?: boolean;
}
