function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='movie'>
            <h4>{movie.title}</h4>
            <p>{movie.year}</p>
            <img src={movie.poster} alt={movie.Title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovies () {
  return (
    <p>No se encontraron peliculas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMovies />
  )
}
