import AudioPlayer from "./AudioPlayer";

function Kapitel1({ label, src }) {
  return (
    <div className="cont kapitel-1 cinzel">
      <h1>
        {label}
        <br />- 1891 -
      </h1>

      <AudioPlayer src={src} />
    </div>
  );
}

export default Kapitel1;
