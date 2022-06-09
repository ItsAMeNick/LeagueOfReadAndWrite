import React, { Component } from 'react';
import DataDragon from '../DataDragon.js';

import '../App.css';

export default class ChampionSpell extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: ""
        }
    }

    componentDidMount() { this.updateChamp() }

    componentDidUpdate(prevProps) {
        if (prevProps.champion !== this.props.champion) {
            this.updateChamp()
        }
    }

    updateChamp() {
        if (this.props.champion != "") {
            switch(this.props.spell) {
                case "P":
                    DataDragon.getSingleChampionP(this.props.champion).then(data => {
                        this.setState(data)
                    });
                    break;
                case "Q":
                    DataDragon.getSingleChampionQ(this.props.champion).then(data => {
                        this.setState(data)
                    });
                    break;
                case "W":
                    DataDragon.getSingleChampionW(this.props.champion).then(data => {
                        this.setState(data)
                    });
                    break;
                case "E":
                    DataDragon.getSingleChampionE(this.props.champion).then(data => {
                        this.setState(data)
                    });
                    break;
                case "R":
                    DataDragon.getSingleChampionR(this.props.champion).then(data => {
                        this.setState(data)
                    });
                    break;
                default:
            }
        }
    }

    render() {
        return <div >
            <p className="championSpellText">{this.props.spell + ": " + this.state.name}</p>
        </div>
    }
}
