import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { User, LogIn, UserPlus, Menu, X } from 'lucide-react';
import GlassCard from './ui/GlassCard';

const Header = () => {
  const user = useAuthStore((state) => state.user);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation links with custom classes
  const navLinks = user
    ? [
        {
          
          to: '/',
          label: 'Home',
          className: 'text-gray-300 hover:text-white hover:bg-slate-700/70',
        },
        {
          to: '/currency',
          label: 'Currency',
          className: 'text-cyan-400 hover:text-cyan-300 font-medium hover:bg-slate-700/70',
        },
        {
          to: '/myprofile',
          label: 'Profile',
          icon: User,
          className: 'text-purple-300 hover:text-purple-200 hover:bg-slate-700/70',
        },
      ]
    : [
        {
          to: '/home/login',
          label: 'Login',
          icon: LogIn,
          className: 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-900 text-white px-5 py-2 rounded-lg font-semibold hover:bg-sky-700 shadow-md',
        },
       
      ];

  return (
    <header className="bg-gradient-to-r from-slate-800 via-teal-700 to-slate-900 border-b border-slate-800 px-6 py-2 shadow-xl fixed w-full  sticky top-0 z-50 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <NavLink
              to="/"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:from-cyan-300 hover:to-blue-400 transition-all duration-300"
            >
              Trustify
            </NavLink>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-600 text-white shadow-sm ring-2 ring-cyan-400/50'
                      : link.className
                  }`
                }
              >
                {link.icon && <link.icon className="w-4 h-4" />}
                <span>{link.label}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-700/70 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-700 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-600 text-white shadow-sm'
                        : link.className
                    }`
                  }
                >
                  {link.icon && <link.icon className="w-5 h-5" />}
                  <span className="font-medium">{link.label}</span>
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;