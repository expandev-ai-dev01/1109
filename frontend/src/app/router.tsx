/**
 * @router AppRouter
 * @summary Main application routing configuration
 * @type router-configuration
 * @category navigation
 */

import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import { ErrorBoundary } from '@/core/components/ErrorBoundary';
import { MainLayout } from '@/pages/layouts/MainLayout';

const HomePage = lazy(() => import('@/pages/Home'));
const TasksPage = lazy(() => import('@/pages/Tasks'));
const NotFoundPage = lazy(() => import('@/pages/NotFound'));

export const AppRouter = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/tasks" replace />} />
            <Route path="tasks" element={<TasksPage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};
