import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

//
import { authApi } from '@/api/auth-api';
import { LoginPayload } from '@/models';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  // Profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: MILLISECOND_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login(payload: LoginPayload) {
    await authApi.login(payload);

    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
