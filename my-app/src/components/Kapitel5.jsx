import AudioPlayer from "./AudioPlayer";

function Kapitel5({ label, src }) {
  return (
    <div className="cont kapitel-5 cinzel">
      <h1>
        {label} <br /> - 1990 -
      </h1>
      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel5;
