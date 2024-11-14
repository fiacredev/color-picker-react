
import React,{useState} from "react";

function ToDo(){
  const [tasks,setTasks] = useState(["tocode","to Rap"]);
  const [newTask,setNewTask] = useState("");

  function handleInput(event){
    setNewTask(event.target,value);
  }

  function addToTask(){
    if(newTask.trim() !== ""){
        setTasks(tasks=>[...tasks,newTask]);
        setNewTask("");
    }
  }

  function deleteTask(){
    const updatedTask = tasks.filter((_,i)=> i!==index);
    setTasks(updatedTask);
  }

  return(
    <div>
    <div>
    <input type="text" value={newTask} onChange={handleInput}/><button>Add Task</button>
    </div>
    <ol>{tasks.map((task,index)=>
    <li key={index}>{task}
    <button>delete</button><button>Move Task Up</button></li>)}
    </ol>        
    </div>
  )
}
export default ToDo;