'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

export default function Faith() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="faith"
      ref={containerRef}
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #1A1A1A, #0A0A0A)',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <SectionTitle title="Fé & Propósito" />
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-4 italic px-4">
            O que me move além dos negócios
          </p>
        </motion.div>

        {/* Main Content - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-md">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden border-2 border-primary/40">
                <Image
                  src="https://res.cloudinary.com/dhrxy4yo0/image/upload/v1762042597/gemini-2.5-flash-image_Create_a_realistic_professional_portrait_of_me_sitting_at_an_office_desk_with_a_-0_hqdm4c.jpg"
                  alt="Thiago Do Carmo - Empresário e líder de tecnologia"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center center' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Highlighted Quote */}
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold italic text-primary leading-relaxed border-l-4 border-primary pl-4 sm:pl-6">
              &ldquo;A excelência glorifica a Deus.&rdquo;
            </blockquote>

            {/* Body Text */}
            <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
              <p>
                Sou cristão, ministro de louvor e multi-instrumentista (guitarra,
                baixo, violão e bateria). Minha fé não é separada dos meus negócios
                — ela é o fundamento.
              </p>

              <p>
                Acredito que cada empresa, cada projeto e cada interação é uma
                oportunidade de servir pessoas e honrar o propósito que Deus colocou
                em minha vida.
              </p>

              <p>
                Junto com minha esposa Bruna e nossos três filhos (Nathan, Ethan e
                Noah), construímos não apenas negócios, mas um legado de integridade,
                excelência e amor.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-primary/40 bg-dark-alt group">
            <video
              src="https://res.cloudinary.com/dhrxy4yo0/video/upload/v1762311624/WhatsApp_Video_2025-11-04_at_9.57.45_PM_rkzdds.mp4"
              controls
              className="w-full h-full object-contain"
              preload="metadata"
              playsInline
              controlsList="nodownload"
            >
              Seu navegador não suporta o elemento de vídeo.
            </video>
            {/* Hover Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
          {/* Video Caption */}
          <div className="text-center px-6 pb-6">
            <p className="text-primary text-base font-medium">
              Eu ministrando Louvor
            </p>
          </div>
        </motion.div>

        {/* Family Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-dark-alt/50 border border-primary/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6 text-center font-heading">
              Família
            </h3>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-center">
                <span className="text-primary mr-3 text-lg sm:text-xl">•</span>
                <span className="text-base sm:text-lg">
                  <span className="font-semibold text-primary">Bruna Cruz</span> (esposa, 14 anos juntos)
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-lg sm:text-xl">•</span>
                <span className="text-base sm:text-lg">
                  <span className="font-semibold text-primary">Nathan, Ethan e Noah</span> (filhos)
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-3 text-lg sm:text-xl">•</span>
                <span className="text-base sm:text-lg">
                  <span className="font-semibold text-primary">Cape Cod, Massachusetts</span> (nosso lar)
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
