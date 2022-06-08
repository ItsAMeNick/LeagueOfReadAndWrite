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

            <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
<<<<<<< HEAD
            <ChampionSpell champion={this.state.selectedChampion} spell="P"/>
=======
            <ChampionSpell champion={this.state.selectedChampion} spell="R"/>
>>>>>>> fea870817e1e9e1cb38d11559d98e9b2c96b6091
            <ChampionSpell champion={this.state.selectedChampion} spell="W"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="E"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="R"/>
        </div>
    }
}
