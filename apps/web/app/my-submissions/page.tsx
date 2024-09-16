import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@repo/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@repo/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@repo/ui/select";
import { Input } from "@repo/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@repo/ui/pagination";
import { Clock, CheckCircle, XCircle } from 'lucide-react';

const SubmissionHistory = () => {
  const submissionData = [
    { problemName: "Two Sum", status: "Accepted", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "14ms", memory: "12md" },
    { problemName: "Two Sum", status: "Incorrect", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
    { problemName: "Two Sum", status: "Incorrect", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
    { problemName: "Two Sum", status: "Accepted", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "320ms", memory: "22mb" },
    { problemName: "Two Sum", status: "Error", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
    { problemName: "Two Sum", status: "Incorrect", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
    { problemName: "Two Sum", status: "Incorrect", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
    { problemName: "Two Sum", status: "Accepted", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "320ms", memory: "22mb" },
    { problemName: "Two Sum", status: "Error", submittedAt: "21 August, 2024 10:22 AM", language: "cpp", runtime: "N/A", memory: "N/A" },
  ];

  return (
    <div className="flex flex-col w-full max-w-6xl mx-auto py-8 px-4 bg-gray-950 text-white">
      <h1 className="text-2xl font-bold">All Submissions</h1>
      <p className="text-sm text-gray-400 mb-6">
      A Timeline of Your Submissions
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex flex-row items-center"><Clock className="h-4 w-4 text-muted-foreground mr-2" />Total Submissions</CardTitle>
            
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">400</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-green-500 flex flex-row items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Accepted</CardTitle>
            
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50</div>
          </CardContent>
        </Card>
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex flex-row items-center text-red-500"><XCircle className="h-4 w-4 text-red-500 mr-2" />Incorrect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
          </CardContent>
        </Card>
      </div>

      <div className="flex space-x-4 mb-6">
        <Select>
          <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="cpp">C++</SelectItem>
            <SelectItem value="python">Python</SelectItem>
            <SelectItem value="java">Java</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] bg-gray-900 border-gray-800">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="incorrect">Incorrect</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
        <Input type="search" placeholder="Search..." className="flex-grow bg-gray-900 border-gray-800" />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="border-b bg-[#1e293b] border-gray-800">
            <TableHead className="text-gray-400">Problem Name</TableHead>
            <TableHead className="text-gray-400">Status</TableHead>
            <TableHead className="text-gray-400">Language</TableHead>
            <TableHead className="text-gray-400">Runtime</TableHead>
            <TableHead className="text-gray-400">Memory</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissionData.map((submission, index) => (
            <TableRow key={index} className="border-b border-gray-800">
              <TableCell className="font-medium">{submission.problemName}</TableCell>
              <TableCell className={`${
                submission.status === 'Accepted' ? 'text-green-500' :
                submission.status === 'Incorrect' ? 'text-red-500' :
                'text-red-500'
              }`}>
                {submission.status}
                <span className="text-gray-500 text-xs ml-2">Submitted at {submission.submittedAt}</span>
              </TableCell>
              <TableCell>{submission.language}</TableCell>
              <TableCell>{submission.runtime}</TableCell>
              <TableCell>{submission.memory}</TableCell>
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

export default SubmissionHistory;