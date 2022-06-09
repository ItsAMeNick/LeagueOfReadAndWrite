import logo from './logo.svg';
import './App.css';
import DataDragon from './DataDragon.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChampionSelect from "./components/ChampionSelect.js"

function App() {
    return (
        <Container fluid>
            <Row fluid>
                <Col className="redSide">
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                </Col>
                <Col className="blueSide">
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                    <ChampionSelect/>
                    <p/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
