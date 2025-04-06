// src/components/TopNews.js
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const TopNews = () => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const fetchTopNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news");
        const articles = response.data.slice(0, 5);
        setTopNews(articles);
      } catch (error) {
        console.error("Error fetching top news:", error.message);
      }
    };

    fetchTopNews();
  }, []);

  return (
    <div className="container mt-5 top-news-slide">
      <h2 className="text-center mb-4 text-3xl font-bold">
        <span role="img" aria-label="fire">🔥</span> Top News Daily
      </h2>
      {topNews.length > 0 ? (
        <Carousel>
          {topNews.map((news, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 rounded shadow"
                src={news.urlToImage || "https://via.placeholder.com/600x300?text=No+Image"}
                alt={news.title}
              />
              <Carousel.Caption>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">Loading top news...</p>
      )}
    </div>
  );
};

export default TopNews;
