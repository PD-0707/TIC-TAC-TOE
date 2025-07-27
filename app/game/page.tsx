'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GamePage() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const router = useRouter();

  const handleClick = (index: number) => {
    if (board[index] || calculateWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'X' : 'O';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);

    const winner = calculateWinner(newBoard);
    if (winner) {
      const existing = localStorage.getItem('winners');
      const winners = existing ? JSON.parse(existing) : [];
      winners.push(winner);
      localStorage.setItem('winners', JSON.stringify(winners));

      setTimeout(() => {
        router.push(`/gameover?winner=${winner}`);
      }, 500);
    }
  };

  const renderBox = (index: number) => (
    <div
      key={index}
      onClick={() => handleClick(index)}
      className="w-24 h-24 border-2 border-white flex items-center justify-center text-3xl font-bold cursor-pointer"
    >
      {board[index]}
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h2 className="text-3xl font-semibold mb-4">
        Player {isXTurn ? 'X' : 'O'}&apos;s Turn
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {board.map((_, index) => renderBox(index))}
      </div>
    </div>
  );
}

function calculateWinner(board: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
