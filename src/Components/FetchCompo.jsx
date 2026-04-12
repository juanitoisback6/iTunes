
import { useContext, useEffect, useState, useRef } from "react";
import { iTunesContext } from "../App";
import appleLogo from "../assets/mac-os.png";
import TrackCard from "./TrackCard";


export default function FetchCompo () {


const {setSearchTerm, fData, дома, error, loading }=useContext(iTunesContext);
 ; 
  

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
         <div className="homeTitle">

                {fData.length === 0 ? 
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
 :
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg> }
                                    
         </div>

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

           <a href={datos.artistViewUrl} target="_blank" rel="noopener noreferrer"> <p className="artistPart"> {datos.artistName} </p> </a>
 
                    </article>    
 
                                 
                    )
                  
            })} 



                       {/*Search display part*/}

            {fData.length > 0 && fData.map((datos, key)=>{
                    return(
<>

                     
                                 
 <TrackCard key={datos.trackId} datos={datos} stopSongs={stopSongs}/>
              </>      )
                  
            })} 
          </section> 
</>
)

}
