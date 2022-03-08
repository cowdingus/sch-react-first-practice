import Alert from "./components/Alert";
import Media from "./components/Media";
import "./App.css";
import {useState} from "react";

function App() {
  return (
    <div className="App container col-sm-6">
      <Alert type="danger" header="Fatal Error">
        Ini adalah alert dengan type danger
      </Alert>
      <Alert type="success" header="Berhasil">
        Ini adalah alert dengan type success
      </Alert>
      <Alert type="warning" header="Warning">
        Ini adalah alert dengan type warning
      </Alert>
      <Media image="react.png" title="React JS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum magni
        dolore aperiam, veniam aspernatur porro qui, ea iure ut saepe labore
        commodi cupiditate minima illo voluptatem cum debitis quos.
      </Media>
    </div>
  );
}

export default App;
