import Link from 'next/link';
import './globals.css'; // we'll create this next

export const metadata = {
  title: 'Next.js Playground',
  description: 'Learning Next.js with Sarmad!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: '1rem', backgroundColor: '#f3f4f6' }}>
          <nav>
            <Link href="/" style={{ marginRight: '1rem' }}>🏠 Home</Link>
            <Link href="/search?query=test" style={{ marginRight: '1rem' }}>🔍 Search</Link>
            <Link href="/user/123" style={{ marginRight: '1rem' }}>👤 User</Link>
            <Link href="/about">📄 About</Link>
          </nav>
        </header>
        <main style={{ padding: '2rem' }}>{children}</main>
      </body>
    </html>
  );
}
