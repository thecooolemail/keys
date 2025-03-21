"use client"
import { useEffect, useState } from "react";

const WakeLockComponent = () => {
  const [wakeLock, setWakeLock] = useState(null);

  useEffect(() => {
    let lock;

    const requestWakeLock = async () => {
      try {
        if ("wakeLock" in navigator) {
          lock = await navigator.wakeLock.request("screen");
          setWakeLock(lock);

          console.log("Wake Lock active!");

          // Listen for release events
          lock.addEventListener("release", () => {
            console.log("Wake Lock was released.");
            setWakeLock(null);
          });
        } else {
          console.warn("Wake Lock API not supported in this browser.");
        }
      } catch (err) {
        console.error("Failed to acquire Wake Lock:", err);
      }
    };

    requestWakeLock();
    

    return () => {
      lock?.release();
      console.log("Wake Lock released on cleanup.");
    };
  }, []);

  return <></>;
}

export default WakeLockComponent;