import Link from 'next/link';
import { WelcomeProps } from './Components/Interfaces';
import Counter from './Components/Counter';
import Greetings from './Components/Greetings';
import APICall from './Components/ApiCall';



function Welcome({ name, designation }: WelcomeProps) {
  return (
    <div>
      <h1>Hello, {name}! welcome to Next.js!</h1>
      {designation && <p>Your designation is: {designation}</p>}
    </div>
  )
}


 function HomePage() {
  return (
    <div>
      <Welcome name="Sarmad" />
      <Welcome name="Jamali" designation="Sr Sofware Engineer" />

      <h1 className="text-3xl font-bold underline">
        <Link href="/example/two">example 2</Link>
      </h1>
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <Counter mycount={5} />
        <Greetings mygreetings="SArmad Jamali" />

      </div>

      <h2>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
          <Link href="/about">📄 Go to About Page</Link>
        </div>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>

          <Link href="/user/sarmad jamali 123">📄 Go to user 123 page</Link>
        </div>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>

          <Link href="/user/42">👤 Visit User 42</Link>
        </div>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>

          <Link href="/search?query=react">🔍 Search for React</Link>
        </div>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>

          <Link href="/search">🔍 Search for empty</Link>
        </div>
        <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
          <APICall />
        </div>
      </h2>
    </div>
  );
}


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-sans">
      <HomePage />
    </div>
  );
}