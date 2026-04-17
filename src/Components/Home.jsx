

import { useContext, useEffect, useState, useRef } from "react";
import { iTunesContext } from "../App";



 




export default function Home (){

const {setSearchTerm, fData, дома}=useContext(iTunesContext);



          return(
<>


<section className="galleryPart"> 

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
            </section>

             
</>
          )
}