export type DivisionType =
  | 'Division I — Electronics & Robotic Systems'
  | 'Division II — Computing & Intelligent Sciences'
  | 'Division III — Events, Workshops & Community Outreach'
  | 'Division IV — Organizational Operations & Administration';

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
  roleAppliedFor?: string;
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
  teamName?: string;
  status: 'Planning' | 'Active' | 'Completed' | 'In Progress' | 'Active Build' | 'Prototyping';
  category?: string;
  problemStatement?: string;
  solution?: string;
  description?: string;
  objectives?: string;
  techStack?: string[];
  members?: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  lead?: string;
  lookingFor?: string[];
  tags?: string[];
  membersCount?: number;
}

export interface CommunityTeam {
  id: string;
  name: string;
  tagline: string;
  division: DivisionType;
  teamType: string;
  members: string[];
  achievement?: string;
  status: 'Active' | 'Active Competitor' | 'R&D Group' | 'Recruiting';
  externalUrl?: string;
  description: string;
}

export interface CommunityAchievement {
  id: string;
  title: string;
  recipient: string;
  scope: 'Member' | 'Team' | 'Division' | 'Organization';
  category: 'Competition' | 'Hackathon' | 'Workshop' | 'Research' | 'Award' | 'Organizational';
  eventName: string;
  date: string;
  positionResult: string;
  location: string;
  issuedBy: string;
  description: string;
  evidenceUrl?: string;
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
