import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Input } from "@repo/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@repo/ui/pagination";
import { Badge } from "@repo/ui/badge";
import { CheckCircle, Clock, Trash2 } from 'lucide-react';

const BookmarksPage = () => {
  const bookmarksData = [
    { name: "24 Two Sum", difficulty: "Easy", points: "120 pts", status: "completed" },
    { name: "24 Two Sum", difficulty: "Medium", points: "120 pts", status: "not-started" },
    { name: "24 Two Sum", difficulty: "Hard", points: "120 pts", status: "in-progress" },
    { name: "24 Two Sum", difficulty: "Medium", points: "120 pts", status: "completed" },
    { name: "24 Two Sum", difficulty: "Hard", points: "120 pts", status: "not-started" },
    { name: "24 Two Sum", difficulty: "Medium", points: "120 pts", status: "completed" },
    { name: "24 Two Sum", difficulty: "Easy", points: "120 pts", status: "not-started" },
    { name: "24 Two Sum", difficulty: "Hard", points: "120 pts", status: "in-progress" },
    { name: "24 Two Sum", difficulty: "Easy", points: "120 pts", status: "completed" },
    { name: "24 Two Sum", difficulty: "Hard", points: "120 pts", status: "not-started" },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-700 text-green-100';
      case 'medium': return 'bg-yellow-600 text-yellow-100';
      case 'hard': return 'bg-red-700 text-red-100';
      default: return 'bg-gray-700 text-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-yellow-500" />;
      default: return <span className="h-5 w-5">-</span>;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-8 px-4 mb-6 bg-gray-950 text-white">
      <h1 className="text-2xl font-bold ">Bookmarks</h1>
      <p className="text-sm text-gray-400 mb-6 pb-6">
        Easily access your saved problems and revisit them anytime.
      </p>
      
      <div className="flex space-x-4 mb-6">
        <Select>
          <SelectTrigger className="w-[150px] bg-gray-900 border-gray-800">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px] bg-gray-900 border-gray-800">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="not-started">Not Started</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[150px] bg-gray-900 border-gray-800">
            <SelectValue placeholder="Topics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arrays">Arrays</SelectItem>
            <SelectItem value="strings">Strings</SelectItem>
            <SelectItem value="dynamic-programming">Dynamic Programming</SelectItem>
          </SelectContent>
        </Select>
        <Input type="search" placeholder="Search.." className="flex-grow bg-gray-900 border-gray-800" />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-800">
            <TableHead className="text-gray-400">Name</TableHead>
            <TableHead className="text-gray-400">Difficulty</TableHead>
            <TableHead className="text-gray-400">Points</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {bookmarksData.map((bookmark, index) => (
            <TableRow key={index} className="border-b border-gray-800">
              <TableCell className="font-medium">{bookmark.name}</TableCell>
              <TableCell>
                <Badge className={`${getDifficultyColor(bookmark.difficulty)}`}>
                  {bookmark.difficulty}
                </Badge>
              </TableCell>
              <TableCell>{bookmark.points}</TableCell>
              <TableCell>{getStatusIcon(bookmark.status)}</TableCell>
              <TableCell>
                <Trash2 className="h-5 w-5 text-red-500 cursor-pointer" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">9</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BookmarksPage;