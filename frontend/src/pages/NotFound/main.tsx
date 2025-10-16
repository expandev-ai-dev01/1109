/**
 * @page NotFoundPage
 * @summary 404 error page
 * @domain core
 * @type page-component
 * @category error
 */

import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';
import { Card } from '@/core/components/Card';

const NotFoundPage = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card variant="elevated" className="max-w-md text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900">Página não encontrada</h2>
          <p className="text-gray-600">
            A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button variant="primary" size="large">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFoundPage;
