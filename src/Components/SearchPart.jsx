import appleLogo from "../assets/mac-os.png";
import { useContext, useEffect, useState, useRef } from "react";
import { iTunesContext } from "../App";
import { Link, useNavigate } from "react-router-dom";







export default function SearchPart(){

 

const {setSearchTerm, fData, error, loading, setFData, randomFetchFunction }=useContext(iTunesContext);

const navigate = useNavigate();

return(

                    <>
                    <section className="titleZone">
                    <Link onClick={()=>setFData([])} className="mainTitleLink" to={"/"}>  <h1 id="mainTitle">iTunes</h1></Link>
                    <img id="titleIcon" src={appleLogo} alt="Apple Icon" />
                    </section>
                              
                    
                    <section className="searchPart">
                    <input id="inputPart" type="text" 
                             onChange={(e)=>{
                              if(e.target.value.trim()===""){
                                        console.log("Empty space");
                                        navigate("/");
                                        setFData([]);
                                        
                              }else{
                    setSearchTerm(e.target.value);
                              navigate("/search")
                              }
                              
                              }} placeholder="Search here..." /> 
                    </section>
                             <div className="homeTitle">
                    
                                    {fData.length === 0 ? 
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>
                     :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" /><path d="M21 21l-6 -6" /></svg> }


                    {fData.length === 0 ?                     
                    <svg className="randomIcon" onClick={randomFetchFunction} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M560-160v-80h104L537-367l57-57 126 126v-102h80v240H560Zm-344 0-56-56 504-504H560v-80h240v240h-80v-104L216-160Zm151-377L160-744l56-56 207 207-56 56Z"/></svg>

                    :<svg className="randomIcon" onClick={randomFetchFunction} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-40q-33 0-56.5-23.5T40-120v-720q0-33 23.5-56.5T120-920h720q33 0 56.5 23.5T920-840v720q0 33-23.5 56.5T840-40H120Zm440-120h240v-240h-80v102L594-424l-57 57 127 127H560v80Zm-344 0 504-504v104h80v-240H560v80h104L160-216l56 56Zm151-377 56-56-207-207-56 56 207 207Z"/></svg>}

                    {loading && <section className="loader"> 
                    <div className="innerLoader">
                    <svg id="svgLoading" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M287-167q-47-47-47-113t47-113q47-47 113-47 23 0 42.5 5.5T480-418v-422h240v160H560v400q0 66-47 113t-113 47q-66 0-113-47Z"/></svg> <p> Loading...</p> 
                    </div>
                    </section>}
                             
                   
                                                        
                             </div>
                    
                    {error && <section className="error"> <p>Error getting the data, please try again </p>  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M508.5-291.5Q520-303 520-320t-11.5-28.5Q497-360 480-360t-28.5 11.5Q440-337 440-320t11.5 28.5Q463-280 480-280t28.5-11.5ZM440-440h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg></section>}
                    </>
          )
}
