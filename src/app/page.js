
import Typer from "../app/typer";
import styles from '../app/root.module.css'
import MouseSim from "./mouseSim";
import WakeLockComponent from "./lock";
export default function Home() {
  return (
    <div className={styles.root}>
     <Typer/>
     <MouseSim/>
     <WakeLockComponent></WakeLockComponent>
    </div>
  );
}
