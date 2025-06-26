import Kapitel1 from "./Kapitel1";
import Kapitel2 from "./Kapitel2";
import Kapitel3 from "./Kapitel3";
import Kapitel4 from "./Kapitel4";
import Kapitel5 from "./Kapitel5";
import Kapitel6 from "./Kapitel6";
import Zukunftsvisionen from "./Zukunftsvisionen";

const SLUGS = {
  zirkusgebaeude: { Component: Kapitel1, label: "Das Zirkusgebäude" },
  "schiller-theater": { Component: Kapitel2, label: "Das Schiller-Theater" },
  "schiller-oper": { Component: Kapitel3, label: "Die Schiller-Oper" },
  kriegsgefangenenlager: {
    Component: Kapitel4,
    label: "Das Kriegsgefangenenlager",
  },
  gefluechtetenheim: { Component: Kapitel5, label: "Das Geflüchtetenheim" },
  "leerstand-und-denkmalschutz": {
    Component: Kapitel6,
    label: "Der Leerstand und Denkmalschutz",
  },
  zukunftsvisionen: { Component: Zukunftsvisionen, label: "Zukunftsvisionen" },
};

function KapitelRouter({ slug }) {
  const entry = SLUGS[slug];
  if (!entry) return null;

  const slugs = Object.keys(SLUGS);
  const idx = slugs.indexOf(slug);

  const onNext = idx < slugs.length - 1 ? slugs[idx + 1] : null;
  const onPrev = idx > 0 ? slugs[idx - 1] : null;

  return (
    <entry.Component label={entry.label} prevSlug={onPrev} nextSlug={onNext} />
  );
}

export default KapitelRouter;
