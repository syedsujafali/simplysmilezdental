'use client';

import React, { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to?: string;
  href?: string;
  replace?: boolean;
  scroll?: boolean;
}

/**
 * Universal Link component for seamless compatibility
 * Supports both `to` (React Router style) and `href` (Next.js style)
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, href, children, ...rest },
  ref
) {
  const target = to || href || '#';
  return (
    <NextLink ref={ref} href={target} {...rest}>
      {children}
    </NextLink>
  );
});

export default Link;
