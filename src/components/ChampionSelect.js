import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import '../App.css';

import DataDragon from '../DataDragon.js';

import ChampionSpell from "./ChampionSpell.js"

export default class ChampionSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allNames: [],
            selectedChampion: "",
            portraitUrl: ""
        };
    }

    componentDidMount() {
        DataDragon.getAllChampionsNames().then(data => {
            this.setState({
                allNames: ["", ...data]
            })
        });
    }

    selectChampion(champion) {
        DataDragon.getChampionPortraitURL(champion).then(data => {
            this.setState({
                portraitUrl: data
            })
        });
        this.setState({
            selectedChampion: champion
        })
    }

    render() {
    return <Container>
        <Row>
            <Col xs={3}>
                <Row className="championPortrait">
                    <Image  src={this.state.portraitUrl}/>
                </Row>
                <p/>
                <Row className="championSelect">
                    <Form.Select style={{color: "White", background: "Grey"}} onChange = { event => this.selectChampion(event.target.value)}>
                        {
                            this.state.allNames.map(name => {
                                return <option className="championSelector" value={name}>{name}</option>
                            })
                        }
                    </Form.Select>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Col className="championSpell"><ChampionSpell champion={this.state.selectedChampion} spell="Q"/></Col>
                    <Col className="championSpell"><ChampionSpell champion={this.state.selectedChampion} spell="W"/></Col>
                </Row>
                <Row>
                    <Col className="championSpell"><ChampionSpell champion={this.state.selectedChampion} spell="E"/></Col>
                    <Col className="championSpell"><ChampionSpell champion={this.state.selectedChampion} spell="R"/></Col>
                </Row>
                <Row className="championSpell">
                    <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
                </Row>
            </Col>
        </Row>
    </Container>
    }
}
