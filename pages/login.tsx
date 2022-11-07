import { useRouter } from 'next/router';

//
import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';

export default function LoginPage() {
  const router = useRouter();
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login({
        username: 'nextjs',
        password: '123qwe',
      });
      router.push('/about');
    } catch (error) {}
  }

  async function handleLogoutClick() {
    try {
      await logout();
    } catch (error) {}
  }

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);
    } catch (error) {}
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
}
