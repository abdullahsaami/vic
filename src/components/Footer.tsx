import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0A0A0A] text-neutral-800 dark:text-neutral-200 border-t border-neutral-200 dark:border-neutral-800 pt-14 pb-10 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-10">
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src="/assets/logo.png"
                alt="VoltEdge Emblem"
                className="h-9 w-auto object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]"
              />
              <div className="flex flex-col">
                <span className="font-display font-black text-xl tracking-wider text-neutral-900 dark:text-white">
                  VOLT<span className="text-volt-gold">EDGE</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase">
                  INNOVATION COMMUNITY
                </span>
              </div>
            </Link>

            <p className="text-xs text-amber-600 dark:text-volt-yellow font-mono italic">
              "Driven by Volts, Defined by Vision."
            </p>

            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm">
              A peer-to-peer student innovation network where passionate builders connect, form squads around real problem statements, and build projects together.
            </p>

            {/* Social Channels */}
            <div className="flex items-center space-x-2.5 pt-1">
              <motion.a
                href="https://www.instagram.com/teamvoltedge/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-pink-100 dark:hover:bg-pink-950/50 text-neutral-600 dark:text-neutral-300 hover:text-pink-600 dark:hover:text-pink-400 border border-neutral-200 dark:border-neutral-800 hover:border-pink-300 dark:hover:border-pink-600 transition-colors"
                whileHover={{ scale: 1.06 }}
                aria-label="Instagram"
                title="@teamvoltedge on Instagram"
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-blue-100 dark:hover:bg-blue-950/50 text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 border border-neutral-200 dark:border-neutral-800 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                whileHover={{ scale: 1.06 }}
                aria-label="LinkedIn"
                title="VoltEdge LinkedIn Community"
              >
                <Linkedin size={16} />
              </motion.a>
              <motion.a
                href="https://youtu.be/qN-r4Fv95A8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-red-100 dark:hover:bg-red-950/50 text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 border border-neutral-200 dark:border-neutral-800 hover:border-red-300 dark:hover:border-red-600 transition-colors"
                whileHover={{ scale: 1.06 }}
                aria-label="YouTube"
                title="VoltEdge on YouTube"
              >
                <Youtube size={16} />
              </motion.a>
              <motion.a
                href="mailto:contact@voltedge.org"
                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 hover:bg-volt-gold/20 text-neutral-600 dark:text-neutral-300 hover:text-volt-gold border border-neutral-200 dark:border-neutral-800 hover:border-volt-gold transition-colors"
                whileHover={{ scale: 1.06 }}
                aria-label="Email"
                title="Email contact@voltedge.org"
              >
                <Mail size={16} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase mb-4">
              Community Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <Link to="/" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Community Tracks
                </Link>
              </li>
              <li>
                <Link to="/teams" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Teams &amp; Achievements
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-amber-600 dark:text-volt-yellow hover:underline font-bold transition-colors">
                  Join Us →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-volt-gold uppercase mb-4">
              Get Connected
            </h4>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Have questions or a problem statement? Reach out to student coordinators or apply to join our channels.
            </p>
            <div className="space-y-2 text-xs font-mono text-neutral-600 dark:text-neutral-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-volt-gold shrink-0" />
                <a href="mailto:contact@voltedge.org" className="hover:underline">
                  contact@voltedge.org
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-volt-gold shrink-0" />
                <span>Bhatkal, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Privacy Policy & Contact Us Only, mobile-stacked layout */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 text-center md:text-left">
          <p className="break-words">
            &copy; {currentYear} VoltEdge Innovation Community. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 pt-1 md:pt-0">
            <Link
              to="/privacy"
              className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <a
              href="mailto:contact@voltedge.org"
              className="hover:text-neutral-900 dark:hover:text-neutral-300 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
