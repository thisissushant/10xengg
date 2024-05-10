/* eslint-disable react/prop-types */
import { useState } from "react";
import Pagination from "./Pagination";

const MovieList = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [expandedMovie, setExpandedMovie] = useState(null);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const handleMovieClick = (movie) => {
    setExpandedMovie(movie === expandedMovie ? null : movie);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((movie, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg shadow-lg shadow-yellow-500/50 cursor-pointer"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={
                movie.moviemainphotos[0] || "https://via.placeholder.com/150"
              }
              alt={movie.movietitle}
              className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 line-clamp-1 text-yellow-600">
                {movie.movietitle}
              </h2>
              {expandedMovie === movie && (
                <>
                  <p className="line-clamp-2">
                    Languages: {movie.movielanguages.join(", ")}
                  </p>
                  <p className="line-clamp-2">
                    Countries: {movie.moviecountries.join(", ")}
                  </p>
                  <p className="line-clamp-2">
                    Genres: {movie.moviegenres.join(", ")}
                  </p>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-4">
                    Borrow Movie
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={movies.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default MovieList;
