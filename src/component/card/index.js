import React from "react";
import "./index.css";
const Card = ({ name, rating, genre, time, image }) => {
  const handleClick = () => {
    alert(`${name} clicked`);
  };
  return (
    <>
      <div onClick={handleClick} className="card-view">
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
          }}
          className="card-header"
        >
          <div className="card-header-icon">
            <a href="#">
              <i className="material-icons header-icon">
                {/* <StarBorderIcon /> */}1
              </i>
            </a>
          </div>
        </div>

        <div className="card-movie-content">
          <div className="card-movie-content-head">
            <a href="#">
              <h3 className="card-movie-title">{name}</h3>
            </a>
            <div className="ratings">
              <span>{rating}</span>/10
            </div>
          </div>
          <div className="card-movie-info">
            <div className="movie-running-time">
              <label>Genre</label>
              <span>{genre}</span>
            </div>
            <div className="movie-running-time">
              <label>Running time</label>
              <span>{time}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
