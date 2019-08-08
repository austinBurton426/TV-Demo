import React from "react";
import { Link } from "react-router-dom";
import TVshow from "./TVshow";

function PreviewPage() {
  return (
    <div>
      <div className="head">
        <Link className="page" to="/">Manage </Link>

        <Link className="page" to="/Preview">Preview </Link>
      </div>
      <div className="flex">
        <div className="shows ">
          <h2>Shows</h2>
          <TVshow />
        </div>
        <div>
          <h1>[Show Name]</h1>
          <h1>[Rating]</h1>
          <div>[Show's image]</div>
        </div>
      </div>
    </div>
  );
}

export default PreviewPage;
