// src/components/SearchBar.js
import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center my-6">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Search news by topic, city, or keyword..."
        className="w-full max-w-xl p-3 rounded-xl border border-gray-300 shadow focus:outline-none focus:ring focus:border-blue-500"
      />
    </div>
  );
};

export default SearchBar;
