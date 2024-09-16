import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Input } from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@repo/ui/pagination";
import { CheckCircle, MinusCircle, AlertCircle, ChevronDown, TrendingUp } from 'lucide-react';
import { Badge } from '@repo/ui/badge';

const ProblemsPage = () => {
  const problemsData = [
    { name: "24 Two Sum", difficulty: "Easy", points: "120 pts", status: "completed" },
    { name: "24 Two Sum", difficulty: "Medium", points: "120 pts", status: "not-attempted" },
    { name: "24 Two Sum", difficulty: "Hard", points: "120 pts", status: "in-progress" },
    { name: "24 Largest Sum", difficulty: "Easy", points: "120 pts", status: "not-attempted" },
    { name: "24 Two Sum", difficulty: "Medium", points: "120 pts", status: "completed" },
    { name: "24 Largest Sum", difficulty: "Easy", points: "120 pts", status: "not-attempted" },
    { name: "24 Largest Sum", difficulty: "Hard", points: "120 pts", status: "in-progress" },
  ];

  const popularProblems = [
    { name: "Zig Zag", difficulty: "Medium", submissions: "250 Submissions" },
    { name: "3Sum", difficulty: "Easy", submissions: "250 Submissions" },
    { name: "Palindrome", difficulty: "Medium", submissions: "250 Submissions" },
    { name: "Reverse Array", difficulty: "Easy", submissions: "250 Submissions" },
  ];

  return (
    <div className="flex flex-col space-y-6 p-6 min-h-screen px-28 pt-8 pb-14">
      <h1 className="text-2xl font-bold">Problems</h1>
      <p className="text-sm text-gray-400 mb-6 pb-6">Sharpen Your Skills with Diverse Challenges      </p>
      
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="not-attempted">Not Attempted</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Topics" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="arrays">Arrays</SelectItem>
            <SelectItem value="strings">Strings</SelectItem>
            <SelectItem value="dynamic-programming">Dynamic Programming</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex-grow">
          <Input type="search" placeholder="Search..." className="w-full" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <Card className="flex-grow">
          <Table>
            <TableHeader>
              <TableRow className="bg-blueGray-800">
                <TableHead>Name</TableHead>
                <TableHead>Difficulty</TableHead>
                <TableHead>Points</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {problemsData.map((problem, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{problem.name}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold
                      ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                        problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'}`}>
                      {problem.difficulty}
                    </span>
                  </TableCell>
                  <TableCell>{problem.points}</TableCell>
                  <TableCell>
                    {problem.status === 'completed' && <CheckCircle className="text-green-500" />}
                    {problem.status === 'not-attempted' && <MinusCircle className="text-gray-500" />}
                    {problem.status === 'in-progress' && <AlertCircle className="text-yellow-500" />}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="w-full lg:w-80">
          <CardHeader>
            <CardTitle className="text-xl flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Trending Problems
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {popularProblems.map((problem, index) => (
              <div key={index} className="p-3 rounded-lg">
                <div className="font-semibold text-blueGray-50">{problem.name}</div>
                <div className="text-sm text-gray-400">{problem.submissions}</div>
                <Badge className={`px-2 py-1 rounded-full text-xs font-semibold mt-1 inline-block
                  ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}`}>
                  {problem.difficulty}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Pagination>
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

export default ProblemsPage;