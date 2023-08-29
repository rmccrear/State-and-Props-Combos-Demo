import React from 'react';
import axios from 'axios';

import PeopleList from './PeopleList';
import SnackOrders from './SnackOrders';
import SnackShack from './SnackShack';

import './App.css'

const SERVER = 'https://swapi.dev/api'
import mockData from '../data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      personToOrderFor: {},
      snackOrders: {
        "Luke Skywalker": "Lay's BBQ",
        "C-3PO": "Red Hots",
        "R2-D2": "JuJuBees",
        "Darth Vader": "Twizzlers",
        "Obi-Wan Kenobi": "Popcorn"
      }
    }
  }

  async componentDidMount() {
    // const result = await axios.get(`${SERVER}/people`);
    // const data = result.data;
    const data = mockData.results;
    this.setState({
      people: data
    });
  }

  orderSnack = (personName, snackName) => {
    alert(personName + " ordered " + snackName)
    this.setState({
      snackOrders: {
        ...this.state.snackOrders,
        [personName]: snackName
      }
    })
  }

  selectPerson = (person) => {
    this.setState({
      personToOrderFor: person
    });
  }

  render() {
    return (
      <main>
        <PeopleList people={this.state.people} selectPerson={this.selectPerson} />

        <SnackOrders
          people={this.state.people}
          snackOrders={this.state.snackOrders}
        />

        <SnackShack
          personName={this.state.personToOrderFor.name}
          snackOrders={this.state.snackOrders}
          orderSnack={this.orderSnack}
        />
      </main >
    )
  }

}

export default App;