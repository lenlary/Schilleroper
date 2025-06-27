import { useParams } from "react-router-dom";
import { slugsList } from "./slugsList";

function KapitelRouter() {
  const { slug } = useParams(); // holt den Slug aus der URL
  const entry = slugsList[slug];
  if (!entry) return <div>Kapitel nicht gefunden</div>;

  const slugs = Object.keys(slugsList);
  const idx = slugs.indexOf(slug);

  const onNext = idx < slugs.length - 1 ? slugs[idx + 1] : null;
  const onPrev = idx > 0 ? slugs[idx - 1] : null;

  return (
    <entry.Component
      label={entry.label}
      src={entry.src}
      prevSlug={onPrev}
      nextSlug={onNext}
    />
  );
}

export default KapitelRouter;
