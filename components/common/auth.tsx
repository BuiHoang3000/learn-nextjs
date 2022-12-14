import { useEffect } from 'react';

import { useRouter } from 'next/router';

//
import { useAuth } from '@/hooks';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();
  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && (profile as any)?.username) router.push('/login');
  }, [router, profile, firstLoading]);

  if (!(profile as any)?.username) return <p>Loading...</p>;

  return <div>{children}</div>;
}
