import { useNavigate } from "react-router-dom";

function Dank() {
  const navigate = useNavigate();

  return (
    <div className="cont dank">
      <p>
        Die Schiller-Oper ist mehr als ein vergessenes Gebäude. Sie ist ein
        stummes Archiv, ein Erinnerungsort, ein Spiegel der Stadtgeschichte mit
        all ihren Brüchen, Hoffnungen und Versäumnissen. Was mit ihr geschieht,
        ist eine Frage an uns alle: Wie gehen wir um mit unserem kulturellen
        Erbe? Wer trägt Verantwortung für das, was bleibt? „Echo der
        Schilleroper“ versteht sich als Impuls für eine Stadtentwicklung, die
        sich an Gemeinwohl und Erinnerung orientiert, nicht an Profit. Für eine
        Öffentlichkeit, die hinsieht, fragt, nicht vergisst. Für ein Hamburg,
        das seine Geschichten nicht zum Schweigen bringt.
        <h4>Dank</h4>
        Unser besonderer Dank gilt dem St. Pauli-Archiv e.V. für die
        vertrauensvolle Kooperation, der Historikerin Dr. Anke Rees für ihre
        unermüdliche Forschung und Beratung sowie der Band Bolzen Höxter für
        ihre künstlerische Unterstützung. Danke auch an alle, die ihre
        Erinnerungen, Gedanken und Stimmen mit uns geteilt haben und an jene,
        die für den Erhalt der Schiller-Oper kämpfen. <br /> <br />
        Dieses Projekt wurde im Rahmen eines Seminars an der HafenCity
        Universität Hamburg realisiert von Carlotta Simon, Julie Beaumont,
        Konstantin Heine und Lennard Larysz. <br /> <br />
        Kultur bewahrt Vielfalt. <br />
        Abriss löscht Identität.
      </p>
      <button className="impressum" onClick={() => navigate("/impressum")}>
        Impressum
      </button>
    </div>
  );
}

export default Dank;
