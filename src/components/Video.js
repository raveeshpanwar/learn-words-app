import YouTube from "react-youtube";
import { useState } from "react";

const Video = () => {
  const arr = [
    "Nu8kIIL-CDA",
    "G1Bl_cy0svM",
    "lmeuX7zIdX0",
    "t8k71QcArnk",
    "TEH_kNy5Ebk",
  ];

  const [url, setUrl] = useState(0);
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
      change();
    }
  }
  function change() {
    if (url < arr.length - 1) {
      setUrl(url + 1);
    } else {
      setUrl(0);
    }
  }
  return (
    <div>
      <YouTube
        videoId={arr[url]}
        opts={opts}
        onReady={onReady}
        onEnd={onVideoEnd}
      />
      <button
        style={{ backgroundColor: "brown", color: "white", cursor: "pointer" }}
        onClick={change}
      >
        Next
      </button>
    </div>
  );
};
export default Video;
