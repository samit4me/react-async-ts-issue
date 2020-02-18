import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  const [id, setId] = useState(1);

  const nextUser = () => {
    setId(id + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User id={id} />
        <button onClick={nextUser}>Next user</button>
      </header>
    </div>
  );
}

export default App;
