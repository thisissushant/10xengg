import { useState } from "react";
import movieData from "./assets/movie.json";
import MovieList from "./components/MovieList";
import FilterBar from "./components/Filter";

const App = () => {
  const [movies] = useState(movieData);
  const [filters, setFilters] = useState({
    language: "",
    country: "",
    genre: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    const { language, country, genre } = filters;
    return (
      (!language || movie.movielanguages.includes(language)) &&
      (!country || movie.moviecountries.includes(country)) &&
      (!genre || movie.moviegenres.includes(genre))
    );
  });

  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 py-8 bg-black">
        <FilterBar
          filters={filters}
          onFilterChange={handleFilterChange}
          movies={movies}
        />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
};

export default App;
