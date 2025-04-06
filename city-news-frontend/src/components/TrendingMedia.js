import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const trendingMedia = [
  {
    id: 1,
    title: "Animals",
    videoUrl: "https://www.w3schools.com/html/movie.mp4", // Video link for item 1
    type: "Video",
  },
  {
    id: 2,
    title: "Cute Vid",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video link for item 2
    type: "Video",
  },
  {
    id: 3,
    title: "Snowfall this morning",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Video link for item 3
    type: "Video",
  },
];

const TrendingMedia = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 fw-bold">
        <span role="img" aria-label="camera">📸</span> Top Trending Media
      </h2>
      <div className="row">
        {trendingMedia.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card shadow-sm h-100">
              {/* Rendering video for all items */}
              {item.type === "Video" ? (
                <video controls className="card-img-top" style={{ width: "100%" }}>
                  <source src={item.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : null}
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingMedia;
