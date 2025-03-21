
import Typer from "../app/typer";
import styles from '../app/root.module.css'

export default function Home() {
  return (
    <div className={styles.root}>
     <Typer/>
    </div>
  );
}
