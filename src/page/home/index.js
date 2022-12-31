import React, { useState, useEffect } from "react";
import Card from "../../component/card";

const Home = () => {
  const [movie, setMovie] = useState();

  const fetchData = () => {
    return fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/db"
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movie);

  //   const movie = [
  //     {
  //       title: "spiderman:Far from home",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/spiderman.webp",
  //     },
  //     {
  //       title: "Avatar:Way of water",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/avatar.jp",
  //     },
  //     {
  //       title: "Buried",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/buried.jpg",
  //     },
  //     {
  //       title: "Deadpool",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/deadpool.webp",
  //     },
  //     {
  //       title: "Mad max:Fury Road",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/madmax.webp",
  //     },
  //     {
  //       title: "Mission:Impossible",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/mission.jpg",
  //     },
  //     {
  //       title: "Jhon Wick",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/jhon.jp",
  //     },
  //     {
  //       title: "Dune",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/dune.jpeg",
  //     },
  //     {
  //       title: "Venom:Let there be carnage",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/venom.jpg",
  //     },
  //     {
  //       title: "Pulp Fiction",
  //       rating: "8.8",
  //       genre: "Thriller",
  //       time: "2hr 50min",
  //       image: "/images/pulp.png",
  //     },
  //   ];

  return (
    <>
      {movie?.movies?.map((data, i) => (
        <Card
          name={data?.Title}
          //   rating={data.rating}
          //   genre={data.genre}
          time={data?.Runtime}
          image={data?.Poster}
        />
      ))}
    </>
  );
};

export default Home;
