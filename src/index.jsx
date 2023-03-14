import { createRoot } from  'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { MainView } from './components/main-view/main-view';
import { Container } from 'react-bootstrap';

const MyFlixApplication = () => {
    return(
        <Container>
            <MainView/>
        </Container>
    );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication/>);