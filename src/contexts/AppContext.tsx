import React, { createContext, useContext, useState, useEffect } from 'react';
import { Member, Application, Project, CommunityTeam, CommunityAnnouncement } from '../types';
import { 
  INITIAL_MEMBERS, 
  INITIAL_APPLICATIONS, 
  INITIAL_PROJECTS, 
  INITIAL_TEAMS, 
  INITIAL_ANNOUNCEMENTS 
} from '../data/seedData';
import { verifyMemberCredentials, verifyAdminCredentials } from '../utils/security';

interface AppContextType {
  members: Member[];
  applications: Application[];
  projects: Project[];
  teams: CommunityTeam[];
  announcements: CommunityAnnouncement[];
  currentMember: Member | null;
  isAdminAuthenticated: boolean;
  loginMember: (emailOrId: string, passwordAttempt: string) => Promise<{ success: boolean; error?: string }>;
  logoutMember: () => void;
  loginAdmin: (username: string, passwordAttempt: string) => Promise<{ success: boolean; error?: string }>;
  logoutAdmin: () => void;
  submitApplication: (appData: Omit<Application, 'id' | 'submittedAt' | 'status'>) => string;
  approveApplication: (appId: string, notes?: string) => void;
  rejectApplication: (appId: string, notes?: string) => void;
  addProject: (project: Omit<Project, 'id' | 'membersCount'>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [members, setMembers] = useState<Member[]>(() => {
    const saved = localStorage.getItem('voltedge_members');
    return saved ? JSON.parse(saved) : INITIAL_MEMBERS;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('voltedge_applications');
    return saved ? JSON.parse(saved) : INITIAL_APPLICATIONS;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('voltedge_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [teams] = useState<CommunityTeam[]>(INITIAL_TEAMS);
  const [announcements] = useState<CommunityAnnouncement[]>(INITIAL_ANNOUNCEMENTS);

  const [currentMember, setCurrentMember] = useState<Member | null>(() => {
    const saved = sessionStorage.getItem('voltedge_auth_member');
    if (saved) {
      const parsed = JSON.parse(saved);
      return members.find((m) => m.id === parsed.id) || parsed;
    }
    return null;
  });

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('voltedge_auth_admin') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('voltedge_members', JSON.stringify(members));
  }, [members]);

  useEffect(() => {
    localStorage.setItem('voltedge_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('voltedge_projects', JSON.stringify(projects));
  }, [projects]);

  const loginMember = async (emailOrId: string, passwordAttempt: string): Promise<{ success: boolean; error?: string }> => {
    const isValid = await verifyMemberCredentials(emailOrId, passwordAttempt);
    if (!isValid) {
      return { success: false, error: 'Invalid Member Credentials or Passkey' };
    }

    // Match with existing member or default to the first active member
    const normalized = emailOrId.trim().toLowerCase();
    const matched = members.find(
      (m) => m.email.toLowerCase() === normalized || m.id.toLowerCase() === normalized
    ) || members[0];

    setCurrentMember(matched);
    sessionStorage.setItem('voltedge_auth_member', JSON.stringify(matched));
    return { success: true };
  };

  const logoutMember = () => {
    setCurrentMember(null);
    sessionStorage.removeItem('voltedge_auth_member');
  };

  const loginAdmin = async (username: string, passwordAttempt: string): Promise<{ success: boolean; error?: string }> => {
    const isValid = await verifyAdminCredentials(username, passwordAttempt);
    if (!isValid) {
      return { success: false, error: 'Invalid Administrator Security Key' };
    }

    setIsAdminAuthenticated(true);
    sessionStorage.setItem('voltedge_auth_admin', 'true');
    return { success: true };
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    sessionStorage.removeItem('voltedge_auth_admin');
  };

  const submitApplication = (appData: Omit<Application, 'id' | 'submittedAt' | 'status'>): string => {
    const newId = `APP-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newApp: Application = {
      ...appData,
      id: newId,
      submittedAt: new Date().toISOString(),
      status: 'Pending'
    };

    setApplications((prev) => [newApp, ...prev]);
    return newId;
  };

  const approveApplication = (appId: string, notes?: string) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          return { ...app, status: 'Approved', reviewNotes: notes || 'Application reviewed and approved.' };
        }
        return app;
      })
    );

    const target = applications.find((a) => a.id === appId);
    if (target) {
      const newMemberId = `VE-2026-${String(members.length + 1).padStart(3, '0')}`;
      const newMember: Member = {
        id: newMemberId,
        name: target.fullName,
        email: target.email,
        phone: target.phone,
        institution: target.institution,
        education: `${target.course} (${target.yearSemester})`,
        primaryDivision: target.primaryDivision,
        secondaryInterests: target.secondaryInterests,
        skills: target.skills,
        membershipStatus: 'Active',
        joinDate: new Date().toISOString().split('T')[0],
        projects: [],
        teams: [],
        achievements: ['Newly Inducted VoltEdge Member'],
        bio: target.whyJoin || 'Proud member of VoltEdge Innovation Community.',
        portfolioUrl: target.portfolioUrl,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'
      };

      setMembers((prev) => [newMember, ...prev]);
    }
  };

  const rejectApplication = (appId: string, notes?: string) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.id === appId) {
          return { ...app, status: 'Rejected', reviewNotes: notes || 'Application does not meet current criteria.' };
        }
        return app;
      })
    );
  };

  const addProject = (projectData: Omit<Project, 'id' | 'membersCount'>) => {
    const newId = `proj-${Date.now()}`;
    const newProj: Project = {
      ...projectData,
      id: newId,
      membersCount: 1
    };
    setProjects((prev) => [newProj, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        members,
        applications,
        projects,
        teams,
        announcements,
        currentMember,
        isAdminAuthenticated,
        loginMember,
        logoutMember,
        loginAdmin,
        logoutAdmin,
        submitApplication,
        approveApplication,
        rejectApplication,
        addProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
