import React, { useState } from 'react'
import { DndContext,KeyboardSensor,PointerSensor,TouchSensor,closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import Column from "./components/column/column.jsx"
import './App.css'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Input from './components/Input/Input.jsx'
import { add } from '@dnd-kit/utilities'

const App = () => { 

  const [tasks, setTasks] = useState([

  {id:1, title:"adds tests to homepage"},
  {id:2, title:"Fix styling in about section"},
  {id:3, title:"Lean how to center a div"}, 

  ]);  
  
  const addTask = title =>{ 
    setTasks(tasks=>[...tasks,{id:tasks.lengt+1,title}])
  }

  const getTaskPos =  id=>tasks.findIndex(task=>task.id===id)
    
   

  const handleDragEnd = event =>{
    const {active ,over} = event

    if(active.id === over.id) return;

    setTasks(tasks=>{

      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id)

 
      return arrayMove(tasks,originalPos, newPos); 

    })
 
  }

  const sensors = useSensors(

    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates,
    }) 

)
 
  return (
    <div className="App">
 
      <h1>My Tasks</h1>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}collisionDetection={closestCorners}>
        <Input onSubmit={addTask}/>
      <Column tasks={tasks}/>
      </DndContext>
     

    </div> 

  )
}

export default App