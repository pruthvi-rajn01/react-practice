import { useState } from 'react'
import './App.css'
import InputSearch from './components/InputSearch'
import { TodoMain } from './components/TodoApp/TodoMain'
import DebouncSearch from './components/DebouncSearch'
import AutoComplete from './components/AutoComplete'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AutoComplete/>
    </>
  )
}

export default App
