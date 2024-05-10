/* eslint-disable react/prop-types */
import {} from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="bg-black text-white rounded-lg shadow-lg shadow-red-500/50 "
        >
          <img
            src={movie.moviemainphotos[0] || "https://via.placeholder.com/150"}
            alt={movie.movietitle}
            className="w-full h-48 object-cover rounded-lg "
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2 line-clamp-1 text-red-600">
              {movie.movietitle}
            </h2>
            <p className="line-clamp-2">
              Languages: {movie.movielanguages.join(", ")}
            </p>
            <p className="line-clamp-2">
              Countries: {movie.moviecountries.join(", ")}
            </p>
            <p className="line-clamp-2">
              Genres: {movie.moviegenres.join(", ")}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
