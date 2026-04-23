import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [input, setInput] = useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [editId, setEditId] = useState(null)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600">
      <div className="w-full max-w-md">
        
        <h1 className="text-white text-xl font-bold mb-4">
          Learn Redux Toolkit
        </h1>

        <AddTodo
          input={input}
          setInput={setInput}
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          editId={editId}
          setEditId={setEditId}
        />

        <Todos
          setInput={setInput}
          setIsEdit={setIsEdit}
          setEditId={setEditId}
        />

      </div>
    </div>
  )
}

export default App