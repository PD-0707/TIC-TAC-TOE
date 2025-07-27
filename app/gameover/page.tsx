'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function GameOverPage() {
  const params = useSearchParams();
  const winner = params.get('winner');
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-6 font-serif ">
        🎉 Player {winner} Wins! 🎉
      </h1>
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
        <button
          onClick={() => router.push('/leaderboard')}
          className="bg-yellow-600 px-5 py-2 rounded hover:bg-blue-700"
        >
          Leaderboard
        </button>
      </div>
    </div>
  );
}
