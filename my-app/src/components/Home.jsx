import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [isEntering, setIsEntering] = useState(false);

  const handleEnter = () => {
    setIsEntering(true);

    setTimeout(() => {
      navigate("/main");
    }, 800);
  };

  return (
    <div className={`cont Hero ${isEntering ? "enter-sequence" : ""}`}>
      <div className="door-area" onClick={handleEnter}></div>
    </div>
  );
}

export default Home;
