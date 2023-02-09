import React from 'react';
import { MainView } from './components/main-view/main-view.jsx';
import {createRoot} from 'react-dom';
import "./index.scss";
//import { MainView } from './components/main-view/main-view.jsx';

const MyFlixApplication = () => {
  return <MainView/>
  };

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication/>);