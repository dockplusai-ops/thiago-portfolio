import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-extrabold text-primary mb-4 font-heading">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-light mb-4 font-heading">
          Página não encontrada
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/">
          <Button variant="primary" size="lg">
            Voltar ao início
          </Button>
        </Link>
      </div>
    </div>
  );
}
