'use client';
import { useState } from 'react';

export default function APICall() {
  const [msg, setMsg] = useState('');

  const callApi = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div>
      <button onClick={callApi}>Call API</button>
      {msg && <p>Response: {msg}</p>}
    </div>
  );
}
