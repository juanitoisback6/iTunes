import appleLogo from "../assets/mac-os.png";
import { useContext, useEffect, useState, useRef } from "react";
import { iTunesContext } from "../App";
import { Link, useNavigate } from "react-router-dom";







export default function SearchPart(){

 

const {setSearchTerm, fData, error, loading }=useContext(iTunesContext);

const navigate = useNavigate();

return(

                    <>
                    <section className="titleZone">
                    <Link className="mainTitleLink" to={"/"}>  <h1 id="mainTitle">iTunes</h1></Link>
                    <img id="titleIcon" src={appleLogo} alt="Apple Icon" />
                    </section>
                              
                    
                    <section className="searchPart">
                    <input id="inputPart" type="text" 
                             onChange={(e)=>{
                              if(e.target.value.trim()===""){
                                        console.log("Empty space");
                                        navigate("/")
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
                                                        
                             </div>
                    
                   
                    </>
          )
}
