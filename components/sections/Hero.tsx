'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles
    const particleCount = 20;
    const newParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

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

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-dark to-dark" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#D4A574 1px, transparent 1px),
            linear-gradient(90deg, #D4A574 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 sm:pb-16 md:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 items-center min-h-[calc(100vh-120px)] sm:min-h-[calc(100vh-200px)]">
          {/* Left Side - Content (60%) */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.p
              variants={itemVariants}
              className="text-sm text-gray-400 font-medium"
            >
              Olá, eu sou
            </motion.p>

            {/* Name with Gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading leading-tight"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Thiago Do Carmo
              </span>
            </motion.h1>

            {/* Age and Location */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500"
            >
              39 anos • Cape Cod, MA
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Empresário, Líder de Tecnologia e Inovação. Construindo excelência através de propósito, fé e automação inteligente.
            </motion.p>

            {/* Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-2"
            >
              {['21 anos nos EUA', '6 Empresas', 'DockPlus AI Solutions'].map((badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 text-sm font-medium text-primary border border-primary/30 bg-primary/5 rounded-full backdrop-blur-sm"
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4"
            >
              <Button
                onClick={() => {
                  const element = document.querySelector('#ecosystem');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="primary"
                size="lg"
              >
                Conheça meu ecossistema
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="secondary"
                size="lg"
              >
                Vamos conversar
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo (40%) */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={photoVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
              whileHover={{ scale: 1.05 }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, #D4A574, #D97843, #D4A574)',
                  padding: '3px',
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <div className="w-full h-full rounded-full bg-dark" />
              </motion.div>

              {/* Photo Container */}
              <div className="absolute inset-[3px] rounded-full overflow-hidden bg-dark-alt">
                <Image
                  src="https://res.cloudinary.com/dhrxy4yo0/image/upload/c_scale,w_800,f_auto,q_auto/v1762310575/a24b1631-6cee-450f-9d43-496e74ef6845_ua0n8s.jpg"
                  alt="Thiago Do Carmo - Empresário e líder de tecnologia"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                  priority
                />
              </div>

              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
