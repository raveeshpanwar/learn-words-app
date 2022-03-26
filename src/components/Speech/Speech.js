import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styles from "./Speech.module.css";
import {  useState } from "react";
import {FaMicrophone} from 'react-icons/fa';


function Speech() {
  const [state, setState] = useState(true);
  const [btntext, setBtntext] = useState(" Start Listening");
  const { transcript, resetTranscript } = useSpeechRecognition();
  function handler(e) {
    e.preventDefault();
    if (state === false) {
      setState(true);
      setBtntext(" Start Listening");
      if(transcript==='coffee'){
        alert('Spelled Correctly');
    }
      resetTranscript(" ");
    } else {
      setState(false);
      setBtntext(" Stop");
    }

    state
      ? SpeechRecognition.startListening({ continous: {state} })
      : SpeechRecognition.stopListening();
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.speechText}>
        Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants. now lets
          learn the spelling of coffee: It is spelled as C O F F E E
        </p>
      </div>
      <div >
        <button className={styles.btntext} onClick={handler}><FaMicrophone/>{btntext}</button>
      </div>
      <div className={styles.text}>
        <h2 type="text">{transcript}</h2>
      </div>
    </div>
  );
}

export default Speech;
