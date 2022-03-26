import YouTube from "react-youtube";
import { useState } from "react";

const Video = () => {
  const [url, setUrl] = useState("Nu8kIIL-CDA");
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function onReady(e) {
    // access to player in all event handlers via event.target
    e.target.playVideo();
  }
  function onVideoEnd(e) {
    const x = e.target.getPlayerState();
    if (x === 0) {
      setUrl("G1Bl_cy0svM");
    }
  }
function change(){
  if(url==='Nu8kIIL-CDA'){setUrl('G1Bl_cy0svM')}
  else{setUrl('Nu8kIIL-CDA')}
}
  return (
    <div>
      <YouTube videoId={url} opts={opts} onReady={onReady} onEnd={onVideoEnd} />
      <button style={{backgroundColor:'brown',color:'white',cursor:'pointer'}}   onClick={change}>Next</button>
    </div>
  );
};
export default Video;
