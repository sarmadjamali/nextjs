'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');

    return (
        <div style={{ padding: '2rem' }}>
            <h1>🔍 Search Page</h1>
            {query ? (
                <p>Showing results for: <strong>{query}</strong></p>
            ) : (
                <p>No search query provided.</p>
            )}
            <Link href="/">🔍 home page</Link>
        </div>
    );
}
