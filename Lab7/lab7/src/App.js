import './App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, ListGroup} from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import StronaPierwsza from "./components/StronaPierwsza";
import StronaDruga from "./components/StronaDruga";
import StronaTrzecia from "./components/StronaTrzecia";



const Teams = props => {
  const teamsF1 = ['Red Bull Racing Honda','Mercedes-AMG Petronas Formula One Team','Scuderia Ferrari Mission Winnow',
  'McLaren F1 Team','Alpine F1 Team','Scuderia AlphaTauri Honda','Aston Martin Cognizant Formula One Team',
  'Williams Racing','Alfa Romeo Racing ORLEN','Uralkali Haas F1 Team']
  const listTeamsF1 = teamsF1.map(team => <ListGroup.Item key={team}>{team}</ListGroup.Item>)
  const teamsF2 = ['Prema Racing','UNI-Virtuosi Racing','Carlin',
    'Hitech Grand Prix','ART Grand Prix','MP Motorsport','Charouz Racing System',
    'DAMS','Campos Racing','HWA Racelab']
  const listTeamsF2 = teamsF2.map(team2 => <ListGroup.Item key={team2}>{team2}</ListGroup.Item>)
  return(
      <div>
        {props.test ? <ListGroup>{listTeamsF2}</ListGroup>: <ListGroup>{listTeamsF1}</ListGroup>}
      </div>
  )
}

class Site extends React.Component{
  state={
    title: 'Formuła 1'
  }
  switchTeams(){
    this.setState({showTeams : !this.state.showTeams})
  }
  render(){
    const changeTitle = () => this.setState({title: '22672'})
    return(
        <div>
          <Container fluid={"sm"}>
            <h1>{this.state.title}</h1>
            <Teams test={this.state.showTeams}/>
            <Button variant="primary" onClick={() => this.switchTeams()}>Zmień nazwy drużyn</Button>
            <Button variant="success" onClick={changeTitle}>Zmień tytuł</Button>
          </Container>
        </div>
    )
  }
}


function App() {
  return (
      <div className="App">
          <NavBar/>
        <Routes>
            <Route exact path='/'  element={<Site />}/>
            <Route path='/pierwsza' element={<StronaPierwsza />}/>
            <Route path='/druga' element={<StronaDruga />}/>
            <Route path='/trzecia' element={<StronaTrzecia />}/>
        </Routes>

      </div>
  );
}

export default App;
