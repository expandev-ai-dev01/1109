/**
 * @component MainLayout
 * @summary Main application layout with header and content area
 * @domain core
 * @type layout-component
 * @category layout
 */

import { Outlet } from 'react-router-dom';
import { Header } from './_impl/Header';

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
