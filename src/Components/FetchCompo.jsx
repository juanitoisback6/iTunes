
import { useContext} from "react";
import { iTunesContext } from "../App";
import TrackCard from "./TrackCard";


export default function FetchCompo () {


const { fData }=useContext(iTunesContext);

  

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
          <section className="galleryPart">
  
        {/*Search display part*/}

            {fData.length > 0 && fData.map((datos, key)=>{
                    return(
 

                                 
 <TrackCard key={datos.trackId} datos={datos} stopSongs={stopSongs}/>
              )
                  
            })} 
          </section> 
</>
)

}
