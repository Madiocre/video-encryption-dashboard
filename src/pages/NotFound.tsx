import { Button } from "@/components/ui/button";
import React from "react";

const NotFound: React.FC = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
        <Button className="bg-blue-500 text-white" onClick={() => window.location.href = "/"}>
          Go Home
        </Button>
      </div>
    );
  };

export default NotFound