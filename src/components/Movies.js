import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <h3>Title: {movie.title}</h3>
              <h3>Time: {movie.time}</h3>
              <h3>Genres:</h3>
              {movie.genres.map(genre => <ul>{genre}</ul>)}
            </div>
          )
        })}    </div>
  );
};

export default Movies;
