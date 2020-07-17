export function getFiltredMovies(movies, filter) {
  console.log(movies);
  console.log(filter);
  if (filter === "All Genres")
    return movies;
  return movies.filter(m => m.genre.name === filter)
}