import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Users, 
  FileText, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Filter, 
  LogOut, 
  KeyRound, 
  AlertCircle, 
  Check, 
  Briefcase, 
  Calendar, 
  Eye, 
  EyeOff, 
  ExternalLink,
  ShieldCheck,
  Award
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import { useApp } from '../contexts/AppContext';
import { DEMO_CREDENTIALS_INFO, SHOW_DEMO_CREDENTIALS } from '../utils/security';
import { Application, Member } from '../types';

type AdminTab = 'overview' | 'applications' | 'members' | 'projects' | 'settings';

const AdminPortal: React.FC = () => {
  const { 
    isAdminAuthenticated, 
    loginAdmin, 
    logoutAdmin, 
    applications, 
    members, 
    projects, 
    approveApplication, 
    rejectApplication 
  } = useApp();

  // Login form state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Admin Dashboard state
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [memberSearch, setMemberSearch] = useState('');
  const [memberDivisionFilter, setMemberDivisionFilter] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsSubmitting(true);

    const result = await loginAdmin(username, password);
    setIsSubmitting(false);

    if (!result.success) {
      setLoginError(result.error || 'Authentication failed.');
    }
  };

  const handleFillDemo = () => {
    if (DEMO_CREDENTIALS_INFO) {
      setUsername(DEMO_CREDENTIALS_INFO.admin.username);
      setPassword(DEMO_CREDENTIALS_INFO.admin.pass);
    }
  };

  const handleApprove = (appId: string) => {
    approveApplication(appId, 'Approved by Administrator. Welcome to VoltEdge Innovation Community!');
    setActionFeedback(`Application ${appId} approved! New member account automatically created.`);
    setSelectedApplication(null);
    setTimeout(() => setActionFeedback(null), 4000);
  };

  const handleReject = (appId: string) => {
    rejectApplication(appId, 'Application reviewed and not approved at this time.');
    setActionFeedback(`Application ${appId} marked as Rejected.`);
    setSelectedApplication(null);
    setTimeout(() => setActionFeedback(null), 4000);
  };

  // Login Gate
  if (!isAdminAuthenticated) {
    return (
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-onyx-950 min-h-[85vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-volt-gold/10 border border-volt-gold/40 text-volt-gold flex items-center justify-center mx-auto shadow-lg shadow-volt-gold/10">
              <Shield size={24} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-neutral-900 dark:text-white">
              VoltEdge Admin Portal
            </h1>
            <p className="text-xs font-mono text-neutral-500">
              Restricted Control Plane &amp; Member Database
            </p>
          </div>

          {/* DEMO CREDENTIALS HELPER BANNER */}
          {SHOW_DEMO_CREDENTIALS && DEMO_CREDENTIALS_INFO && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-amber-500 font-bold">
                <span className="flex items-center gap-1.5">
                  <KeyRound size={14} />
                  <span>ADMIN ACCESS CREDENTIALS</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded">DEMO MODE</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                Test the complete review &amp; approval workflow, member database, and project analytics.
              </p>
              <div className="p-2.5 rounded-xl bg-neutral-900 text-neutral-200 text-[11px] space-y-1">
                <div>Admin: <strong className="text-white">{DEMO_CREDENTIALS_INFO.admin.username}</strong></div>
                <div>Security Key: <strong className="text-volt-gold">{DEMO_CREDENTIALS_INFO.admin.pass}</strong></div>
              </div>
              <button
                type="button"
                onClick={handleFillDemo}
                className="w-full py-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-colors shadow-sm"
              >
                1-Click Autofill Admin Credentials
              </button>
            </div>
          )}

          {/* ADMIN LOGIN FORM */}
          <CardComponent className="p-6 sm:p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-400 text-xs font-mono flex items-center gap-2">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Administrator Username / Email
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin@voltedge.org"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Master Security Key
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter security key"
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold font-mono pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-200"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full py-3 text-xs font-mono font-bold uppercase tracking-wider mt-2 shadow-lg"
              >
                {isSubmitting ? 'Verifying Hashes...' : 'Access Admin Console'}
              </button>
            </form>

            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 text-center">
              <Link to="/" className="text-xs font-mono text-neutral-500 hover:text-white">
                ← Return to Public Website
              </Link>
            </div>
          </CardComponent>
        </div>
      </div>
    );
  }

  // Filtered Members
  const filteredMembers = members.filter((m) => {
    const matchesDiv = memberDivisionFilter === 'All' || m.primaryDivision === memberDivisionFilter;
    const matchesSearch = 
      m.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.email.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.id.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.skills.some((s) => s.toLowerCase().includes(memberSearch.toLowerCase()));
    return matchesDiv && matchesSearch;
  });

  const pendingApplications = applications.filter((a) => a.status === 'Pending');

  return (
    <div className="py-8 md:py-12 bg-gray-50 dark:bg-onyx-950 min-h-screen">
      <div className="container-custom space-y-8">
        {/* ADMIN CONSOLE HEADER */}
        <div className="p-6 md:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-2xl bg-volt-gold/10 border border-volt-gold/40 text-volt-gold flex items-center justify-center">
              <Shield size={28} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-volt-gold text-black text-[10px] font-mono font-black">
                  ADMIN CONSOLE
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  SYSTEM OK • ENCRYPTED
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight mt-1">
                VoltEdge Governance &amp; Database
              </h1>
              <p className="text-xs font-mono text-neutral-400">
                Core Operations • Applications Review • Structured Member Roster
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={logoutAdmin}
              className="btn btn-secondary text-xs py-2.5 px-4 font-mono flex items-center gap-1.5 text-neutral-400 hover:text-red-400"
            >
              <LogOut size={16} />
              <span>Log Out Admin</span>
            </button>
          </div>
        </div>

        {/* Action feedback alert */}
        {actionFeedback && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
            <CheckCircle2 size={16} />
            <span>{actionFeedback}</span>
          </div>
        )}

        {/* NAVIGATION TABS */}
        <div className="flex overflow-x-auto p-1.5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 gap-1.5 scrollbar-thin">
          {[
            { id: 'overview', label: 'Console Overview', icon: <Briefcase size={16} /> },
            { 
              id: 'applications', 
              label: `Applications (${pendingApplications.length} Pending)`, 
              icon: <FileText size={16} /> 
            },
            { id: 'members', label: `Member Database (${members.length})`, icon: <Users size={16} /> },
            { id: 'projects', label: `Projects (${projects.length})`, icon: <Briefcase size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as AdminTab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-volt-gold text-black font-bold shadow-md shadow-volt-gold/20'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-onyx-800'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 1. CONSOLE OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <CardComponent className="text-center p-6">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                  Active Database Members
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-volt-gold">
                  {members.length}
                </div>
                <span className="text-xs font-mono text-emerald-400 mt-1 block">
                  +5 Example Demo Members
                </span>
              </CardComponent>

              <CardComponent className="text-center p-6">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                  Pending Applications
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-volt-yellow">
                  {pendingApplications.length}
                </div>
                <span className="text-xs font-mono text-neutral-400 mt-1 block">
                  Awaiting Review
                </span>
              </CardComponent>

              <CardComponent className="text-center p-6">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                  Community Projects
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-accent">
                  {projects.length}
                </div>
                <span className="text-xs font-mono text-neutral-400 mt-1 block">
                  Active in Portal
                </span>
              </CardComponent>

              <CardComponent className="text-center p-6">
                <span className="text-[10px] font-mono text-neutral-500 uppercase block mb-1">
                  Digital Reach
                </span>
                <div className="text-3xl sm:text-4xl font-black font-mono text-emerald-400">
                  68.3K
                </div>
                <span className="text-xs font-mono text-neutral-400 mt-1 block">
                  Views &amp; Impressions
                </span>
              </CardComponent>
            </div>

            {/* Quick Actions & Recent Applications */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <CardComponent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                      Pending Applications Queue
                    </h3>
                    <button
                      onClick={() => setActiveTab('applications')}
                      className="text-xs font-mono font-bold text-volt-gold hover:underline"
                    >
                      View All ({applications.length}) →
                    </button>
                  </div>

                  {pendingApplications.length === 0 ? (
                    <p className="text-xs font-mono text-neutral-500 py-6 text-center">
                      No pending applications in queue.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {pendingApplications.slice(0, 3).map((app) => (
                        <div
                          key={app.id}
                          className="p-4 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono"
                        >
                          <div>
                            <div className="font-bold text-neutral-900 dark:text-white text-sm">
                              {app.fullName}
                            </div>
                            <div className="text-neutral-500 mt-0.5">
                              {app.institution} • {app.primaryDivision}
                            </div>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedApplication(app)}
                              className="px-3 py-1.5 rounded-lg bg-neutral-200 dark:bg-onyx-800 text-neutral-800 dark:text-neutral-200 hover:text-white text-xs font-bold"
                            >
                              Inspect
                            </button>
                            <button
                              onClick={() => handleApprove(app.id)}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold"
                            >
                              Approve
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardComponent>
              </div>

              <div className="lg:col-span-5">
                <CardComponent className="p-6 space-y-4">
                  <h3 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                    Administrative Workflow Status
                  </h3>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <span className="text-volt-gold font-bold">1. SUBMISSION</span>
                      <p className="text-neutral-500">Applicant fills out the 5-step form on the public website.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <span className="text-volt-gold font-bold">2. ADMIN REVIEW</span>
                      <p className="text-neutral-500">Review motivation, skills, and academic profile.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                      <span className="text-emerald-400 font-bold">3. AUTO INDUCTION</span>
                      <p className="text-neutral-500">Approving instantly assigns a Member ID and creates their record in the Member Database.</p>
                    </div>
                  </div>
                </CardComponent>
              </div>
            </div>
          </div>
        )}

        {/* 2. APPLICATIONS QUEUE */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                  Applications Management
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Review applicant profiles, approve for community induction, or decline.
                </p>
              </div>
            </div>

            {/* Applications Table */}
            <CardComponent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-neutral-100 dark:bg-onyx-950 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                    <tr>
                      <th className="p-4">App ID</th>
                      <th className="p-4">Applicant Name</th>
                      <th className="p-4">Track</th>
                      <th className="p-4">Institution &amp; Class</th>
                      <th className="p-4">Submitted</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {applications.map((app) => (
                      <tr key={app.id} className="hover:bg-neutral-50 dark:hover:bg-onyx-800/50 transition-colors">
                        <td className="p-4 text-volt-gold font-bold">{app.id}</td>
                        <td className="p-4 font-bold text-neutral-900 dark:text-white">
                          <div>{app.fullName}</div>
                          <div className="text-[11px] text-neutral-400 font-normal">{app.email}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-[11px]">
                            {app.primaryDivision}
                          </span>
                        </td>
                        <td className="p-4 text-neutral-400">
                          <div>{app.institution}</div>
                          <div className="text-[11px]">{app.course} ({app.yearSemester})</div>
                        </td>
                        <td className="p-4 text-neutral-400">
                          {app.submittedAt.split('T')[0]}
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                            app.status === 'Approved'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : app.status === 'Rejected'
                              ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                              : 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          }`}>
                            {app.status}
                          </span>
                        </td>
                        <td className="p-4 text-right space-x-2">
                          <button
                            onClick={() => setSelectedApplication(app)}
                            className="px-3 py-1 rounded bg-neutral-200 dark:bg-onyx-800 text-neutral-800 dark:text-neutral-200 hover:text-white font-bold text-xs"
                          >
                            Details
                          </button>
                          {app.status === 'Pending' && (
                            <>
                              <button
                                onClick={() => handleApprove(app.id)}
                                className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs"
                              >
                                Approve
                              </button>
                              <button
                                onClick={() => handleReject(app.id)}
                                className="px-3 py-1 rounded bg-red-500 hover:bg-red-400 text-white font-bold text-xs"
                              >
                                Reject
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardComponent>
          </div>
        )}

        {/* 3. STRUCTURED MEMBER DATABASE */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                  VoltEdge Master Member Database ({filteredMembers.length})
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Full structured member records stored securely with confidential contacts.
                </p>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    value={memberSearch}
                    onChange={(e) => setMemberSearch(e.target.value)}
                    placeholder="Search by name, ID, skill..."
                    className="w-full pl-8 pr-4 py-2 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-volt-gold"
                  />
                </div>

                <select
                  value={memberDivisionFilter}
                  onChange={(e) => setMemberDivisionFilter(e.target.value)}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-volt-gold"
                >
                  <option value="All">All Divisions</option>
                  <option value="Robotics & Engineering">Robotics &amp; Eng</option>
                  <option value="Computing & Technology">Computing &amp; Tech</option>
                  <option value="Events & Workshops">Events &amp; Workshops</option>
                  <option value="Operations & Community">Operations &amp; Comm</option>
                </select>
              </div>
            </div>

            {/* Members Database Table */}
            <CardComponent className="p-0 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-mono text-xs">
                  <thead className="bg-neutral-100 dark:bg-onyx-950 text-neutral-500 border-b border-neutral-200 dark:border-neutral-800">
                    <tr>
                      <th className="p-4">Member ID</th>
                      <th className="p-4">Name &amp; Role</th>
                      <th className="p-4">Primary Track</th>
                      <th className="p-4">Institution &amp; Education</th>
                      <th className="p-4">Contact (Confidential)</th>
                      <th className="p-4">Join Date</th>
                      <th className="p-4">Status</th>
                      <th className="p-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {filteredMembers.map((m) => (
                      <tr key={m.id} className="hover:bg-neutral-50 dark:hover:bg-onyx-800/50 transition-colors">
                        <td className="p-4 text-volt-gold font-bold">{m.id}</td>
                        <td className="p-4">
                          <div className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                            <span>{m.name}</span>
                          </div>
                          <div className="text-[11px] text-amber-500">{m.leadershipRole || 'Community Member'}</div>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-[11px]">
                            {m.primaryDivision}
                          </span>
                        </td>
                        <td className="p-4 text-neutral-400">
                          <div>{m.institution}</div>
                          <div className="text-[11px]">{m.education}</div>
                        </td>
                        <td className="p-4 text-neutral-400">
                          <div>{m.email}</div>
                          <div className="text-[11px]">{m.phone}</div>
                        </td>
                        <td className="p-4 text-neutral-400">{m.joinDate}</td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
                            {m.membershipStatus}
                          </span>
                        </td>
                        <td className="p-4 text-right">
                          <button
                            onClick={() => setSelectedMember(m)}
                            className="px-3 py-1 rounded bg-neutral-200 dark:bg-onyx-800 text-neutral-800 dark:text-neutral-200 hover:text-white font-bold text-xs"
                          >
                            Full File
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardComponent>
          </div>
        )}

        {/* 4. PROJECTS MANAGER */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
              Community Projects Registry
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((p) => (
                <CardComponent key={p.id} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-volt-gold">{p.division}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">
                      {p.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 dark:text-white font-display">
                    {p.title}
                  </h4>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300">
                    {p.description}
                  </p>
                  <div className="pt-2 text-xs font-mono text-neutral-500 flex justify-between">
                    <span>Lead: <strong>{p.lead}</strong></span>
                    <span>Squad Size: <strong>{p.membersCount}</strong></span>
                  </div>
                </CardComponent>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* APPLICATION DETAIL MODAL */}
      <AnimatePresence>
        {selectedApplication && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedApplication(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-5 font-mono text-xs max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200 dark:border-neutral-800">
                <div>
                  <span className="text-volt-gold font-bold">APPLICATION FILE: {selectedApplication.id}</span>
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mt-0.5">
                    {selectedApplication.fullName}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 font-bold">
                  {selectedApplication.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block mb-1">Contact:</span>
                  <div>{selectedApplication.email}</div>
                  <div>{selectedApplication.phone}</div>
                  <div>City: {selectedApplication.city}</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block mb-1">Academic Background:</span>
                  <div>{selectedApplication.institution}</div>
                  <div>{selectedApplication.course}</div>
                  <div>Sem/Year: {selectedApplication.yearSemester}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1.5">
                <span className="text-volt-gold font-bold block">Primary Track: {selectedApplication.primaryDivision}</span>
                <div className="text-neutral-400">
                  Secondary: {selectedApplication.secondaryInterests.join(', ') || 'None specified'}
                </div>
                <div className="pt-2">
                  <span className="text-neutral-500 block mb-1">Skills:</span>
                  <div className="flex flex-wrap gap-1">
                    {selectedApplication.skills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-onyx-800 text-neutral-800 dark:text-neutral-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block mb-1 font-bold">Why do they want to join?</span>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedApplication.whyJoin}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-neutral-500 block mb-1 font-bold">What they want to learn / contribute:</span>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {selectedApplication.contribution}
                  </p>
                </div>

                {selectedApplication.pastProjects && (
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                    <span className="text-neutral-500 block mb-1 font-bold">Prior Projects:</span>
                    <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {selectedApplication.pastProjects}
                    </p>
                  </div>
                )}

                {selectedApplication.portfolioUrl && (
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
                    <span className="text-neutral-500">Portfolio:</span>
                    <a
                      href={selectedApplication.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-volt-gold hover:underline flex items-center gap-1"
                    >
                      <span>{selectedApplication.portfolioUrl}</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setSelectedApplication(null)}
                  className="btn btn-secondary py-2 px-4"
                >
                  Close
                </button>

                {selectedApplication.status === 'Pending' && (
                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => handleReject(selectedApplication.id)}
                      className="btn bg-red-600 hover:bg-red-500 text-white py-2 px-5 font-bold"
                    >
                      Reject Application
                    </button>
                    <button
                      type="button"
                      onClick={() => handleApprove(selectedApplication.id)}
                      className="btn btn-primary py-2 px-6 font-bold"
                    >
                      Approve &amp; Induct Member
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MEMBER FULL FILE MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-4 font-mono text-xs"
            >
              <div className="flex items-center gap-4 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                <img
                  src={selectedMember.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'}
                  alt={selectedMember.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-volt-gold"
                />
                <div>
                  <span className="text-volt-gold font-bold">MEMBER RECORD: {selectedMember.id}</span>
                  <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-neutral-400">{selectedMember.primaryDivision}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-500">Contact:</div>
                  <div>{selectedMember.email} • {selectedMember.phone}</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-500">Institution &amp; Class:</div>
                  <div>{selectedMember.institution}</div>
                  <div>{selectedMember.education}</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-500 mb-1">Skills:</div>
                  <div className="flex flex-wrap gap-1">
                    {selectedMember.skills.map((s, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-neutral-200 dark:bg-onyx-800 text-neutral-800 dark:text-neutral-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedMember(null)}
                  className="btn btn-secondary py-2 px-6"
                >
                  Close Record
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPortal;
