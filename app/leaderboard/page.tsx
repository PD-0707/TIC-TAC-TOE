'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeaderboardPage() {
  const [winners, setWinners] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('winners');
    if (stored) {
      setWinners(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6 font-serif">Leaderboard</h1>

      {winners.length > 0 ? (
        <ul className="mb-6 w-full max-w-md space-y-2">
          {winners.map((winner, index) => (
            <li
              key={index}
              className="bg-yellow-600 p-4 rounded text-center text-pink-800 text-1xl font-bold"
            >
              Winner #{index + 1}: Player {winner}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg mb-6">No games played yet!</p>
      )}

      <div className="flex gap-4">
        <button
          onClick={() => router.push('/')}
          className="bg-pink-600 px-5 py-2 rounded hover:bg-blue-700"
        >
          Home
        </button>
        <button
          onClick={() => router.push('/game')}
          className="bg-green-600 px-5 py-2 rounded hover:bg-blue-700"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}
