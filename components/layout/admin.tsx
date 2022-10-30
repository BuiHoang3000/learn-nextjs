import Link from 'next/link';
import { useRouter } from 'next/router';
//
import { LayoutProps } from '@/models/index';
import { useAuth } from '@/hooks/use-auth';
//
import { Auth } from '../common';

export function AdminLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { logout } = useAuth();

  async function handleLogoutClick() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {}
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <button onClick={handleLogoutClick}>Logout</button>

      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <div>{children}</div>
    </Auth>
  );
}
