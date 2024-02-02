import { useState,useEffect, useContext} from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock(){

    
const [date, setDate] = useState(new Date()); //use state perche lo stato cambia di continuo e ci deve essere rendering

    const language= useContext(LanguageContext)
    useEffect(() => {
    const intervalID = setInterval(() => { //ogni secondo, quindi 1000
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID); // per farlo fermare se no conttinua all'infinito
    }; 
  });
  return(
<div>
  <h2>{language==="eng"?"current time:":"ora attuale"}</h2>

{date.toLocaleTimeString()}
      </div>)}