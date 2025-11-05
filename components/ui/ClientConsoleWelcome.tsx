'use client';

import { useEffect } from 'react';

export default function ClientConsoleWelcome() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log(
        '%cThiago Do Carmo',
        'font-size: 24px; font-weight: bold; color: #D4A574;'
      );
      console.log(
        '%cSe você está vendo isso, provavelmente é dev também! 👋\nVamos conversar: contato@thiagodocarmo.com',
        'font-size: 14px; color: #A0A0A0;'
      );
    }
  }, []);

  return null;
}
