
import './App.css';
import { useState } from 'react';
import { Task } from "./Task.js";
/*function App() {
  const [showText, SetShowText] =useState(true);

  return (
    <div className="App">
      <button onClick={() => {
        SetShowText(!showText);
      }}> show/ hide</button>
      
     {showText && <h1>Hi my name is erick</h1> }
     
    </div> );
  
}*/

//using Usestate hook to hide or dispaly test

/*function App() {
  const [textColor, setTextColor] =useState("black");

  return (
    <div className="App">
      <button onClick={() => {
       
       setTextColor(textColor === "black" ? "red" : "black");
        
      }}> show/ hide</button>
      
      <h1 style ={{color: textColor}}>Hi my name is erick</h1> 
     
    </div> );
  
}*/

/*function App() {
  const [count, SetCount] = useState(0);

  return (
    <div className="App">
      <button onClick={() => {
        SetCount(count + 1);
        
      }}>Increase</button>

      <button onClick={() => {
        SetCount(count - 1);
        
      }}>Decrease</button>

      <button onClick={() => {
        SetCount(0);
        
      }}>Set to zero</button>
      
      {count}
      
       </div>
      
  ) // using useState to increment and reduce a number 
}*/

function App (){

  const [todoList, setTodoList]= useState([])
  const [ newTask, setNewTask] = useState("")

  const handleChange = (event) =>{
    setNewTask(event.target.value)

  }

  const addTask =() =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1 ,
      taskName: newTask ,
      completed: false ,
    };
    
    setTodoList([...todoList, task])

  }

  const deleteTask = (id) =>{

    setTodoList(todoList.filter((task) => task.id !==id))

  }

  const completeTask = (id) =>{

    setTodoList(todoList.map((task) => task.id === id? {...task, completed:true} : task))

  }

  return(
    <div className='App'>
      <div className='addTask'>
        <input className="input" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className='list'>
        {todoList.map((task) =>{
          return (
          <Task 
            taskName={task.taskName} 
            id={task.id} 
            completed={task.completed}
            deleteTask ={deleteTask}
            completeTask ={completeTask}
            
          /> 
          );
          
        })}
      </div>
      
    </div>
   
  )
}; 

export default App;