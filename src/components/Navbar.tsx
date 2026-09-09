import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowRight, ExternalLink, Instagram } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close on Escape key with graceful exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen && !isClosing) {
        closeMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, isClosing]);

  // Smart Header: hide when scrolling down, show when scrolling up or at top
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide navbar
        if (!mobileMenuOpen) setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  const openMenu = () => {
    setIsClosing(false);
    setSelectedPath(null);
    setMobileMenuOpen(true);
  };

  const closeMenu = (targetPath?: string) => {
    if (isClosing) return;
    setIsClosing(true);
    if (targetPath) setSelectedPath(targetPath);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
      setSelectedPath(null);
      if (targetPath) {
        navigate(targetPath);
      }
    }, 280);
  };

  const navLinks = [
    { path: '/', label: 'HOME', desc: 'Main community hub & overview' },
    { path: '/about', label: 'ABOUT', desc: 'Core philosophy, mission & board' },
    { path: '/community', label: 'COMMUNITY', desc: 'Technical divisions & squads' },
    { path: '/projects', label: 'PROJECTS', desc: 'Team formation, guidance & builds' },
    { path: '/teams', label: 'TEAMS & ACHIEVEMENTS', desc: 'Team VoltEdge 007 & milestones' },
    { path: '/join', label: 'JOIN US', desc: 'Member pathways & onboarding' },
    { path: '/apply', label: 'APPLICATION FORM', desc: 'Official student registration' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-md transition-transform duration-300 ${
          isVisible || mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        } ${
          isDarkMode
            ? 'bg-[#050505]/95 border-b border-neutral-800/80'
            : 'bg-white/95 border-b border-neutral-200/90 shadow-sm'
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 h-16 sm:h-18 flex items-center justify-between">
          {/* Brand Lockup */}
          <Link
            to="/"
            className="flex items-center space-x-3 group shrink-0 select-none"
            onClick={() => mobileMenuOpen && closeMenu('/')}
          >
            <img
              src="/assets/logo.png"
              alt="VoltEdge Emblem"
              className="h-9 sm:h-10 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.45)] group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex flex-col justify-center">
              <div className="font-display font-black text-lg sm:text-xl tracking-wider text-neutral-900 dark:text-white leading-tight">
                VOLT<span className="text-volt-gold">EDGE</span>
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase leading-tight mt-0.5">
                INNOVATION COMMUNITY
              </div>
            </div>
          </Link>

          {/* Right Corner Controls: Quick Apply + Dark/Light Toggle + 3-Lines Hamburger */}
          <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
            {/* Quick Join Us on desktop */}
            <Link
              to="/join"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-volt-gold/10 hover:bg-volt-gold/20 text-amber-600 dark:text-volt-gold border border-volt-gold/40 text-xs font-mono font-bold transition-all shadow-sm"
            >
              <span>Join Us</span>
              <ArrowRight size={13} />
            </Link>

            {/* Dark/Light Theme Toggle inside the Top Navigation Bar */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 transition-colors focus:outline-none shadow-sm flex items-center justify-center"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-volt-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-neutral-700" />
              )}
            </button>

            {/* Three Lines Hamburger Section Button */}
            <button
              onClick={() => {
                if (mobileMenuOpen) {
                  closeMenu();
                } else {
                  openMenu();
                }
              }}
              className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:border-volt-gold transition-colors focus:outline-none shadow-sm flex items-center justify-center group"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen && !isClosing ? (
                <X className="w-6 h-6 text-volt-gold" />
              ) : (
                <Menu className="w-6 h-6 text-volt-gold group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Editorial Menu Overlay Portaled to document.body */}
      {mounted && mobileMenuOpen && createPortal(
        <div
          className={`fixed inset-0 z-[99999] ${
            isDarkMode ? 'bg-[#050505] text-white' : 'bg-[#F8FAFC] text-slate-900'
          } flex flex-col justify-between overflow-hidden h-[100dvh] w-screen select-none ${
            isClosing ? 'menu-overlay-exit' : 'menu-overlay-enter'
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Monospace Brand Stamp, Live IST Clock, Theme Toggle & Minimalist Close Button */}
          <header
            className={`w-full shrink-0 h-14 sm:h-16 px-5 sm:px-10 lg:px-14 flex items-center justify-between border-b ${
              isDarkMode ? 'border-zinc-800/80 bg-[#050505]' : 'border-slate-200 bg-[#F8FAFC]'
            } z-20`}
          >
            {/* Top Left: Monospace Brand Stamp */}
            <div
              className={`font-mono text-xs sm:text-sm font-bold tracking-widest flex items-center gap-2.5 ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              <span
                className={`w-2 h-2 ${
                  isDarkMode ? 'bg-volt-gold' : 'bg-amber-600'
                } rounded-sm animate-pulse`}
              />
              <span>VOLTEDGE_COMMUNITY</span>
            </div>

            {/* Top Center: Live IST Clock */}
            <div
              className={`font-mono text-[10px] sm:text-xs tracking-widest ${
                isDarkMode ? 'text-zinc-400' : 'text-slate-500'
              } hidden sm:block`}
            >
              <span className={isDarkMode ? 'text-zinc-300' : 'text-slate-700'}>VOLTEDGE</span>
              <span className={`mx-2 ${isDarkMode ? 'text-zinc-600' : 'text-slate-300'}`}>-</span>
              <span>BHATKAL</span>
              <span className={`mx-2 ${isDarkMode ? 'text-zinc-600' : 'text-slate-300'}`}>/</span>
              <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {currentTime || '00:00:00'} IST
              </span>
            </div>

            {/* Top Right: Theme Toggle & Minimalist Close Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-xl ${
                  isDarkMode
                    ? 'text-zinc-400 hover:text-volt-gold'
                    : 'text-slate-500 hover:text-amber-600'
                } transition-colors focus:outline-none`}
                aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-volt-yellow" />
                ) : (
                  <Moon className="w-5 h-5 text-neutral-700" />
                )}
              </button>

              <button
                onClick={() => closeMenu()}
                className={`p-2 -mr-2 ${
                  isDarkMode
                    ? 'text-zinc-400 hover:text-volt-gold'
                    : 'text-slate-500 hover:text-amber-600'
                } transition-colors focus:outline-none`}
                aria-label="Close Menu"
              >
                <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2]" />
              </button>
            </div>
          </header>

          {/* Center Stage: Vertically Balanced Editorial Links */}
          <div className="relative flex-1 min-h-0 w-full px-5 sm:px-10 lg:px-14 py-2 sm:py-3 flex flex-col justify-evenly overflow-hidden">
            {/* Giant Outlined Watermark */}
            <div className="text-ghost pointer-events-none absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 select-none font-display text-[22vw] lg:text-[24vw] font-black leading-none uppercase z-0">
              VOLT
            </div>

            {/* Navigation Items Stack with Continuous Guide Line */}
            <div className="relative z-10 w-full max-w-5xl">
              <div className="relative flex items-stretch">
                {/* Continuous Vertical Guide Line */}
                <div
                  className={`absolute left-[32px] sm:left-[42px] md:left-[48px] top-1 bottom-1 w-[2px] ${
                    isDarkMode
                      ? 'bg-volt-gold shadow-[0_0_14px_rgba(212,175,55,0.7)]'
                      : 'bg-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.5)]'
                  } ${isClosing ? 'nav-guideline-out' : 'nav-guideline-in'}`}
                />

                {/* Vertical Stack of Navigation Items distributed evenly */}
                <div className="flex flex-col justify-evenly w-full gap-[0.7vh] sm:gap-[1.1vh]">
                  {navLinks.map((item, idx) => {
                    const isCurrentRoute = pathname === item.path;
                    const isSelected = selectedPath === item.path;
                    const highlight = isSelected || (selectedPath === null && isCurrentRoute);

                    return (
                      <div
                        key={item.path}
                        style={{
                          animationDelay: isClosing
                            ? `${idx * 20}ms`
                            : `${idx * 40 + 60}ms`,
                        }}
                        onClick={() => closeMenu(item.path)}
                        className={`group flex items-baseline w-full cursor-pointer select-none py-[0.3vh] transition-all duration-200 ${
                          isClosing ? 'nav-item-animated-out' : 'nav-item-animated-in'
                        } ${highlight ? 'translate-x-2' : ''}`}
                      >
                        {/* Two-digit Number */}
                        <span
                          className={`w-[32px] sm:w-[42px] md:w-[48px] pr-2.5 sm:pr-3.5 md:pr-4 text-right font-mono text-[10px] sm:text-xs md:text-sm font-bold transition-colors shrink-0 ${
                            highlight
                              ? isDarkMode
                                ? 'text-volt-yellow'
                                : 'text-amber-600'
                              : isDarkMode
                              ? 'text-zinc-500 group-hover:text-volt-gold'
                              : 'text-slate-400 group-hover:text-amber-600'
                          }`}
                        >
                          {String(idx + 1).padStart(2, '0')}
                        </span>

                        {/* Responsive Bold Title */}
                        <span
                          className={`pl-3 sm:pl-5 md:pl-6 font-display font-black uppercase tracking-tight text-[clamp(1.15rem,3.1vh,3.4rem)] leading-none transition-all duration-200 group-hover:translate-x-2 ${
                            highlight
                              ? isDarkMode
                                ? 'text-volt-yellow drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]'
                                : 'text-amber-600 font-extrabold'
                              : isDarkMode
                              ? `group-hover:text-volt-yellow ${
                                  idx === 0 ? 'text-volt-gold' : 'text-white'
                                }`
                              : `group-hover:text-amber-600 ${
                                  idx === 0 ? 'text-amber-600 font-extrabold' : 'text-slate-900'
                                }`
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Monospace Footer Context */}
          <footer
            className={`w-full shrink-0 py-2.5 sm:py-3 px-5 sm:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-4 border-t ${
              isDarkMode ? 'border-zinc-800/80 bg-[#050505]' : 'border-slate-200 bg-[#F8FAFC]'
            } z-20 font-mono text-[10px] sm:text-xs`}
          >
            <div
              className={`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left leading-tight gap-0.5 sm:gap-2 ${
                isDarkMode ? 'text-zinc-300' : 'text-slate-600'
              }`}
            >
              <span
                className={`whitespace-nowrap ${
                  isDarkMode ? 'text-neutral-400 font-medium' : 'text-slate-500 font-medium'
                }`}
              >
                VOLTEDGE INNOVATION COMMUNITY
              </span>
              <span className={`hidden sm:inline ${isDarkMode ? 'text-zinc-600' : 'text-slate-300'}`}>
                •
              </span>
              <span
                className={`font-bold whitespace-nowrap ${
                  isDarkMode ? 'text-volt-gold' : 'text-amber-600'
                }`}
              >
                STUDENT PROJECT SQUADS
              </span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0 pt-0.5 sm:pt-0 whitespace-nowrap">
              <a
                href="https://voltedge007.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 transition-colors font-semibold ${
                  isDarkMode
                    ? 'text-zinc-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                <span>Team 007 Portfolio</span>
                <ExternalLink
                  className={`w-3 h-3 ${isDarkMode ? 'text-volt-gold' : 'text-amber-600'}`}
                />
              </a>
              <span className={isDarkMode ? 'text-zinc-700' : 'text-slate-300'}>/</span>
              <a
                href="https://www.instagram.com/teamvoltedge/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 transition-colors font-semibold ${
                  isDarkMode
                    ? 'text-zinc-300 hover:text-pink-400'
                    : 'text-slate-600 hover:text-pink-600'
                }`}
              >
                <Instagram className="w-3.5 h-3.5 text-pink-500" />
                <span>Instagram</span>
              </a>
            </div>
          </footer>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;

