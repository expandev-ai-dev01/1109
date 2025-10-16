/**
 * @component Header
 * @summary Application header with navigation
 * @domain core
 * @type ui-component
 * @category navigation
 */

import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600">
              <span className="text-lg font-bold text-white">T</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TODO List</span>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              Tarefas
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
