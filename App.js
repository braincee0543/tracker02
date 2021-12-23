
import './App.css';
import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



function  App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Dcotors Appointment',
        day: 'Feb 15',
        reminder: true,
    },
    {
        id: 2,
        text: "meeting at school",
        day: 'Feb 5',
        reminder: true,

    },
    {
        id: 3,
        text: "Food Shopping",
        day: 'Feb 6',
        reminder: false,
    },
])

//AddTask
const addTask = (task) => {
  const id = Math.floor(Math.random()
   * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])

}

// Delete Task

const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
}

//To Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task ))

}



  return (
    <div className='container'>

     <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
     {showAddTask && <AddTask onAdd={addTask} />}
    
     {tasks.length > 0 ? 
       <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'No Task Available'}
    </div>
  );
}

export default App;
