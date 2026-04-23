import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos({ setInput, setIsEdit, setEditId }) {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleEdit = (todo) => {
    setInput(todo.text)
    setIsEdit(true)
    setEditId(todo.id)
  }

  return (
    <>
      <div className="text-white text-xl mt-4">Todos</div>

      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            <div className="text-white">{todo.text}</div>

            <div className="flex gap-2">
              {/* EDIT */}
              <button
                onClick={() => handleEdit(todo)}
                className="text-white bg-yellow-500 hover:bg-yellow-600 py-1 px-3 rounded"
              >
                Edit
              </button>

              {/* DELETE */}
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 hover:bg-red-600 py-1 px-3 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos