import styles from './Speech.module.css';
import { FaMicrophone } from "react-icons/fa";
function SpeechBox(props){

    return<><div className={styles.SpeechBox}>
        <button className={styles.btntext} value={props.value} onClick={props.handler}>
          <FaMicrophone />
          Start Listening
        </button>
        <button className={styles.btntext}  value={props.value} onClick={props.handler2}>
          <FaMicrophone />
          Stop
        </button>
      </div>
      <div className={styles.text}>
        <h2 type="text">{props.transcript}</h2>
      </div></>}

      export default SpeechBox;