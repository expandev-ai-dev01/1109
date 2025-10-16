/**
 * @page HomePage
 * @summary Home page with welcome message
 * @domain core
 * @type page-component
 * @category public
 */

import { Card } from '@/core/components/Card';

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Bem-vindo ao TODO List</h1>
        <p className="mt-2 text-gray-600">Gerencie suas tarefas de forma simples e eficiente</p>
      </div>

      <Card variant="elevated">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">Começando</h2>
          <p className="text-gray-600">
            Este é o seu gerenciador de tarefas. Aqui você pode criar, visualizar e organizar suas
            tarefas diárias.
          </p>
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900">Funcionalidades:</h3>
            <ul className="list-inside list-disc space-y-1 text-gray-600">
              <li>Criar novas tarefas com título e descrição</li>
              <li>Definir data de vencimento</li>
              <li>Estabelecer níveis de prioridade</li>
              <li>Visualizar todas as suas tarefas</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
