'use client';
import { useState } from 'react';



export default function HomePage() {

    const [count, merebapkacount] = useState(0);
    // Name input state
    const [name, merebapkaname] = useState('');

    return (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
            {/* Counter Section */}
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h2>🧮 Counter</h2>
                <p>Current count: {count}</p>
                <button onClick={() => merebapkacount(count + 1)}>➕ Increase</button>
                <button onClick={() => merebapkacount(count - 1)} style={{ marginLeft: '10px' }}>
                    ➖ Decrease
                </button>
                <button onClick={() => merebapkacount(0)} style={{ marginLeft: '10px' }}>
                    🔄 Reset
                </button>
                <p style={{ marginTop: '10px' }}>Click the buttons to change the count.</p>
            </div>

            {/* Name Input Section */}
            <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
                <h2>💬 Greeting 1111</h2>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => merebapkaname(e.target.value)}
                    style={{ padding: '0.5rem', marginRight: '10px' }}
                />
                {name && <p>Hello, {name}! 👋</p>}
                <button onClick={() => merebapkaname('')} style={{ marginLeft: '10px' }}>
                    ❌ Clear Name
                </button>
                <p style={{ marginTop: '10px' }}>Type your name and see the greeting.</p>
            </div>
        </div>
    );
}