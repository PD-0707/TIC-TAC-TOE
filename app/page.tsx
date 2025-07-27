'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-fuchsia-950 text-white text-center ">
      <h1 className="text-6xl font-bold mb-7 font-serif">Tic Tac Toe</h1>
      <button
        onClick={() => router.push('/game')}
        className="px-6 py-3 bg-pink-600 rounded hover:bg-green-600 transition font-serif"
      >
        Play Game
      </button>
    </div>
  );
}
