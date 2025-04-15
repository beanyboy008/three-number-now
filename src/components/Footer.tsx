
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Spent. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-500 hover:text-spent-700">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" className="text-gray-500 hover:text-spent-700">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
