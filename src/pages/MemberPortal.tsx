import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, 
  User, 
  Users, 
  Briefcase, 
  Trophy, 
  Calendar, 
  BookOpen, 
  Megaphone, 
  LogOut, 
  Plus, 
  MessageSquare, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  Zap, 
  AlertCircle,
  Search,
  Filter,
  KeyRound,
  Eye,
  EyeOff
} from 'lucide-react';
import CardComponent from '../components/CardComponent';
import { useApp } from '../contexts/AppContext';
import { DEMO_CREDENTIALS_INFO, SHOW_DEMO_CREDENTIALS } from '../utils/security';
import { Project, DivisionType } from '../types';

type MemberTab = 
  | 'profile' 
  | 'community' 
  | 'projects' 
  | 'teams' 
  | 'competitions' 
  | 'events' 
  | 'members' 
  | 'resources';

const MemberPortal: React.FC = () => {
  const { 
    currentMember, 
    loginMember, 
    logoutMember, 
    members, 
    projects, 
    teams, 
    announcements, 
    addProject 
  } = useApp();

  // Login Form States
  const [emailOrId, setEmailOrId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Portal State
  const [activeTab, setActiveTab] = useState<MemberTab>('projects');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDivision, setFilterDivision] = useState<string>('All');

  // Create Project Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDivision, setNewDivision] = useState<DivisionType>('Robotics & Engineering');
  const [newDescription, setNewDescription] = useState('');
  const [newLookingFor, setNewLookingFor] = useState('');
  const [newTags, setNewTags] = useState('');

  // Join Project Feedback State
  const [joinedProjectId, setJoinedProjectId] = useState<string | null>(null);

  // Discussions state
  const [discussions, setDiscussions] = useState([
    {
      id: 'd1',
      author: 'Rayyan Qazi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
      time: '2 hours ago',
      title: 'Real-time OpenCV FPS benchmarks on Raspberry Pi 5 vs ESP32-S3',
      content: 'We ran test models for the arena detection track today. ESP32-S3 achieves ~18 FPS on TinyML quantization, whereas Pi 5 reaches 62 FPS with full bounding boxes. What are your thoughts for EdgeBot V2?',
      likes: 8,
      replies: 4,
      tag: 'Computing & AI'
    },
    {
      id: 'd2',
      author: 'Ayesha Fathima',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
      time: '1 day ago',
      title: 'AeroVolt: Propeller thrust testing in the robotics workshop tomorrow',
      content: 'Anyone wanting to calibrate ESC telemetry or measure multi-rotor vibration frequencies is welcome at 4:30 PM in Lab 2.',
      likes: 12,
      replies: 6,
      tag: 'Robotics'
    }
  ]);

  const [newPostContent, setNewPostContent] = useState('');

  // Handle Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setIsSubmitting(true);

    const result = await loginMember(emailOrId, password);
    setIsSubmitting(false);

    if (!result.success) {
      setLoginError(result.error || 'Authentication failed.');
    }
  };

  const handleFillDemo = () => {
    if (DEMO_CREDENTIALS_INFO) {
      setEmailOrId(DEMO_CREDENTIALS_INFO.member.username);
      setPassword(DEMO_CREDENTIALS_INFO.member.pass);
    }
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    addProject({
      title: newTitle,
      division: newDivision,
      status: 'Recruiting',
      lead: currentMember?.name || 'VoltEdge Member',
      description: newDescription,
      lookingFor: newLookingFor.split(',').map((s) => s.trim()).filter(Boolean),
      tags: newTags.split(',').map((s) => s.trim()).filter(Boolean)
    });

    setNewTitle('');
    setNewDescription('');
    setNewLookingFor('');
    setNewTags('');
    setShowCreateModal(false);
  };

  const handlePostDiscussion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    setDiscussions([
      {
        id: `d-${Date.now()}`,
        author: currentMember?.name || 'VoltEdge Member',
        avatar: currentMember?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400',
        time: 'Just now',
        title: newPostContent.slice(0, 50) + (newPostContent.length > 50 ? '...' : ''),
        content: newPostContent,
        likes: 1,
        replies: 0,
        tag: currentMember?.primaryDivision || 'General'
      },
      ...discussions
    ]);

    setNewPostContent('');
  };

  // If not logged in, render the secure authentication gateway
  if (!currentMember) {
    return (
      <div className="py-16 md:py-24 bg-gray-50 dark:bg-onyx-950 min-h-[85vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-volt-gold/10 border border-volt-gold/40 text-volt-gold flex items-center justify-center mx-auto shadow-lg shadow-volt-gold/10">
              <Lock size={24} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold font-display uppercase tracking-tight text-neutral-900 dark:text-white">
              Private Member Portal
            </h1>
            <p className="text-xs font-mono text-neutral-500">
              Authorized Member Authentication Gateway • VoltEdge
            </p>
          </div>

          {/* DEMO CREDENTIALS HELPER BANNER (Display if SHOW_DEMO_CREDENTIALS === true) */}
          {SHOW_DEMO_CREDENTIALS && DEMO_CREDENTIALS_INFO && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs font-mono space-y-2">
              <div className="flex items-center justify-between text-amber-500 font-bold">
                <span className="flex items-center gap-1.5">
                  <KeyRound size={14} />
                  <span>DEMO CREDENTIALS HELPER</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded">TEMPORARY</span>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 text-[11px] leading-relaxed">
                Use the credentials below to explore the member portal with 5 demo members and live project collaboration.
              </p>
              <div className="p-2.5 rounded-xl bg-neutral-900 text-neutral-200 text-[11px] space-y-1">
                <div>User / ID: <strong className="text-white">{DEMO_CREDENTIALS_INFO.member.username}</strong></div>
                <div>Passkey: <strong className="text-volt-gold">{DEMO_CREDENTIALS_INFO.member.pass}</strong></div>
              </div>
              <button
                type="button"
                onClick={handleFillDemo}
                className="w-full py-1.5 px-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs transition-colors shadow-sm"
              >
                1-Click Autofill Demo Member
              </button>
            </div>
          )}

          {/* LOGIN CARD */}
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
                  Member Email or Member ID
                </label>
                <input
                  type="text"
                  required
                  value={emailOrId}
                  onChange={(e) => setEmailOrId(e.target.value)}
                  placeholder="e.g. member@voltedge.org or VE-2026-001"
                  className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Member Passkey
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
                {isSubmitting ? 'Verifying Hashes...' : 'Authenticate & Enter'}
              </button>
            </form>

            <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800 text-center space-y-2">
              <p className="text-xs text-neutral-500">
                Not a member yet?
              </p>
              <Link to="/join" className="text-xs font-mono font-bold text-volt-gold hover:underline">
                Submit Membership Application →
              </Link>
            </div>
          </CardComponent>
        </div>
      </div>
    );
  }

  // Filter projects by division
  const filteredProjects = projects.filter((p) => {
    const matchesDiv = filterDivision === 'All' || p.division === filterDivision;
    const descText = p.description || p.problemStatement || '';
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      descText.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDiv && matchesSearch;
  });

  return (
    <div className="py-8 md:py-12 bg-gray-50 dark:bg-onyx-950 min-h-screen">
      <div className="container-custom space-y-8">
        {/* MEMBER PORTAL HEADER */}
        <div className="p-6 md:p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-volt-gold/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center space-x-4 relative z-10">
            <img
              src={currentMember.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'}
              alt={currentMember.name}
              className="w-16 h-16 rounded-2xl object-cover border-2 border-volt-gold shadow-md"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-mono font-bold">
                  {currentMember.membershipStatus.toUpperCase()} MEMBER
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  ID: <strong className="text-volt-gold">{currentMember.id}</strong>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight mt-1">
                Welcome, {currentMember.name}
              </h1>
              <p className="text-xs font-mono text-neutral-400">
                {currentMember.primaryDivision} • {currentMember.institution}
              </p>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center space-x-3 relative z-10">
            <button
              onClick={() => setShowCreateModal(true)}
              className="btn btn-primary text-xs py-2.5 px-4 font-mono font-bold flex items-center gap-1.5 shadow-md"
            >
              <Plus size={16} />
              <span>Propose Project</span>
            </button>
            <button
              onClick={logoutMember}
              className="btn btn-secondary text-xs py-2.5 px-3.5 font-mono flex items-center gap-1 text-neutral-400 hover:text-red-400"
              title="Sign Out"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>

        {/* PORTAL NAVIGATION TABS */}
        <div className="flex overflow-x-auto p-1.5 rounded-2xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 gap-1.5 scrollbar-thin">
          {[
            { id: 'projects', label: 'Projects Board', icon: <Briefcase size={16} /> },
            { id: 'community', label: 'Community Feed', icon: <MessageSquare size={16} /> },
            { id: 'teams', label: 'Incubated Teams', icon: <Trophy size={16} /> },
            { id: 'members', label: 'Members Directory', icon: <Users size={16} /> },
            { id: 'profile', label: 'My Profile', icon: <User size={16} /> },
            { id: 'resources', label: 'Resources & Docs', icon: <BookOpen size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as MemberTab)}
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

        {/* TAB CONTENT */}

        {/* 1. PROJECTS BOARD */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            {/* Filter and Search */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-volt-gold"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                <span className="text-xs font-mono text-neutral-400 shrink-0">Filter:</span>
                {['All', 'Robotics & Engineering', 'Computing & Technology', 'Events & Workshops', 'Operations & Community'].map((d) => (
                  <button
                    key={d}
                    onClick={() => setFilterDivision(d)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono whitespace-nowrap transition-colors ${
                      filterDivision === d
                        ? 'bg-volt-gold text-black font-bold'
                        : 'bg-white dark:bg-onyx-900 text-neutral-500 border border-neutral-200 dark:border-neutral-800'
                    }`}
                  >
                    {d === 'All' ? 'All Tracks' : d.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((p) => (
                <CardComponent key={p.id} className="flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-volt-gold/10 text-volt-gold border border-volt-gold/30">
                        {p.division}
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/60 px-2 py-0.5 rounded font-bold">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Looking for box */}
                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800/80 mb-4">
                      <div className="text-[11px] font-mono font-bold text-volt-yellow uppercase mb-2">
                        Looking For Roles:
                      </div>
                      <div className="space-y-1">
                        {(p.lookingFor || []).map((role, idx) => (
                          <div key={idx} className="text-xs font-mono text-neutral-700 dark:text-neutral-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-volt-gold" />
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {(p.tags || p.techStack || []).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-onyx-800 text-neutral-500">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <div className="text-xs font-mono text-neutral-500">
                      Lead: <strong className="text-neutral-800 dark:text-neutral-200">{p.lead}</strong>
                    </div>

                    {joinedProjectId === p.id ? (
                      <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 size={14} />
                        Joined Squad!
                      </span>
                    ) : (
                      <button
                        onClick={() => setJoinedProjectId(p.id)}
                        className="btn btn-primary text-xs py-2 px-4 font-mono font-bold"
                      >
                        Join Project
                      </button>
                    )}
                  </div>
                </CardComponent>
              ))}
            </div>
          </div>
        )}

        {/* 2. COMMUNITY FEED */}
        {activeTab === 'community' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Feed Left */}
            <div className="lg:col-span-8 space-y-6">
              {/* New Post Input */}
              <CardComponent className="p-4 sm:p-6">
                <form onSubmit={handlePostDiscussion} className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={currentMember.avatar}
                      alt={currentMember.name}
                      className="w-10 h-10 rounded-xl object-cover border border-volt-gold"
                    />
                    <div className="font-mono text-xs text-neutral-400">
                      Posting as <strong className="text-white">{currentMember.name}</strong>
                    </div>
                  </div>
                  <textarea
                    rows={3}
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Share an idea, ask for feedback on code, or announce a workshop discovery..."
                    className="w-full p-3 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 text-xs font-mono focus:outline-none focus:border-volt-gold"
                  />
                  <div className="flex justify-end">
                    <button type="submit" className="btn btn-primary text-xs py-2 px-5 font-mono font-bold">
                      Post to Community
                    </button>
                  </div>
                </form>
              </CardComponent>

              {/* Discussions List */}
              <div className="space-y-4">
                {discussions.map((d) => (
                  <CardComponent key={d.id} className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={d.avatar}
                          alt={d.author}
                          className="w-10 h-10 rounded-xl object-cover border border-neutral-700"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                            {d.author}
                          </h4>
                          <span className="text-[11px] font-mono text-neutral-400">{d.time}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-volt-gold/10 text-volt-gold border border-volt-gold/30">
                        {d.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 dark:text-white font-display">
                      {d.title}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {d.content}
                    </p>

                    <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <div className="flex items-center space-x-4">
                        <button className="hover:text-volt-gold">♥ {d.likes} Likes</button>
                        <button className="hover:text-volt-gold">💬 {d.replies} Replies</button>
                      </div>
                      <button className="text-volt-gold hover:underline">Reply in Thread</button>
                    </div>
                  </CardComponent>
                ))}
              </div>
            </div>

            {/* Announcements Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <CardComponent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-volt-yellow text-xs font-mono font-bold uppercase">
                  <Megaphone size={16} className="text-volt-gold" />
                  <span>Official Announcements</span>
                </div>

                <div className="space-y-3">
                  {announcements.map((ann) => (
                    <div key={ann.id} className="p-3.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800/80 space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] font-mono">
                        <span className="text-volt-gold font-bold">{ann.category}</span>
                        <span className="text-neutral-500">{ann.date}</span>
                      </div>
                      <h5 className="font-bold text-xs text-neutral-900 dark:text-white">
                        {ann.title}
                      </h5>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {ann.content}
                      </p>
                    </div>
                  ))}
                </div>
              </CardComponent>
            </div>
          </div>
        )}

        {/* 3. TEAMS DIRECTORY */}
        {activeTab === 'teams' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((t) => (
              <CardComponent key={t.id} className="p-0 overflow-hidden flex flex-col justify-between h-full">
                <div>
                  <div className="h-44 w-full bg-black overflow-hidden relative">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 font-mono text-[10px] text-volt-gold font-bold">
                      {t.status}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold font-display text-neutral-900 dark:text-white">
                      {t.name}
                    </h3>
                    <p className="text-xs font-mono text-volt-yellow font-semibold">
                      {t.tagline}
                    </p>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {t.description}
                    </p>

                    <div className="p-2.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 text-[11px] font-mono text-volt-gold">
                      ★ {t.achievement}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  {t.externalUrl ? (
                    <a
                      href={t.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-xs w-full py-2.5 font-mono font-bold flex items-center justify-center gap-1.5"
                    >
                      <span>Explore Team Website</span>
                      <ExternalLink size={12} />
                    </a>
                  ) : (
                    <button className="btn btn-secondary text-xs w-full py-2.5 font-mono">
                      Request to Join Squad
                    </button>
                  )}
                </div>
              </CardComponent>
            ))}
          </div>
        )}

        {/* 4. MEMBERS DIRECTORY (5 EXAMPLE MEMBERS) */}
        {activeTab === 'members' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold font-display text-neutral-900 dark:text-white">
                  Active Community Members ({members.length})
                </h3>
                <p className="text-xs font-mono text-neutral-500">
                  Connect with fellow builders across hardware, software, and design.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((m) => (
                <CardComponent key={m.id} className="p-6 space-y-4">
                  <div className="flex items-center space-x-3.5">
                    <img
                      src={m.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400'}
                      alt={m.name}
                      className="w-14 h-14 rounded-2xl object-cover border border-neutral-300 dark:border-neutral-700"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base text-neutral-900 dark:text-white">
                        {m.name}
                      </h4>
                      <p className="text-xs font-mono text-volt-gold font-semibold">
                        {m.leadershipRole || m.primaryDivision}
                      </p>
                      <span className="text-[10px] font-mono text-neutral-400">
                        ID: {m.id}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {m.bio}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase block">
                      Skills &amp; Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {m.skills.map((s, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-onyx-800 text-neutral-600 dark:text-neutral-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-neutral-500 flex justify-between items-center">
                    <span>{m.institution}</span>
                    <a href={`mailto:${m.email}`} className="text-volt-gold hover:underline">
                      Email Member
                    </a>
                  </div>
                </CardComponent>
              ))}
            </div>
          </div>
        )}

        {/* 5. MY PROFILE */}
        {activeTab === 'profile' && (
          <div className="max-w-3xl mx-auto space-y-6">
            <CardComponent className="p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                <img
                  src={currentMember.avatar}
                  alt={currentMember.name}
                  className="w-24 h-24 rounded-3xl object-cover border-2 border-volt-gold shadow-lg"
                />
                <div className="text-center sm:text-left space-y-1">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    OFFICIAL MEMBER • {currentMember.id}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-display uppercase mt-1">
                    {currentMember.name}
                  </h2>
                  <p className="text-xs font-mono text-neutral-400">
                    {currentMember.email} • {currentMember.phone}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-neutral-500">Institution &amp; Course:</div>
                  <div className="text-neutral-900 dark:text-white font-bold">{currentMember.institution}</div>
                  <div className="text-neutral-400">{currentMember.education}</div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-200 dark:border-neutral-800 space-y-1">
                  <div className="text-neutral-500">Primary Division:</div>
                  <div className="text-volt-gold font-bold">{currentMember.primaryDivision}</div>
                  <div className="text-neutral-400">Joined: {currentMember.joinDate}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-neutral-500 mb-2">
                  Technical Skill Arsenal:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentMember.skills.map((s, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-xl bg-neutral-100 dark:bg-onyx-800 border border-neutral-200 dark:border-neutral-700 text-xs font-mono font-semibold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-volt-gold/10 border border-volt-gold/30 text-xs font-mono space-y-1">
                <div className="text-volt-yellow font-bold uppercase">Member Badges &amp; Recognitions:</div>
                <ul className="list-disc list-inside text-neutral-700 dark:text-neutral-300 space-y-1">
                  {currentMember.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            </CardComponent>
          </div>
        )}

        {/* 6. RESOURCES & DOCS */}
        {activeTab === 'resources' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardComponent className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-volt-gold/10 text-volt-gold flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <h4 className="font-bold font-display text-base text-neutral-900 dark:text-white">
                Member Handbook 2026
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Lab safety regulations, workshop code conventions, 3D printer slicing guidelines, and competition schedules.
              </p>
              <button className="text-xs font-mono font-bold text-volt-gold hover:underline pt-2">
                Download PDF (2.4 MB) →
              </button>
            </CardComponent>

            <CardComponent className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                <Zap size={20} />
              </div>
              <h4 className="font-bold font-display text-base text-neutral-900 dark:text-white">
                EdgeBot C++ Firmware Kit
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                BaseBot refactored code with PWM analog curves, gyroscope heading routines, and HC-SR04 ultrasonic interrupts.
              </p>
              <button className="text-xs font-mono font-bold text-accent hover:underline pt-2">
                Browse GitHub Repo →
              </button>
            </CardComponent>

            <CardComponent className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-bold font-display text-base text-neutral-900 dark:text-white">
                VoltEdge Brand Collateral
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Vector emblems, typography rules, presentation slide decks, and competition jersey template files.
              </p>
              <button className="text-xs font-mono font-bold text-emerald-400 hover:underline pt-2">
                Access Asset Vault →
              </button>
            </CardComponent>
          </div>
        )}
      </div>

      {/* PROPOSE PROJECT MODAL */}
      <AnimatePresence>
        {showCreateModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCreateModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white dark:bg-onyx-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 space-y-4"
            >
              <h3 className="text-xl font-bold font-display uppercase tracking-tight text-neutral-900 dark:text-white">
                Propose New Community Project
              </h3>

              <form onSubmit={handleCreateProject} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-neutral-400 mb-1">Project Title</label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Autonomous Solar Rover"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Primary Track</label>
                  <select
                    value={newDivision}
                    onChange={(e) => setNewDivision(e.target.value as DivisionType)}
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold"
                  >
                    <option value="Robotics & Engineering">Robotics & Engineering</option>
                    <option value="Computing & Technology">Computing & Technology</option>
                    <option value="Events & Workshops">Events & Workshops</option>
                    <option value="Operations & Community">Operations & Community</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Description</label>
                  <textarea
                    rows={3}
                    required
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    placeholder="What problem does this solve? What are you building?"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Roles You Are Looking For (comma separated)</label>
                  <input
                    type="text"
                    value={newLookingFor}
                    onChange={(e) => setNewLookingFor(e.target.value)}
                    placeholder="2 Software Devs, 1 CAD Designer"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold"
                  />
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newTags}
                    onChange={(e) => setNewTags(e.target.value)}
                    placeholder="ROS, AI, ESP32, Solar"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-onyx-950 border border-neutral-300 dark:border-neutral-700 text-sm focus:outline-none focus:border-volt-gold"
                  />
                </div>

                <div className="pt-2 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="btn btn-secondary py-2 px-4"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary py-2 px-6 font-bold"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MemberPortal;
