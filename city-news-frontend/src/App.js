// src/App.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import TopNews from "./components/TopNews";
import NewsFeed from "./components/NewsFeed";
import TrendingTweets from "./components/TrendingTweets";
import TrendingMedia from "./components/TrendingMedia";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/news?country=in&category=general")
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <div className="pt-5" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <section id="top-news">
        <TopNews />
      </section>

      <section id="feed">
        <NewsFeed news={filteredNews} loading={loading} />
      </section>

      <section id="trending">
        <TrendingTweets />
      </section>

      <section id="media">
        <TrendingMedia />
      </section>

      <Footer />
    </div>
  );
};

export default App;
