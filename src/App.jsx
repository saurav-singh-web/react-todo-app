import './App.css'
import { useState } from 'react'
import Header from './Components/Header'
import ToDoList from './Components/ToDoList'


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (text, priority) => {
    const newTask = {
      id: Date.now(),
      text,
      priority,
      completed: false
    }
    setTasks(prev => [...prev, newTask])
  }

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }
  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }
  const editTask = (id, newText) => {
    setTasks(prev =>
      prev.map(t =>
        t.id === id ? { ...t, text: newText } : t
      )
    )
  }

  return (
    <>
    <Header />
    <ToDoList tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </>
  )
}

export default App
