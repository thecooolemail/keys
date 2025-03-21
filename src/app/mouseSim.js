"use client"
import { useEffect } from "react";

const MouseSim = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      window.dispatchEvent(new Event("mousemove")); 
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return <></>;
}

export default MouseSim;