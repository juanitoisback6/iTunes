
import { useContext, useEffect, useState, useRef } from "react";
import { iTunesContext } from "../App";
import appleLogo from "../assets/mac-os.png";



export default function FetchCompo () {


const {setSearchTerm, fData, дома, error, loading }=useContext(iTunesContext);

const [datosA, setDatosA] = useState([]);

const [playing, setPlaying] = useState(false);

const [hoverSong, setHoverSong] = useState(null);


function hoverSongIn(id){
         
setHoverSong(id)
        
}
function hoverSongOut(){
        
setHoverSong(null)
     
}

function stopSongs (e){

const otherAudio = document.querySelectorAll("audio");

otherAudio.forEach((audio)=>{
if (audio !== e.target){
          audio.pause();
}
})

}

const audioRef= useRef(null);

function toggleAudio (){
    if(playing){
        audioRef.current.pause();
setPlaying(false);
    }else{
        audioRef.current.play();
setPlaying(true);
    }
}


return(
<>
<section className="titleZone">
<h1 id="mainTitle">iTunes</h1>
<img id="titleIcon" src={appleLogo} alt="Apple Icon" />
</section>
          

<section className="searchPart">
<input id="inputPart" type="text" 
         onChange={(e)=>{
          if(e.target.value.trim()===""){
                    console.log("mpty space")
          }else{
setSearchTerm(e.target.value)
          }
          
          }} placeholder="Search here..." /> 
</section>
         

{loading &&  <section className="loader">Loading</section>}
         
            

            {error && <section className="error">Error getting the data </section>}

          <section className="galleryPart">
 

                                {/*Home display part*/}

{fData.length === 0 && дома.map((datos, key)=>{
                    return(
 
                       
                               <article className="domaPart" key={datos.collectionId}>
                                    <section className="sectionImage">
                                    <a href={datos.collectionViewUrl} target="_blank" rel="noopener noreferrer"> <img className="imgAlbum" 
                                    src={datos.artworkUrl100.replace('100x100bb', '600x600bb')} alt="Album img" />   </a>     
                                        
                                        </section>    
          

           <a href={datos.collectionViewUrl} target="_blank" rel="noopener noreferrer"> <h2 className="albumSongName">{datos.collectionCensoredName}</h2> </a> 

           <a href={datos.collectionViewUrl} target="_blank" rel="noopener noreferrer"> <p className="artistPart"> {datos.artistName} </p> </a>
 
                    </article>    
 
                                 
                    )
                  
            })} 



                       {/*Search display part*/}

            {fData.length > 0 && fData.map((datos, key)=>{
                    return(
                               <article className="searchPartFeed" key={datos.trackId}>

 <section 
 className="image-container" 
 onMouseEnter={()=>{hoverSongIn(datos.trackId)}} 
 onMouseLeave={hoverSongOut}> 
<img className="imgAlbum" 
src={datos.artworkUrl100.replace('100x100bb', '600x600bb')} alt="img of the album" />            
 
        <button onClick={toggleAudio} className= {`glass-button ${hoverSong === datos.trackId ? "" : "hidden"}`}  >

                {playing?<svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg> :  <svg viewBox="0 0 24 24" width="48" height="48"fill="currentColor">
                <path d="M8 5v14l11-7z" />
                </svg> }     
        </button> 
                  <audio 
                  onPlay={(e)=>{stopSongs(e)}}
                  ref={audioRef} >
          <source  src={datos.previewUrl} 
          type="audio/mpeg" />
  Tu navegador no soporta el elemento de audio.
          </audio>
</section>
<a href={datos.trackViewUrl} target="_blank" className="anchorNameAlbum" rel="noopener noreferrer"> 
          <h2 className="albumSongName" key={key}> {datos.trackName} </h2>
          </a>

          <p className="artistPart"> {datos.artistName} </p>
           
           
                    </article>    

                    )
                  
            })} 
          </section> 
</>
)

}
