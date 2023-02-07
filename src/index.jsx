import React from 'react';
import {createRoot} from 'react-dom';
import "./index.scss";

const MyFlixApplication = () => {
    return (
      <div className="my-flix">
        <div>Good morning</div>
      </div>
    );
  };

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication/>);