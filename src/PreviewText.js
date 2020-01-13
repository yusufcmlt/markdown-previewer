import React from "react";

export default function PreviewText({ textValue, textID }) {
  return (
    <div id="window-container" className="z-depth-4 white mt-5">
      <div id="window-head" className="success-color lighten-1">
        <p className="ml-3 pt-1 indigo-text">Preview Window</p>
      </div>
      <div id="window-inside" className="md-form">
        <div
          id={textID}
          contentEditable={true}
          className="text-dark pl-3"
          style={{
            overflowY: "scroll",
            maxHeight: "78vh"
          }}
          dangerouslySetInnerHTML={{ __html: textValue }}
        />
      </div>
    </div>
  );
}
