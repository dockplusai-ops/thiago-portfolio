'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiEnvelope, HiPhone } from 'react-icons/hi2';
import { FaLinkedin } from 'react-icons/fa';
import Button from '../ui/Button';

const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'contato@thiagodocarmo.com',
    href: 'mailto:contato@thiagodocarmo.com',
    icon: <HiEnvelope className="w-6 h-6" />,
    action: 'copy',
  },
  {
    id: 'phone',
    label: 'Telefone/WhatsApp',
    value: '+1 (508) 555-0123',
    href: 'tel:+15085550123',
    icon: <HiPhone className="w-6 h-6" />,
    action: 'link',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/thiagodocarmo',
    href: 'https://linkedin.com/in/thiagodocarmo',
    icon: <FaLinkedin className="w-6 h-6" />,
    action: 'link',
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    try {
      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      console.log('Form submitted:', formData);
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Erro ao enviar mensagem. Por favor, tente novamente ou use o email direto.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative bg-dark py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#D4A574 1px, transparent 1px),
              linear-gradient(90deg, #D4A574 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 font-heading px-4">
            Vamos Construir Algo Incrível Juntos
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Estou sempre aberto para novos projetos, parcerias e conversas sobre
            tecnologia, negócios e propósito.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {contactInfo.map((contact) => (
            <motion.div
              key={contact.id}
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-xl p-6 sm:p-8 text-center hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-center mb-4 text-primary">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-light mb-2">
                {contact.label}
              </h3>
              {contact.action === 'copy' ? (
                <button
                  onClick={() => handleCopy(contact.value)}
                  className="text-gray-400 hover:text-primary transition-colors text-sm break-all"
                >
                  {copied ? 'Copiado!' : contact.value}
                </button>
              ) : (
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors text-sm break-all block"
                >
                  {contact.value}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-dark-alt border border-primary/20 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center font-heading">
              Envie uma Mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors text-base"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors text-base"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors"
                  placeholder="Sua empresa"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-dark border border-primary/20 rounded-lg text-light focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Como posso ajudar?"
                />
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full md:w-auto"
                >
                  Enviar mensagem
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
