import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

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
            <Col>
                <Image src={this.state.portraitUrl}/>
                <Row>
                    <select onChange = { event => this.selectChampion(event.target.value)}>
                        {
                            this.state.allNames.map(name => {
                                return <option value={name}>{name}</option>
                            })
                        }
                    </select>
                </Row>
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
                <Row>
                    <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
                </Row>
            </Col>
        </Row>
    </Container>
    }
}
