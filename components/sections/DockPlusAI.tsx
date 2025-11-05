'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiBolt,
  HiSparkles,
  HiComputerDesktop,
  HiCheckCircle,
} from 'react-icons/hi2';
import Button from '../ui/Button';

const services = [
  {
    id: 'automation',
    title: 'Automação Inteligente',
    icon: <HiBolt className="w-8 h-8" />,
    items: [
      'Fluxos n8n conectando ferramentas',
      'Automação de CRM e marketing',
      'Integração de APIs e sistemas',
      'Google Sheets automatizados',
    ],
    cta: 'Automatize processos',
  },
  {
    id: 'ai',
    title: 'IA Aplicada ao Negócio',
    icon: <HiSparkles className="w-8 h-8" />,
    items: [
      'Chatbots inteligentes (ManyChat, Telegram)',
      'Análise de dados com IA',
      'Sistemas multiagente',
      'Assistentes virtuais customizados',
    ],
    cta: 'Implemente IA',
  },
  {
    id: 'web',
    title: 'Landing Pages & Web',
    icon: <HiComputerDesktop className="w-8 h-8" />,
    items: [
      'Sites otimizados para conversão',
      'Design UX focado em resultado',
      'Performance e SEO',
      'Integração com automações',
    ],
    cta: 'Crie seu site',
  },
];

const technologies = [
  'ChatGPT & Claude',
  'n8n',
  'ManyChat',
  'Supabase',
  'Next.js & React',
  'Framer',
  'Tailwind CSS',
  'Google Workspace',
  'APIs & Integrações',
];

const benefits = [
  {
    title: 'Experiência Real',
    description:
      '21 anos construindo negócios nos EUA. Entendo operação, vendas e crescimento.',
  },
  {
    title: 'Visão Técnica + Business',
    description:
      'Não sou apenas desenvolvedor. Sou empresário que usa tecnologia para resolver problemas reais.',
  },
  {
    title: 'Resultado Rápido',
    description:
      'Automações funcionando em dias, não meses. Foco em ROI imediato.',
  },
];

export default function DockPlusAI() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

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
    hidden: { opacity: 0, y: 50 },
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
      id="dockplusai"
      ref={containerRef}
      className="relative bg-dark py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Background Grid Pattern */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <HiSparkles className="w-12 h-12 text-dark" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 font-heading px-4">
            DockPlus AI Solutions
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 font-medium px-4">
            Transforme seu negócio com automação inteligente e IA aplicada
          </p>
          <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto px-4">
            Desenvolvemos soluções customizadas de inteligência artificial,
            automação de marketing e sistemas que escalam resultados sem aumentar
            custos operacionais.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center font-heading">
                {service.title}
              </h3>
                                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-start">
                    <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button variant="secondary" size="sm" className="w-full">
                  {service.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-light mb-6 sm:mb-8 font-heading px-4">
            Tecnologias que Domino
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-dark-alt border border-primary/30 rounded-full text-primary font-medium text-xs sm:text-sm hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
                            {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-xl p-6 sm:p-8 text-center hover:border-primary/40 transition-colors duration-300"
            >
              <h4 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 font-heading">
                {benefit.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-2xl overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #D4A574 0%, #D97843 50%, #D4A574 100%)',
            backgroundSize: '200% 200%',
          }}
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #D4A574 0%, #D97843 50%, #D4A574 100%)',
              backgroundSize: '200% 200%',
            }}
          />
          <div className="relative z-10 p-8 sm:p-12 md:p-16 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-dark mb-4 font-heading px-4">
              Pronto para automatizar e escalar?
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-dark/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Vamos conversar sobre como IA e automação podem transformar seu
              negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-dark text-primary hover:bg-dark-alt border-2 border-dark"
              >
                Agendar consulta
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => {
                  const element = document.querySelector('#ecosystem');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="bg-transparent text-dark border-2 border-dark hover:bg-dark/10"
              >
                Ver casos de uso
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
