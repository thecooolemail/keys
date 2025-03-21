"use client"
import { useState, useEffect, useRef } from "react";
import { Text } from "./Text";
import styles from '../app/root.module.css'

const Typer = () =>  {

  const [displayedText, setDisplayedText] = useState("");
  const [speed, setSpeed] = useState(300);

  const inputRef = useRef(null);

  useEffect(() => {
    
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < Text.length) {
        setDisplayedText((prev) => prev + Text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
    
  }, [String]);

  useEffect(() => {
    
    inputRef.current.focus();
  }, [inputRef])

  return(
    <textarea 
    ref={inputRef}
    readOnly={false}
    type="text" 
    placeholder={"Title"}
    value={displayedText}
    maxLength={20}
    className={styles.textarea} 
/>
  )
  
}

export default Typer