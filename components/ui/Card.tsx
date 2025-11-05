'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Button from './Button';

interface CardProps {
  logo?: ReactNode;
  title: string;
  slogan: string;
  description: string;
  badge: string;
  icon?: ReactNode;
  href?: string;
  featured?: boolean;
  className?: string;
}

export default function Card({
  logo,
  title,
  slogan,
  description,
  badge,
  icon,
  href,
  featured = false,
  className = '',
}: CardProps) {
  return (
    <motion.div
      className={`bg-dark-alt border rounded-xl sm:rounded-2xl p-6 sm:p-8 relative overflow-hidden ${
        featured
          ? 'border-primary/50 md:col-span-2 lg:col-span-2'
          : 'border-primary/20'
      } ${className}`}
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Glow Effect for Featured */}
      {featured && (
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      )}

      <div className="relative z-10">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-6">
          {logo ? (
            <div className="w-20 h-20 flex items-center justify-center">
              {logo}
            </div>
          ) : (
            <div className="w-20 h-20 flex items-center justify-center text-primary">
              {icon}
            </div>
          )}
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="px-3 py-1 text-xs font-medium text-primary border border-primary/30 bg-primary/5 rounded-full">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-2 font-heading">
          {title}
        </h3>

        {/* Slogan */}
        <p className="text-xs sm:text-sm italic text-gray-300 text-center mb-3 sm:mb-4">
          {slogan}
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-400 text-center mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              if (href) {
                window.open(href, '_blank', 'noopener,noreferrer');
              }
            }}
            className="w-full sm:w-auto"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
