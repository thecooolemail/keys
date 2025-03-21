"use client"
import { useState, useEffect, useRef } from "react";
import { Text } from "./Text";
import styles from '../app/root.module.css'

const Typer = () =>  {

  const [displayedText, setDisplayedText] = useState("");
  const [speed, setSpeed] = useState(90);
  const [focus, setFocus] = useState(false);

  const inputRef = useRef(null);
  

  useEffect(() => {
    
    if(focus){
    let i = 0;
    const interval = setInterval(() => {
      if (i < Text.length) {
        setDisplayedText((prev) => prev + Text[i]);
        inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });


        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
}
  }, [String, focus]);


  
  return(
    <textarea 
    ref={inputRef}
    readOnly={false}
    type="text" 
    onFocus={()=> setFocus(true)}
    onBlur={()=> setFocus(false)}
    placeholder={"Click Me"}
    value={displayedText}
    maxLength={20}
    className={styles.textarea} 
/>
  )
  
}

export default Typer