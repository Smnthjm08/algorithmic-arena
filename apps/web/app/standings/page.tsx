import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table";

const LeaderboardComponent = () => {
  const leaderboardData = [
    { rank: 5, username: "@anupsingh12", score: "120 pts", problemsSolved: 20, totalSubmissions: 256 },
    { rank: 1, username: "@anupsingh12", score: "120 pts", problemsSolved: 20, totalSubmissions: 256 },
    // ... add more entries as needed
  ];

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
      <p className="text-sm text-gray-400 mb-6">
        Track, Compete, and Rise in the Ultimate Coding Arena Leaderboard.
      </p>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general" className="data-[state=active]:bg-[#1e293b]">General Leaderboard</TabsTrigger>
          <TabsTrigger value="contest" className="data-[state=active]:bg-[#1e293b]">Contest Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#1e293b] border-b border-gray-700">
                <TableHead className="text-gray-300">Rank</TableHead>
                <TableHead className="text-gray-300">Username</TableHead>
                <TableHead className="text-gray-300">Overall Score</TableHead>
                <TableHead className="text-gray-300">Problems Solved</TableHead>
                <TableHead className="text-gray-300">Total Submissions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData.map((entry, index) => (
                <TableRow key={index} className="border-b border-gray-700">
                  <TableCell className="text-white">{entry.rank}</TableCell>
                  <TableCell className="text-blue-400">{entry.username}</TableCell>
                  <TableCell className="text-white">{entry.score}</TableCell>
                  <TableCell className="text-white">{entry.problemsSolved}</TableCell>
                  <TableCell className="text-white">{entry.totalSubmissions}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="contest">
          {/* Contest leaderboard content */}
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-4 space-x-2">
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">&lt;</button>
        <button className="px-3 py-1 rounded bg-blue-600 text-white">1</button>
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">2</button>
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">...</button>
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">9</button>
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">10</button>
        <button className="px-3 py-1 rounded bg-[#1e293b] text-white">&gt;</button>
      </div>
    </div>
  );
};

export default LeaderboardComponent;