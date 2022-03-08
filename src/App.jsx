import Alert from "./components/Alert";
import Media from "./components/Media";
import "./App.css";
import { useState } from "react";

function App() {
  const [type, setType] = useState("danger");
  const [header, setHeader] = useState("Fatal Error");
  const [content, setContent] = useState("Ini content dari alert");

  const changeHeaderAlert = (event) => {
    setHeader(event.target.value)
  }
  const changeTypeAlert = (event) => {
    setType(event.target.value)
  }
  const changeContentAlert = (event) => {
    setContent(event.target.value)
  }

  return (
    <div className="App container">
      <Alert type={type} header={header}>
        {content}
      </Alert>

      <hr />
      <h4>Alert Control</h4>
      <b className="text-left">Tipe Alert</b>
      <select
        className="form-control"
        name="type"
        value={type}
        onChange={changeTypeAlert}
      >
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="danger">Danger</option>
        <option value="info">Info</option>
      </select>
      <b className="text-left">Header Alert</b>
      <input
        type="text"
        name="header"
        className="form-control"
        value={header}
        onChange={changeHeaderAlert}
      />
      <b className="text-left">Content Alert</b>
      <input
        type="text"
        name="content"
        className="form-control"
        value={content}
        onChange={changeContentAlert}
      />

      <Media image="react.png" title="React JS">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem rerum magni
        dolore aperiam, veniam aspernatur porro qui, ea iure ut saepe labore
        commodi cupiditate minima illo voluptatem cum debitis quos.
      </Media>
    </div>
  );
}

export default App;
