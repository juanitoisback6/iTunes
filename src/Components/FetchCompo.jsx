
import { useContext, useEffect, useState } from "react";
import { iTunesContext } from "../App";



export default function FetchCompo () {


          const {setSearchTerm, fData, дома, error, loading }=useContext(iTunesContext);

const [datosA, setDatosA] = useState([]);

function stopSongs (e){

const otherAudio = document.querySelectorAll("audio");

otherAudio.forEach((audio)=>{
if (audio !== e.target){
          audio.pause();
}
})

}


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

{loading &&  <section className="loader">Loading</section>}
         
            

            {error && <section className="error">Error getting the data </section>}

          <section className="galleryPart">


{fData.length === 0 && дома.map((datos, key)=>{
                    return(
                               <article key={datos.collectionId}>
                                        <h2>{datos.collectionCensoredName}</h2>
           <a href={datos.collectionViewUrl} target="_blank" rel="noopener noreferrer"> <img src={datos.artworkUrl100} alt="Album img" />   </a>

           <a href={datos.collectionViewUrl} target="_blank" rel="noopener noreferrer"> <h2 > {datos.artistName} </h2> </a>

           <h3>Genre: {datos.primaryGenreName}</h3>
                    </article>    

                    )
                  
            })} 





            {fData.length > 0 && fData.map((datos, key)=>{
                    return(
                               <article key={datos.trackId}>

                               
                           
          <h2 > {datos.trackName} </h2>
          <h4 > {datos.artistName} </h4>
           <a href={datos.trackViewUrl} target="_blank" rel="noopener noreferrer"><img src={datos.artworkUrl100} alt="img bad bunny" /> </a>
           <audio onPlay={(e)=>{stopSongs(e)}} controls>
          <source  src={datos.previewUrl} type="audio/mpeg" />
  Tu navegador no soporta el elemento de audio.
          </audio>
                    </article>    

                    )
                  
            })} 
          </section> 
</>
)

}
