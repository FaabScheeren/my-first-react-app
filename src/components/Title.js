import React from "react";

function Title(props) {
  return (
    <div>
      <h1>{props.content || "This is the Title"}</h1>
    </div>
  );
}

export default Title;
