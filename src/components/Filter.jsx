/* eslint-disable react/prop-types */
import {} from "react";

const Filter = ({ filters, onFilterChange, movies }) => {
  const languages = [
    ...new Set(movies.flatMap((movie) => movie.movielanguages)),
  ];

  const genres = [...new Set(movies.flatMap((movie) => movie.moviegenres))];

  return (
    <div>
      <div className=" text-black bg-yellow-500 p-4 flex justify-center rounded-t-lg">
        <h1 className="font-semibold text-2xl">10xEngg Assignment</h1>
      </div>
      <div className="mb-4 text-black bg-yellow-500 p-4 rounded-b-lg">
        <label htmlFor="language" className="mr-2 ">
          Language:
        </label>
        <select
          id="language"
          name="language"
          value={filters.language}
          onChange={onFilterChange}
          className="border border-yellow-700 rounded-md px-2 py-1 bg-yellow-500"
        >
          <option value="">All</option>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>

        <label htmlFor="genre" className="ml-4 mr-2">
          Genre:
        </label>
        <select
          id="genre"
          name="genre"
          value={filters.genre}
          onChange={onFilterChange}
          className="border border-yellow-700 rounded-md px-2 py-1 bg-yellow-500"
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
