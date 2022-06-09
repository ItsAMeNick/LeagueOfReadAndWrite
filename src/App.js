import logo from './logo.svg';
import './App.css';
import DataDragon from './DataDragon.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ChampionSelect from "./components/ChampionSelect.js"

function App() {
    return (
        <Container>
            <Row>
                <Col className="redSide">
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                </Col>
                <Col className="redSide" xs={1}/>
                <Col className="blueSide" xs={1}/>
                <Col className="blueSide">
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                    <ChampionSelect/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
