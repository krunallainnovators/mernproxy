import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [pingResponse, setPingResponse] = useState("");

  const pingBackend = () => {
    fetch("/v1/api.json?rss_url=https://medium.com/feed/@kanani-nirav", {
      method: "GET"
    })
      .then((response) => console.log(response.json()))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={pingBackend}>Ping Backend</button>
        {pingResponse && <p>Backend Responded with '{pingResponse}'</p>}
      </header>
    </div>
  );
}
export default App;
