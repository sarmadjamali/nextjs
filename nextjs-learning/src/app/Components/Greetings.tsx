'use client';
import { useState } from 'react';
import { GreetingsProps } from './Interfaces';




export default function Greetings({ mygreetings }: GreetingsProps) {

    const [name, setName] = useState(mygreetings);

    return (

        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>💬 Greeting 1111</h2>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '0.5rem', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            {name && <p>Hello, {name}! 👋</p>}
            <button onClick={() => setName('')} style={{ marginLeft: '10px' }}>
                ❌ Clear Name
            </button>
            <p style={{ marginTop: '10px' }}>Type your name and see the greeting.</p>
        </div>
    );
}