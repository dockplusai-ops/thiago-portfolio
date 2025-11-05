'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Empresas', href: '#ecosystem' },
  { name: 'DockPlus AI', href: '#dockplusai' },
  { name: 'Skills', href: '#skills' },
  { name: 'Fé & Propósito', href: '#faith' },
  { name: 'Contato', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(currentSection ? `#${currentSection}` : '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          height: isScrolled ? 60 : 80,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-md border-b border-dark-alt/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.button
              onClick={() => handleLinkClick('#hero')}
              className="text-base sm:text-lg md:text-xl font-bold text-primary font-heading cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Thiago Do Carmo
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="relative text-sm font-medium transition-colors"
                  whileHover={{ y: -2 }}
                >
                  <span
                    className={`${
                      activeSection === link.href
                        ? 'text-primary font-bold'
                        : 'text-light hover:text-primary'
                    } transition-colors duration-200`}
                  >
                    {link.name}
                  </span>
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX:
                        activeSection === link.href ? 1 : 0,
                    }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-light hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <HiX size={24} />
              ) : (
                <HiMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-dark border-l border-dark-alt z-50 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col pt-24 px-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`text-left py-3 border-b border-dark-alt/50 ${
                      activeSection === link.href
                        ? 'text-primary font-bold'
                        : 'text-light hover:text-primary'
                    } transition-colors duration-200`}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
