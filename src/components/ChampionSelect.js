import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DataDragon from '../DataDragon.js';

import ChampionSpell from "./ChampionSpell.js"

export default class ChampionSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allNames: [],
            selectedChampion: ""
        };
    }

    componentDidMount() {
        DataDragon.getAllChampionsNames().then(data => {
            console.log(data)
            this.setState({
                allNames: data,
                selectedChampion: data[0]
            })
        });
    }

    render() {
    return <Container>
        <Row>
            <Col>
                <select onChange = { event =>
                    this.setState({
                        selectedChampion: event.target.value
                    })
                }>{
                    this.state.allNames.map(name => {
                        return <option value={name}>{name}</option>
                    })
                }</select>
                <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
            </Col>
            <Col>
                <Row>
                    <Col><ChampionSpell champion={this.state.selectedChampion} spell="Q"/></Col>
                    <Col><ChampionSpell champion={this.state.selectedChampion} spell="W"/></Col>
                </Row>
                <Row>
                    <Col><ChampionSpell champion={this.state.selectedChampion} spell="E"/></Col>
                    <Col><ChampionSpell champion={this.state.selectedChampion} spell="R"/></Col>
                </Row>
            </Col>
        </Row>
    </Container>
    }
}
