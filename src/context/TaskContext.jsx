/* eslint-disable react/prop-types */
import {createContext, useState, useEffect} from 'react'

import { v4 as generateUUID} from 'uuid';

export const TaskContext = createContext();

// criando provider

export const TaskContextProvider = ({children}) =>{

    const [tasks, setTasks] = useState([])
    const [taskFinished, setTaskFinished] = useState(0)
    const [taskNoFinished, setTaskNoFinished] = useState(0)

    useEffect(() => {
        function uploadTaskStatus(){
          const copy = [...tasks]
          const newTask = copy.filter((task) => task.finished)
          const taskDone = newTask.length
          const taskUnDone = tasks.length - newTask.length
          setTaskFinished(taskDone)
          setTaskNoFinished(taskUnDone)
        }
        uploadTaskStatus()
      }, [tasks])

    function handleSubmit(e, task, setTask){
        e.preventDefault()
        if(task === "") return;
        const listTask = {
            id: generateUUID(),
            content: task,
            finished: false
        }
        setTasks(prevtasks => [...prevtasks, listTask])
        setTask('')
    }

    function completeTask(itemId){
        const newTasks = [...tasks]
        newTasks.map((task) => task.id === itemId ? task.finished = !task.finished : task)
        setTasks(newTasks)
      }

    function removeTask(itemId){
        const newTasks = [...tasks]
        const filteredTasks = newTasks.filter((task) => task.id !== itemId)
        setTasks(filteredTasks)
    }
  

    return(
        <TaskContext.Provider value={{tasks, setTasks, handleSubmit, completeTask, removeTask, taskFinished, taskNoFinished}}>
            {children}
         </TaskContext.Provider>
    )
}  