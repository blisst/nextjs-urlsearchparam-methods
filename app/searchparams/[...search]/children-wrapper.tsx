'use client';

import { useParams } from 'next/navigation';
import { Fragment } from 'react';

// Ensure children are re-rendered when the search query changes
export default function ChildrenWrapper({ children }: { children: React.ReactNode }) {
  const params = useParams();
  return <Fragment>{children}</Fragment>;
}