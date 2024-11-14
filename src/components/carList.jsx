
import React,{useState} from "react";

function ListCar(){

 const [cars,setCars] = useState([]);
 const [year,setYear] = useState(new Date().getFullYear());
 const [engine,setEngine] = useState("");

   function addToList(){

    const newCar = {year:year,
                  engine:engine,}

    setCars(cars=>[...cars,newCar]);
    setYear(new Date().getFullYear());
    setEngine("");

   }
   

   function handleYear(event){
    setYear(event.target.value);
   }

   function handleEngine(event){
    setEngine(event.target.value);
   }
   
 return(
    <div>
        <ul>
            
            {cars.map((car,index)=>
            <li key={index}>
                year is:{car.year} engine is:{car.engine}
            </li>)}
            
            </ul>
        <input type="number" value={year} onChange={handleYear}/>
        <input type="text" value={engine} onChange={handleEngine}/>
        <button onClick={addToList}>Add To List</button>
    </div>
 )

}
export default ListCar;