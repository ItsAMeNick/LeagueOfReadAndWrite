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
        return <div>
            <select onChange = { event =>
                this.setState({
                    selectedChampion: event.target.value
                })
            }>{
                this.state.allNames.map(name => {
                    return <option value={name}>{name}</option>
                })
            }</select>

            <Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>

            <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="Q"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="W"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="E"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="R"/>
        </div>
    }
}
