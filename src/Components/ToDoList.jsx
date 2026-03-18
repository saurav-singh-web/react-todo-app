import { useState } from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, addTask, deleteTask, toggleComplete, editTask }) => {
    
    const [text, setText] = useState('')
    const [priority, setPriority] = useState('medium')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        addTask(text, priority)
        setText('')
        setPriority('medium')
    }

    return (
        <div className="ListContainer">
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='Add a task' 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button type='submit' disabled={!text.trim()}>Add Task</button>
            </form>
            <ul>
                {tasks.map(t => (
                    <ToDoItem 
                    key={t.id}
                    task={t}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                    editTask={editTask}
                    />
                ))}
            </ul>
        </div>
    )
}
export default ToDoList