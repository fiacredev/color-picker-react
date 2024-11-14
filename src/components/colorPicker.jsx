import React, { useState } from 'react';

function ColorPicker(){
    
    const [color,setColor] = useState("green");

    function handleColor(event){
     setColor(event.target.value);  
    } 

    return(
        <div style={{backgroundColor:color}}>
        <h2>Color picked is:{color}</h2>
        <input type="color" value={color} onChange={handleColor} />
        </div>
    )
}
export default ColorPicker;