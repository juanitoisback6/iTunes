import { useState, useRef } from "react";
 
export default function TrackCard({ datos, stopSongs }) {
 
  const [playing, setPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  function toggleAudio() {
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  }

   
  function handleEnded() {
    setPlaying(false);
  }

  return (
    <article className="searchPartFeed">
      <section 
        className="image-container" 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
      > 
        <img className="imgAlbum" src={datos.artworkUrl100.replace('100x100bb', '600x600bb')} alt="album cover" />            
        
        <button 
          onClick={toggleAudio} 
          className={`glass-button ${isHovered ? "" : "hidden"}`}
        >
          {playing ? (
              
             <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          ) : (
            
             <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
          )}     
        </button> 

        <audio 
          ref={audioRef} 
          onPlay={(e) => stopSongs(e)}
          onEnded={handleEnded}  
          onPause={handleEnded}
        >
          <source src={datos.previewUrl} type="audio/mpeg" />
        </audio>
      </section>
 <a className="songName" href={datos.trackViewUrl} target="_blank" rel="noopener noreferrer">

          <h2 className="albumSongName">{datos.trackName}</h2>
 </a>
      
     <a className="artistSearchPart" href={datos.artistViewUrl}
     target="_blank" rel="noopener noreferrer">
          <p className="artistPart">{datos.artistName}</p>
</a> 
    </article>
  );
}
