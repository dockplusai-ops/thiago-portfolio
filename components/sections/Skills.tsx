'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiCpuChip,
  HiCodeBracket,
  HiChartBar,
  HiUserGroup,
  HiWrenchScrewdriver,
  HiCurrencyDollar,
} from 'react-icons/hi2';
import SectionTitle from '../ui/SectionTitle';

interface Skill {
  id: string;
  title: string;
  icon: React.ReactNode;
  proficiency: number; // 0-100 for visual bar
  competencies: string[];
}

const skills: Skill[] = [
  {
    id: 'ai',
    title: 'AI & Automação',
    icon: <HiCpuChip className="w-8 h-8" />,
    proficiency: 95,
    competencies: [
      'Orquestração de sistemas de IA',
      'Automações n8n e workflows',
      'Integração de APIs e CRMs',
      'Sistemas multiagente',
    ],
  },
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    icon: <HiCodeBracket className="w-8 h-8" />,
    proficiency: 90,
    competencies: [
      'Landing pages de alta conversão',
      'Next.js, React, TypeScript',
      'UX/UI focado em performance',
      'SEO e otimização',
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing & Conversão',
    icon: <HiChartBar className="w-8 h-8" />,
    proficiency: 88,
    competencies: [
      'Estratégias de growth',
      'Funis automatizados',
      'Copy e storytelling',
      'Google Ads e SEO',
    ],
  },
  {
    id: 'leadership',
    title: 'Gestão & Liderança',
    icon: <HiUserGroup className="w-8 h-8" />,
    proficiency: 92,
    competencies: [
      '21 anos gerenciando equipes',
      'Operações multi-empresas',
      'Vendas e atendimento',
      'Cultura organizacional',
    ],
  },
  {
    id: 'construction',
    title: 'Construção & Design',
    icon: <HiWrenchScrewdriver className="w-8 h-8" />,
    proficiency: 85,
    competencies: [
      'Paisagismo e hardscape',
      'Reformas e carpintaria',
      'Gestão de projetos',
      'Quality control',
    ],
  },
  {
    id: 'business',
    title: 'Negócios & Finanças',
    icon: <HiCurrencyDollar className="w-8 h-8" />,
    proficiency: 90,
    competencies: [
      'Gestão financeira (QuickBooks)',
      'Precificação e margens',
      'Investimentos e ROI',
      'Planejamento estratégico',
    ],
  },
];

function ProficiencyBar({ proficiency }: { proficiency: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-2 bg-dark-alt rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
        initial={{ width: 0 }}
        animate={isInView ? { width: `${proficiency}%` } : { width: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
      />
    </div>
  );
}

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      id="skills"
      ref={containerRef}
      className="bg-dark py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <SectionTitle title="Skills & Expertise" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 px-4"
          >
            Multidisciplinar por natureza, focado em resultado
          </motion.p>
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  {skill.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-primary text-center mb-3 sm:mb-4 font-heading">
                {skill.title}
              </h3>

              {/* Proficiency Bar */}
              <div className="mb-6">
                <ProficiencyBar proficiency={skill.proficiency} />
              </div>

              {/* Competencies */}
              <ul className="space-y-1.5 sm:space-y-2">
                {skill.competencies.map((competency, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-xs sm:text-sm text-gray-300"
                  >
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{competency}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
