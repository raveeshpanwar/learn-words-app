import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styles from "./Speech.module.css";
import { useState } from "react";
import SpeechBox from "./SpeechBox";

function Speech() {
  const [state, setState] = useState("Box1");
  const [state2, setState2] = useState("Box2");
  const { transcript, resetTranscript } = useSpeechRecognition();
  function handler(e) {
    e.preventDefault();
    SpeechRecognition.stopListening();
    resetTranscript("");
    SpeechRecognition.startListening({ continuous: true });
    if (e.target.value === "one") {
      console.log(state);
    } else if (e.target.value === "two") {
      console.log(state2);
    }
  }
  
 
  function handler2(e) {
    SpeechRecognition.stopListening();
    if (e.target.value === "one") {
      setState(transcript);
    } else if (e.target.value === "two") {
      setState2(transcript);
    }
   
  }

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.speechText}>
          Coffee is a brewed drink prepared from roasted coffee beans, the seeds
          of berries from certain flowering plants. now lets learn the spelling
          of coffee: It is spelled as C O F F E E
        </p>
      </div>
      <SpeechBox
        handler={handler}
        handler2={handler2}
        value="one"
        transcript={state}
      />
      <SpeechBox
        handler={handler}
        handler2={handler2}
        value="two"
        transcript={state2}
      />
    </div>
  );
}

export default Speech;
