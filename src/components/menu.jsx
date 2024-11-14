import React, { useState } from "react";

function Menu(){

    const [foods,setFood] = useState(["apple","juice","orange","lemon"]);       

    function addFood(){
        const newFood = document.getElementById("add").value;
        document.getElementById("add").value="";        
        setFood(f=>[...f,newFood])
    }

    function removeFood(    index){
        setFood(foods.filter((_,i) => i !== index));
    }

    return(
        <>
        <ul>{foods.map((food,index)=><li key={index} onClick={removeFood}>
            {food}
        </li>)}</ul>
        <input type="text" id="add"/><button onClick={addFood}>Add Another Prefered Food</button>
        </>
    )
}

export default Menu