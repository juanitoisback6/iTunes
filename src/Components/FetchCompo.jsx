
import { useContext, useEffect, useState } from "react";
import { iTunesContext } from "../App";



export default function FetchCompo () {


          const {setSearchTerm, fData }=useContext(iTunesContext);

const [datosA, setDatosA] = useState([]);




return(
<>

          <h1>iTunes</h1>

         <input type="text" 
         onChange={(e)=>{
          if(e.target.value.trim()===""){
                    console.log("mpty space")
          }else{
setSearchTerm(e.target.value)
          }
          
          }} placeholder="Search here..." /> 

          <section className="galleryPart">
            {fData.length > 0 && fData.map((datos, key)=>{
                  <h2 key={key}>{datos.trackCensoredName}</h2> 
                  
                     
            })} 
          </section> 
</>
)

}