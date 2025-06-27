import Kapitel1 from "./Kapitel1";
import Kapitel2 from "./Kapitel2";
import Kapitel3 from "./Kapitel3";
import Kapitel4 from "./Kapitel4";
import Kapitel5 from "./Kapitel5";
import Kapitel6 from "./Kapitel6";
import Dank from "./Dank";

export const slugsList = {
  zirkus: {
    Component: Kapitel1,
    label: "Das Zirkusgebäude",
    src: "/der-zirkus.mp3",
  },
  "schiller-theater": {
    Component: Kapitel2,
    label: "Das Schiller-Theater",
    src: "/Das_Theater.mp3",
  },
  "schiller-oper": {
    Component: Kapitel3,
    label: "Die Schiller-Oper",
    src: "/die-oper.mp3",
  },
  kriegsgefangenenlager: {
    Component: Kapitel4,
    label: "Das Kriegsgefangenenlager",
    src: "/Das_Gefangenenlager.mp3",
  },
  gefluechtetenheim: {
    Component: Kapitel5,
    label: "Das Geflüchtetenheim",
    src: "/das_heim.mp3",
  },
  "leerstand-und-denkmalschutz": {
    Component: Kapitel6,
    label: "Der Leerstand und Denkmalschutz",
    src: "/das_denkmal.mp3",
  },
  dank: {
    Component: Dank,
    label: "dank",
  },
};
