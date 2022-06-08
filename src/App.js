import logo from './logo.svg';
import './App.css';
import DataDragon from './DataDragon.js';

import ChampionSelect from "./components/ChampionSelect.js"

function testRead() {
    // DataDragon.getVersions().then(data => {
    //     console.log(data)
    // })
    // console.log(DataDragon.getCurrentVersion())
    // DataDragon.getCurrentVersion().then(data => {
    //     console.log(data)
    // })
    // DataDragon.getLanguages().then(data => {
    //     console.log(data)
    // })
    DataDragon.getSingleChampionP("Aurelion Sol").then(data => {
        console.log(data)
    })
}

function App() {
  return (
    <div className="App">
      <ChampionSelect/>
      <ChampionSelect/>
      <ChampionSelect/>
      <ChampionSelect/>
      <ChampionSelect/>
    </div>
  );
}

export default App;
