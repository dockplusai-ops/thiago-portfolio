'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  HiRocketLaunch,
  HiSparkles,
  HiHomeModern,
  HiBookOpen,
  HiCube,
  HiAcademicCap,
} from 'react-icons/hi2';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const companies = [
  {
    id: 'dockplus',
    title: 'DOCKPLUS AI SOLUTIONS',
    slogan: 'Automação inteligente para negócios que querem escalar',
    description:
      'Soluções de IA, automação de marketing, CRM inteligente e sistemas multiagente para acelerar resultados.',
    badge: 'Tecnologia & IA',
    icon: <HiRocketLaunch className="w-12 h-12" />,
    featured: true,
  },
  {
    id: 'roberts',
    title: 'ROBERTS LANDSCAPE CONSTRUCTION & DESIGN',
    slogan: 'Rooted in Excellence',
    description:
      'Paisagismo de alto padrão, hardscape, pátios e design de jardins em Cape Cod.',
    badge: 'Paisagismo Premium',
    icon: <HiSparkles className="w-12 h-12" />,
  },
  {
    id: 'cheesebread',
    title: 'CHEESEBREAD BAKERY CAFÉ',
    slogan: 'Sabor brasileiro, coração acolhedor',
    description:
      'Padaria-café artesanal com pão de queijo, espresso, pizzas e catering em Hyannis, MA.',
    badge: 'Gastronomia',
    icon: <HiAcademicCap className="w-12 h-12" />,
  },
  {
    id: 'capecodder',
    title: 'CAPE CODDER HOME IMPROVEMENT',
    slogan: 'Transformando casas com excelência',
    description:
      'Reformas residenciais, carpintaria, pintura e construção com padrão premium.',
    badge: 'Construção',
    icon: <HiHomeModern className="w-12 h-12" />,
  },
  {
    id: 'breadroses',
    title: 'BREAD & ROSES BOOKSTORE CAFÉ',
    slogan: 'Onde café encontra cultura',
    description:
      'Livraria-café cultural com brunch, eventos e espaço para boas conversas.',
    badge: 'Cultura & Café',
    icon: <HiBookOpen className="w-12 h-12" />,
  },
  {
    id: 'allgranite',
    title: 'ALL GRANITE & STONE',
    slogan: 'Elegância em cada superfície',
    description:
      'Especialistas em mármore, granito e quartzo para cozinhas e banheiros premium.',
    badge: 'Mármores & Granitos',
    icon: <HiCube className="w-12 h-12" />,
  },
];

export default function Ecosystem() {
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  // DockPlus AI should appear first with special animation
  const featuredVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        delay: 0.1,
      },
    },
  };

  return (
    <section
      id="ecosystem"
      ref={containerRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0A0A0A, #1A1A1A)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-6">
          <SectionTitle title="Meu Ecossistema de Negócios" />
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-400 text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4"
        >
          Seis marcas unidas pela visão DockPlus Enterprise — excelência, inovação e propósito
        </motion.p>

        {/* Companies Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
                            {companies.map((company) => (
            <motion.div
              key={company.id}
              variants={company.featured ? featuredVariants : itemVariants}
              className={company.featured ? 'md:col-span-2 lg:col-span-2' : ''}
            >
              <Card
                title={company.title}
                slogan={company.slogan}
                description={company.description}
                badge={company.badge}
                icon={company.icon}
                featured={company.featured}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
