'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

interface Stat {
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: 14, label: 'anos casado', suffix: '' },
  { value: 3, label: 'filhos', suffix: '' },
  { value: 21, label: 'anos nos EUA', suffix: '' },
  { value: 6, label: 'empresas ativas', suffix: '' },
];

function CountUp({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="about"
      ref={containerRef}
      className="bg-dark py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ paddingTop: '60px', paddingBottom: '60px' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <SectionTitle title="Thiago Do Carmo" className="mb-8 sm:mb-12 md:mb-16" />

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Column */}
          <div className="space-y-6">
            {/* My Story Card */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-lg p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 font-heading">
                Minha História
              </h3>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  <span className="text-primary font-semibold">21 anos nos Estados Unidos</span>, morando em{' '}
                  <span className="text-primary font-semibold">Cape Cod, Massachusetts</span>.
                </p>
                <p>
                  Casado há <span className="text-primary font-semibold">14 anos</span> com{' '}
                  <span className="text-primary font-semibold">Bruna Cruz</span>.
                </p>
                <p>
                  Pai de <span className="text-primary font-semibold">três filhos</span>:{' '}
                  <span className="text-primary font-semibold">Nathan, Ethan e Noah</span>.
                </p>
                <p>
                  Nascido no Brasil, construí minha vida e negócios nos EUA.
                </p>
              </div>
            </motion.div>

            {/* My Philosophy Card */}
            <motion.div
              variants={itemVariants}
              className="bg-dark-alt border border-primary/20 rounded-lg p-6 sm:p-8 hover:border-primary/40 transition-colors duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 font-heading">
                Minha Filosofia
              </h3>
              <blockquote className="text-lg sm:text-xl italic text-primary leading-relaxed">
                &ldquo;Acredito que a excelência glorifica a Deus. O negócio é uma ferramenta para servir pessoas — não apenas gerar lucro. Meu foco é criar experiências e marcas que conectem fé, propósito e resultado real.&rdquo;
              </blockquote>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Professional Photo Card */}
            <motion.div
              variants={itemVariants}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group"
            >
              <Image
                src="https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762310575/IMG_1542_qnzyou.jpg"
                alt="Thiago Do Carmo - Empresário e líder de tecnologia em Cape Cod, MA"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: 'center 35%' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                loading="lazy"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="bg-dark-alt border border-primary/20 rounded-lg p-4 sm:p-6 hover:border-primary/40 transition-colors duration-300 text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary font-heading mb-1 sm:mb-2">
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-gray-400 capitalize">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
