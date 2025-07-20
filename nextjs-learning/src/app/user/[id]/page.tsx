'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function UserPage() {
  const params = useParams();
  // Decode the dynamic route parameter
  if (!params.id) {
    return <p>No user ID provided.</p>;
  }

  const userId = decodeURIComponent(params.id.toString()); // dynamic route param

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👤 User Page</h1>
      <p>User ID: {userId}</p>
      <Link href="/">🏠 Back to Home</Link>
    </div>
  );
}