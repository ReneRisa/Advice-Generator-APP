import { useState, useEffect } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");
  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        if (data.slip) {
          setAdvice(data.slip.advice);
          setId(data.slip.id);
        }
      })
      .catch((error) => console.error("Error Fetching advice: ", error));
  };
  //Fetch Advice when the component mounts
  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div id="App" className="container-fluid">
      <div className="row g-2 justify-content-center mx-auto" id="row">
        <div className="col-12 mt-4 p-2">
          <h4 className="title">ADVICE #{id}</h4>
        </div>
        <div className="col-10 ">
          <p className="ptag">"{advice}"</p>
        </div>
        <div className="col-10 mx-auto  mb-5">
          <img src="./pattern-divider-desktop.svg" className="img-fluid" />
        </div>
        <div className="col-12 " id="button" onClick={fetchAdvice}>
          <a>
            <img src="./icon-dice.svg" className="img-fluid" id="img" />
          </a>
        </div>
      </div>
    </div>
  );
}
