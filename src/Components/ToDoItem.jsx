import { useState } from 'react'

const ToDoItem = ({ task, deleteTask, toggleComplete, editTask }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newText, setNewText] = useState(task.text || '')

    const handleEdit = () => {
    editTask(task.id, newText.trim())
    setIsEditing(false)
    }

    return (
        <li>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              opacity: task.completed ? 0.6 : 1
            }}
          >
            {task.text} ({task.priority})
          </span>

          <button onClick={() => toggleComplete(task.id)}>
            ✔
          </button>

          <button onClick={() => setIsEditing(true)}>
            Edit
          </button>

          <button onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </>
      )}
    </li>
  )
}

export default ToDoItem