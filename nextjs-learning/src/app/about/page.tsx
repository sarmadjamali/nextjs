'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>📄 About Page</h1>
      <p>This is a new page in your Next.js app!</p>
      <Link href="/">🏠 Back to Home</Link>
    </div>
  );
}