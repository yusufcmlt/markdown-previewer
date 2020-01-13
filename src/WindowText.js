import React from "react";

export default function WindowText({ textValue, textID, textHandler }) {
  return (
    <div id="window-container" className="z-depth-4 white mt-5">
      <div id="window-head" className="warning-color lighten-1">
        <p className="ml-3 pt-1 indigo-text">Editor Window</p>
      </div>
      <div id="window-inside" className="md-form">
        <textarea
          id={textID}
          className="md-textarea form-control text-dark pl-3"
          style={{
            overflowY: "scroll",
            boxSizing: "border-box"
          }}
          rows="30"
          defaultValue={textValue}
          onChange={text => textHandler(text.target.value)}
        ></textarea>
      </div>
    </div>
  );
}
