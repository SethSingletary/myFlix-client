import {React} from 'react';
import { MainView } from './components/main-view/main-view.jsx';
import { createRoot } from "react-dom/client"
//import {createRoot} from 'react-dom';
//import '~bootstrap/scss/bootstrap.scss';
//import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { Container } from 'react-bootstrap';

const MyFlixApplication = () => {


  return(
    <Container style={{border: "1px solid red"}}>
      <MainView/>
    </Container>
  );
  };

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication/>);