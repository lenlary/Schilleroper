import { useNavigate } from "react-router-dom";

function Timeline({ currentLabel, prevSlug, nextSlug }) {
  const nav = useNavigate();

  return (
    <div className="timeline-arrow">
      {prevSlug && (
        <div className="arrow-head left" onClick={() => nav(`/${prevSlug}`)} />
      )}
      <div className="arrow-body">{currentLabel}</div>
      {nextSlug && (
        <div className="arrow-head right" onClick={() => nav(`/${nextSlug}`)} />
      )}
    </div>
  );
}

export default Timeline;
