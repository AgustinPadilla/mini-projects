import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App () {
  const randomPosition = () => {
    return Math.floor(Math.random() * (100 - 1) + 1)
  }
  const [enabled, setEnabled] = useState(true)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: randomPosition(), y: randomPosition() })
  const [targetHover, setTargetHover] = useState(false)

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  useEffect(() => {
    setTargetPosition({ x: randomPosition(), y: randomPosition() })
  }, [targetHover])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer' />
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Follow Pointer?</h1>
      <button onClick={() => { setEnabled(!enabled) }}>
        {enabled ? 'Yes' : 'No'}
      </button>
      <div
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
        className='pointer'
      />
      <div
        style={{
          transform: `translate(${targetPosition.x}ch, ${targetPosition.y}vh)`
        }}
        onMouseOver={() => {
          setTargetHover(true)
        }}
        onMouseOut={() => {
          setTargetHover(false)
        }}
        className='target'
      />
    </>
  )
}

export default App
