"use client"
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@repo/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@repo/ui/pagination";
import { TrophyIcon } from 'lucide-react';

const LeaderBoard = () => {
  const itemsPerPage = 15; 
  const [currentPage, setCurrentPage] = useState(1);

  const generalLeaderboardData = Array.from({ length: 100 }, (_, index) => ({
    rank: index + 1,
    username: `@anupsingh${index + 1}`,
    score: "120 pts",
    problemsSolved: 20,
    totalSubmissions: 256
  }));

  const contestLeaderboardData = Array.from({ length: 100 }, (_, index) => ({
    rank: index + 1,
    username: `@user${index + 1}`,
    totalScore: Math.floor(Math.random() * 1000) + 500,
    contestsParticipated: Math.floor(Math.random() * 20) + 1,
    problemsSolved: Math.floor(Math.random() * 100) + 50
  }));

  const totalPages = Math.ceil(generalLeaderboardData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGeneralData = generalLeaderboardData.slice(startIndex, endIndex);
  const currentContestData = contestLeaderboardData.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const PaginationComponent = () => (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
            aria-label="Previous Page"
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(1)}
            isActive={currentPage === 1}
            aria-label="Page 1"
          >
            1
          </PaginationLink>
        </PaginationItem>
        {currentPage > 3 && <PaginationEllipsis />}
        {currentPage > 2 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label={`Page ${currentPage - 1}`}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage !== 1 && currentPage !== totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              aria-label={`Page ${currentPage}`}
            >
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label={`Page ${currentPage + 1}`}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {currentPage < totalPages - 2 && <PaginationEllipsis />}
        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(totalPages)}
              aria-label={`Page ${totalPages}`}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
            aria-label="Next Page"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Leaderboard</h1>
      <p className="text-sm text-gray-400 mb-6">
        Track, Compete, and Rise in the Ultimate Coding Arena Leaderboard.
      </p>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="h-10 justify-start items-center gap-2 inline-flex">
          <TabsTrigger value="general" className="data-[state=active]:bg-blueGray-900">General Leaderboard</TabsTrigger>
          <TabsTrigger value="contest" className="data-[state=active]:bg-blueGray-900">Contest Leaderboard</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className='pb-4'>
          <div className="h-[1028px] w-[1216px] gap-5 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#1e293b] border-b border-blueGray-900">
                  <TableHead className="text-gray-300">Rank</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Username</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Overall Score</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Problems Solved</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Total Submissions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentGeneralData.map((entry) => (
                  <TableRow key={entry.rank} className="border-b border-gray-700">
                    <TableCell className="text-white">{entry.rank}</TableCell>
                    <TableCell className="text-blue-400">{entry.username}</TableCell>
                    <TableCell className="text-white">{entry.score}</TableCell>
                    <TableCell className="text-white">{entry.problemsSolved}</TableCell>
                    <TableCell className="text-white">{entry.totalSubmissions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-start mt-4">
            <PaginationComponent />
          </div>
        </TabsContent>
        <TabsContent value="contest">
          <div className='flex flex-row items-center justify-end w-full mb-4'>
            <TrophyIcon width={20} height={20} className="mr-2"/>
            <p className="text-white"> Total Contests: 20</p>
          </div>
          <div className="h-[1028px] w-[1216px] gap-5 overflow-y-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#1e293b] border-b border-blueGray-900">
                  <TableHead className="text-gray-300">Rank</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Username</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Total Score</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Contests Participated</TableHead>
                  <TableHead className="text-gray-300 w-[290px]">Problems Solved</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentContestData.map((entry) => (
                  <TableRow key={entry.rank} className="border-b border-gray-700">
                    <TableCell className="text-white">{entry.rank}</TableCell>
                    <TableCell className="text-blue-400">{entry.username}</TableCell>
                    <TableCell className="text-white">{entry.totalScore}</TableCell>
                    <TableCell className="text-white">{entry.contestsParticipated}</TableCell>
                    <TableCell className="text-white">{entry.problemsSolved}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-start mt-4">
            <PaginationComponent />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LeaderBoard;