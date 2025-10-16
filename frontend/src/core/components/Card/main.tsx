/**
 * @component Card
 * @summary Container card component
 * @domain core
 * @type ui-component
 * @category display
 */

import { cn } from '@/core/utils/cn';
import { cardVariants } from './variants';
import type { CardProps } from './types';

export const Card = ({ children, variant = 'default', className, ...props }: CardProps) => {
  return (
    <div className={cn(cardVariants.base, cardVariants.variant[variant], className)} {...props}>
      {children}
    </div>
  );
};
