import { useState, createContext, useEffect } from 'react'
 
import './App.css'
import FetchCompo from './Components/FetchCompo'


  export const iTunesContext = createContext();

function App() {


  const [searchTerm, setSearchTerm] = useState();
  const [fData, setFData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


// Дома часть,  зто дома часть
    
  const [дома, setДома] = useState([]);


useEffect(() => {

   async function fetchДома() {

    const controller = new AbortController();
  const signal = controller.signal;

    setLoading(true);
     setError(null);
    


    try {
 

      const response = await fetch (`https://itunes.apple.com/search?term=pop&entity=album&limit=20`,{signal});

      if(!response.ok){
        throw new Error("Response was not ok")
      }
      const data = await response.json();
 
      if(!signal.aborted){
        setДома(data.results);
         console.log(data)
      }
  

      
    } catch (error) {
      if (error.name === "AbortError"){
        console.log("Fetch aborted");
      }else{
        setError(error)
        if(!signal.aborted){
          setError(error.message);
        }
      }
    }

    finally{
      if (!signal.aborted){
        setLoading(false);
      }
    }

return () => { 
    controller.abort();
  };

  }

  fetchДома();
  
}, []);



  


//Fetch part of the input part

  async function fetchD(url, signal) {

    setLoading(true);
     setError(null);
    


    try {
 

      const response = await fetch (`https://itunes.apple.com/search?term=${url}&entity=song&limit=20`,{signal});

      if(!response.ok){
        throw new Error("Response was not ok")
      }
      const data = await response.json();
 
      if(!signal.aborted){

        
        setFData(data.results);
         console.log(data)
        
      }
  

      
    } catch (error) {
      if (error.name === "AbortError"){
        console.log("Fetch aborted");
      }else{
        setError(error)
        if(!signal.aborted){
          setError(error.message);
        }
      }
    }

    finally{
      if (!signal.aborted){
        setLoading(false);
      }
    }


  }


useEffect(() => {

  const controller = new AbortController();
  const signal = controller.signal;
   const delayDebounce = setTimeout(()=>{

        if(searchTerm){
            fetchD(searchTerm, signal);   
                     
        }


    }, 500);
 
 return () => {
    clearTimeout(delayDebounce);  
    controller.abort();
  };
     

}, [searchTerm]);

// To see when the input fetch is made
useEffect(() => {
  console.log(fData); 
  console.log(fData.length);
  console.log(typeof(fData));
}, [fData]);

// To see when the home fetch is made
useEffect(() => {
  console.log(дома); 
  // console.log(fData.length);
  // console.log(typeof(fData));
}, [дома]);

  return (
    <>
     <iTunesContext.Provider value={{setSearchTerm, fData, дома, error, loading}}>
      <FetchCompo/>
     </iTunesContext.Provider>
      
    </>
    
  )
}

export default App
