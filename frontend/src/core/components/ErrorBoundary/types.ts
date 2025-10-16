/**
 * @types ErrorBoundary
 * @summary Type definitions for ErrorBoundary component
 */

import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
