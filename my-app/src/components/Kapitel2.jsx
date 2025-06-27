import AudioPlayer from "./AudioPlayer";

function Kapitel2({ label, src }) {
  return (
    <div className="cont kapitel-2 cinzel">
      <h1>
        {label} <br /> - 1914 -
      </h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel2;
