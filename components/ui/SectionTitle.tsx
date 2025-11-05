'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface SectionTitleProps {
  title: string;
  className?: string;
}

export default function SectionTitle({ title, className = '' }: SectionTitleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-light mb-4">
        {title}
      </h2>
      <motion.div
        className="w-20 h-1 bg-primary"
        initial={{ width: 0 }}
        animate={isInView ? { width: 80 } : { width: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      />
    </motion.div>
  );
}
