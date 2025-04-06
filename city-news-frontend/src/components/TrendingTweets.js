// src/components/TrendingTweets.js
import React from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tweets = [
    {
      id: 1,
      user: "@kashmirlens",
      text: "Snowfall in #Gulmarg looks magical today! ❄️🌨️",
      image: "https://i.pravatar.cc/100?img=32",
      link: "https://twitter.com/kashmirlens"
    },
    {
      id: 2,
      user: "@jkupdates",
      text: "Traffic jam on #NH44 due to fresh snowfall. Drive safe! 🚗",
      image: "https://i.pravatar.cc/100?img=12",
      link: "https://twitter.com/jkupdates"
    },
    {
      id: 3,
      user: "@srinagarlive",
      text: "New cultural event coming up this weekend in #Srinagar. 🎉",
      image: "https://i.pravatar.cc/100?img=24",
      link: "https://twitter.com/srinagarlive"
    },
    {
      id: 4,
      user: "@jammuvoice",
      text: "Power cuts expected in #Jammu today due to maintenance work. 🔌",
      image: "https://i.pravatar.cc/100?img=44",
      link: "https://twitter.com/jammuvoice"
    },
    {
      id: 5,
      user: "@weatherJandK",
      text: "Heavy snow predicted in the upper reaches tonight. ❄️",
      image: "https://i.pravatar.cc/100?img=52",
      link: "https://twitter.com/weatherJandK"
    },
  ];
  

const settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    },
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 }
    }
  ]
};

const TrendingTweets = () => {
  return (
    <div className="container mt-5" id="trending">
      <h2 className="text-center mb-4 fw-bold">
        <span role="img" aria-label="trending">📈</span> Trending on X (Twitter)
      </h2>
      <Slider {...settings}>
        {tweets.map((tweet) => (
          <div key={tweet.id} className="px-3">
            <div className="card h-100 shadow-sm p-3">
              <div className="d-flex align-items-center mb-2">
                <img
                  src={tweet.image}
                  alt="avatar"
                  className="rounded-circle me-3"
                  width={50}
                  height={50}
                />
                <a
                  href={tweet.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary fw-semibold"
                >
                  {tweet.user}
                </a>
              </div>
              <p className="mb-0">{tweet.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TrendingTweets;
