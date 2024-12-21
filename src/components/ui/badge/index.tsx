import { VariantProps } from '@/lib/tailwind-variant';
import {badgeStyles} from './badge.styles'
import { ComponentPropsWithoutRef } from 'react';

type BadgeStylesProps = VariantProps<typeof badgeStyles>

type Props = BadgeStylesProps & ComponentPropsWithoutRef<'div'>

export function Badge({ variant, className, children, ...props }: Props) {
  return <div className={badgeStyles({variant, className})} {...props}>{children}</div>;
}
