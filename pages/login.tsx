import { authApi } from '@/api/index';

export default function LoginPage() {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'dollar',
        password: '123wee',
      });
    } catch (error) {}
  }

  async function handleGetProfileClick() {
    try {
      await authApi.profile();
    } catch (error) {}
  }

  async function handleLogoutClick() {
    try {
      await authApi.logout();
    } catch (error) {}
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
