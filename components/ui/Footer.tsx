'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const quickLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Sobre', href: '#about' },
  { name: 'Empresas', href: '#ecosystem' },
  { name: 'DockPlus AI', href: '#dockplusai' },
  { name: 'Contato', href: '#contact' },
];

const companies = [
  { name: 'DockPlus AI Solutions', href: '#dockplusai' },
  { name: 'Roberts Landscape', href: '#ecosystem' },
  { name: 'Cheesebread Bakery Café', href: '#ecosystem' },
  { name: 'Cape Codder Home Improvement', href: '#ecosystem' },
  { name: 'Bread & Roses Bookstore Café', href: '#ecosystem' },
  { name: 'All Granite & Stone', href: '#ecosystem' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://linkedin.com/in/thiagodocarmo' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://instagram.com/thiagodocarmo' },
  { name: 'Facebook', icon: <FaFacebook />, href: 'https://facebook.com/thiagodocarmo' },
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    } else {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-dark border-t border-dark-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Branding */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3 font-heading">
              Thiago Do Carmo
            </h3>
            <p className="text-gray-400 mb-4">
              Empresário • Tecnologia • Fé
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Thiago Do Carmo. Todos os direitos reservados.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: My Companies */}
          <div>
            <h4 className="text-lg font-semibold text-light mb-4">Minhas Empresas</h4>
            <ul className="space-y-2">
              {companies.map((company) => (
                <li key={company.name}>
                  <button
                    onClick={() => handleLinkClick(company.href)}
                    className="text-gray-400 hover:text-primary transition-colors text-sm text-left"
                  >
                    {company.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-8">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors text-xl"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-sm text-gray-500">
            Feito com propósito em Cape Cod, MA 🇺🇸 | Orgulhosamente brasileiro 🇧🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
