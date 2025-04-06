import React, { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/news");
        setNewsList(res.data);
      } catch (err) {
        console.error("Error fetching news feed:", err.message);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
<h2 className="text-2xl font-bold mb-4 text-center">
  <span role="img" aria-label="loudspeaker">📣</span> All City News Feed
</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {newsList.map((news, index) => (
          <div key={index} className="border rounded-lg shadow p-4 hover:shadow-lg transition">
            <img
              src={news.urlToImage || "https://via.placeholder.com/400x200?text=No+Image"}
              alt={news.title}
              className="w-full h-48 object-cover rounded mb-2"
            />
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-sm">{news.description}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline text-sm">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
