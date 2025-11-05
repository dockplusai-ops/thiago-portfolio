'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in production
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-4 font-heading">
          Ops!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-light mb-4 font-heading">
          Algo deu errado
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Desculpe, ocorreu um erro inesperado. Por favor, tente novamente.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Button variant="primary" size="lg" onClick={reset}>
            Tentar novamente
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => (window.location.href = '/')}
          >
            Voltar ao início
          </Button>
        </div>
      </div>
    </div>
  );
}
