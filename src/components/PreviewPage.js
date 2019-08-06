import React from 'react';
import { Link } from "react-router-dom";
import TVshow from './TVshow';


function PreviewPage() {
  return (
    <div>
        CONTENT
        <div>
        <Link to="/">
          Manage{" "}
        </Link>

        <Link to="/Preview">
          Preview{" "}
        </Link>
      </div>

      <div className="shows">
        <h2>Shows</h2>
        <TVshow/>
    </div>
<h1>[Show Name]</h1>
<h1>[Rating]</h1>
<div>[Show's image]</div>

    </div>
  );
}

export default PreviewPage;
