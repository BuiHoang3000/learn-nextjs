import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';

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

  async function login() {
    // await authApi.login({
    //   username: 'nextjs',
    //   password: '123qwe',
    // })

    await mutate();
  }

  async function logout() {
    // await authApi.logout({})
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
