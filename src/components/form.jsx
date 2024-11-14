import React,{useState} from "react";

function From(){

    const [name,setName] = useState("Guest");
    const [quantity,setQuantity] = useState(2);
    const [select,setSelect] = useState("");
    const [shipping,setShipping] = useState("");

    function handleQuantity(e){
        setQuantity(e.target.value);
    }
     
    function handleSelect(e){
        setSelect(e.target.value);
    }
    function handleMe(){
        setName("pity trapper");
    }

    function handleShipping(e){
        setShipping(e.tartge.value);
    }

    return(
        <div>
            <h3>value:{name}</h3>
            <button onClick={handleMe}></button>
            <input type="text" value={quantity} onChange={handleQuantity} />
            <h2>value of quantity:{quantity}</h2>
            <select name="" id="" value={select} onChange={handleSelect}>
                <option value="tea"></option>
                <option value="coffe"></option>
            </select>
            <h3>Selected Value:{select}</h3>

            <input type="radio" value="trappish" 
            checked={shipping==="trappish"} 
            onChange={handleShipping}/>

            <input type="radio" value="loud Sound" 
            checked={shipping === "loudSound"}
            onClick={handleShipping}/>


        </div>
    )
}
export default From