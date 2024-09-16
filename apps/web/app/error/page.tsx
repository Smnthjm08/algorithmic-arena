"use client";

import React from "react";
import { Button } from "@repo/ui/button";
import { HelpCircle } from "lucide-react"; // Import Lucide icon

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <HelpCircle className="text-gray-400 w-16 h-16 mb-8" /> {/* Icon */}
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found.</h1>
      <p className="text-gray-400 mb-6">
        The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
      </p>
      <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white">
        Explore Platform
      </Button>
    </div>
  );
};

export default NotFoundPage;
