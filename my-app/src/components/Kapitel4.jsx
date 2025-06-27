import AudioPlayer from "./AudioPlayer";

function Kapitel4({ label, src }) {
  return (
    <div className="cont kapitel-4 cinzel">
      <h1>
        {label} <br /> - 1944 -
      </h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel4;
