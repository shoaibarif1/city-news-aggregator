// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-8 mt-16 shadow-inner transition-colors duration-300">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-2xl font-bold mb-2">
          <span role="img" aria-label="newspaper">📰</span>{" "}
          Latest News from Your City
        </h4>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 max-w-xl mx-auto">
          Bringing real-time headlines, viral videos, and top trends from Srinagar
          and beyond.
        </p>

        <div className="flex justify-center space-x-4 my-4">
          <a
            href="https://shoaibarif.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Portfolio
          </a>
          <a
            href="https://github.com/shoaibarif1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/shoaib-arif-9b253921a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>

        <hr className="border-gray-300 dark:border-gray-700 my-4 w-1/2 mx-auto" />

        <p className="text-xs text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} <strong>City Buzz</strong> | Made with{" "}
          <span role="img" aria-label="love">❤️</span> by{" "}
          <a
            href="https://shoaibarif.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 dark:hover:text-blue-400"
          >
            Shoaib
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
