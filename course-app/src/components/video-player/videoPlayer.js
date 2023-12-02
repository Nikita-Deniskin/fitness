import ReactPlayer from "react-player"

export default function VideoPlayer({videoUrl}) {
  
    return (
      <ReactPlayer url={videoUrl}
        width={1160}
        height={639} />
    );
  }
   