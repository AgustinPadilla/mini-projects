import { Movies } from './components/Movies'
import { useEffect, useRef, useState } from 'react'
import { useMovies } from './hooks/useMovies'
import './App.css'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacía')
      return
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula solo con numeros')
      return
    }
    if (search.length < 3) {
      setError('La pelicula debe tener almenos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }
  const handleSort = () => {
    setSort(!sort)
    console.log(sort)
  }

  return (
    <div className='page'>
      <header>
        <form onSubmit={handleSubmit}>
          <input value={search} onChange={handleChange} type='text' placeholder='Godfather, Taxi driver, Harry Potter... ' />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {'A -> Z'}
            <input type='checkbox' onChange={handleSort} />
          </div>
          <button type='submit'>Buscar</button>
        </form>
        {error
          ? <p className='error'>{error}</p>
          : null}
      </header>

      <main>
        {
          loading ? <span>Cargando...</span> : <Movies movies={movies} />
        }

      </main>
    </div>
  )
}

export default App
