function Timeline({ currentLabel, onNext, onPrev, isFirst, isLast }) {
  return (
    <div className="timeline-arrow">
      {!isFirst && (
        <div
          className="arrow-head left"
          onClick={onPrev}
          title="Vorheriges Kapitel"
        />
      )}

      <div className="arrow-body">
        <span className="chapter-label">{currentLabel}</span>
      </div>

      {!isLast && (
        <div
          className="arrow-head right"
          onClick={onNext}
          title="Nächstes Kapitel"
        />
      )}
    </div>
  );
}

export default Timeline;
