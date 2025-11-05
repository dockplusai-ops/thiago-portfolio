'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-enabled
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    if (isTouch) return; // Don't show cursor on touch devices

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Check for hoverable elements
    const hoverableElements = document.querySelectorAll('button, a, input, textarea, select');
    hoverableElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovering(false));
      el.addEventListener('mouseleave', () => setIsHovering(true));
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsHovering(false));
        el.removeEventListener('mouseleave', () => setIsHovering(true));
      });
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      animate={{
        scale: isHovering ? 1.2 : 1,
        opacity: isHovering ? 0.8 : 0.6,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28,
      }}
    >
      <div className="w-full h-full rounded-full bg-primary blur-sm" />
    </motion.div>
  );
}
