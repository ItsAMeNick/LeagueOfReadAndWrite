import React, { Component } from 'react';
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
            <ChampionSpell champion={this.state.selectedChampion} spell="Q"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="W"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="E"/>
            <ChampionSpell champion={this.state.selectedChampion} spell="R"/>
        </div>
    }
}
