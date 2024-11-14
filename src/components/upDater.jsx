
import React,{useState} from "react";
 

function Updater(){

    const [moto,setMoto] = useState({name:"bmw",year:1023,country:"rwanda"});
     
   function handleName(event){
    setMoto(moto=>({...moto,name:event.tartget.value}));
   }

   function handleYear(event){
    setMoto(moto=>({...moto,year:event.tartget.value}));
   }

   function handleCountry(event){
    setMoto({...moto,country:event.tartget.value});
   }


     return(
        <>
        <h4>the moto is {moto.name} and the year made in is {moto.year} in this country {moto.country}</h4>
        <input type="text" value={moto.name} onChange={handleName} />
        <input type="number" value={moto.year} onChange={handleYear} />
        <input type="text" value={moto.country} onChange={handleCountry} />
        </>
     )
}
export default Updater