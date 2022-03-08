import Alert from "./components/Alert";
import Media from "./components/Media";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App container">
      <div className="alert alert-info">
        <h3 className="text-danger">Ini Project Pertama React JS</h3>
        <p>Belajar React JS itu mudah</p>
        <button className="mr-1 btn btn-success">Setuju</button>
        <button className="btn btn-info">Iya Dong</button>
      </div>
    </div>
  );
}

export default App;
