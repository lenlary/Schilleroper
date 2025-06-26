import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Main from "./components/Main";
import KapitelRouter from "./components/KapitelRouter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route
          path="/zirkusgebaeude"
          element={<KapitelRouter slug="zirkusgebaeude" />}
        />
        <Route
          path="/schiller-theater"
          element={<KapitelRouter slug="schiller-theater" />}
        />
        <Route
          path="/schiller-oper"
          element={<KapitelRouter slug="schiller-oper" />}
        />
        <Route
          path="/kriegsgefangenenlager"
          element={<KapitelRouter slug="kriegsgefangenenlager" />}
        />
        <Route
          path="/gefluechtetenheim"
          element={<KapitelRouter slug="gefluechtetenheim" />}
        />
        <Route
          path="/leerstand-und-denkmalschutz"
          element={<KapitelRouter slug="leerstand-und-denkmalschutz" />}
        />
        <Route
          path="/zukunftsvisionen"
          element={<KapitelRouter slug="zukunftsvisionen" />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
export default App;
