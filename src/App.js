import React, { useState } from "react";
import WindowText from "./WindowText";
import defaultText from "./DefaultText";
import PreviewText from "./PreviewText";
import marked from "marked";
import "./App.css";

function App() {
  const [textVal, setText] = useState(defaultText);

  const handleText = text => {
    console.log(textVal);
    setText(text);
  };

  return (
    <div className="App">
      <div id="page-container" className="container-fluid bg-warning vh-100">
        <div id="row-container" className="row vh-100">
          <div
            id="editor-container"
            className="col border-right border-dark unique-color lighten-1"
          >
            <h2
              id="editor-heading"
              className="default-color col p-2 mt-2 z-depth-1 text-center"
            >
              EDITOR
            </h2>
            <WindowText
              textValue={textVal}
              textID="editor"
              textHandler={handleText}
            />
          </div>
          <div id="preview-container" className="col stylish-color-dark">
            <h2
              id="preview-heading"
              className="primary-color col p-2 mt-2 z-depth-1 text-center"
            >
              PREVIEW
            </h2>
            <PreviewText
              textValue={marked(textVal, { breaks: true })}
              textID="preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
