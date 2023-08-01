import resultMovies from '../mock/API_response.json'
import noResponseMovies from '../mock/API_no_response.json'
import { useState } from 'react'
const API_URL = 'https://www.omdbapi.com/?apikey=61e01061&s='

export function useMovies (search) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  const getMovies = (search) => {
    if (search) {
      setResponseMovies(resultMovies)
    } else {
      setResponseMovies(noResponseMovies)
    }
  }

  return { movies: mappedMovies, getMovies }
}
