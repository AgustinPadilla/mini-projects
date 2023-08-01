import { useEffect, useState } from 'react'
import './App.css'

const ENDPOINT_CAT_FACT = 'https://catfact.ninja/fact'
const ENDPOINT_CAT_IMAGE = (text) => `https://cataas.com/cat/says/${text}?json=true`
const ENDPOINT_IMAGE_URL = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()
  useEffect(() => {
    fetch(ENDPOINT_CAT_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(ENDPOINT_CAT_IMAGE(threeFirstWords))
      .then(res => res.json())
      .then(data => setImageURL(data.url))
  }, [fact])

  return (
    <main>
      <h1>Cat's Facts</h1>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={ENDPOINT_IMAGE_URL + imageURL} />}
    </main>
  )
}

export default App
