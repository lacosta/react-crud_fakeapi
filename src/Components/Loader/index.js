// @packages
import React from "react";

// @own
import "./index.scss";

function Loader() {
  return (
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;
