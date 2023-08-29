import React from 'react';

class SnackShack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      snacks: [
        "Lay's",
        "Pringles",
        "Twizzlers",
        "Popcorn",
        "Juju Bees",
        "Hotdogs"
      ]
    }
  }

  handleClick = (snackName) => {
    const personName = this.props.personName;
    this.props.orderSnack(personName, snackName);
  }

  render() {
    const snackComponents = this.state.snacks
      .map((snackName) => (
        <li
          onClick={() => this.handleClick(snackName)}
        >
          {snackName}
        </li>
      ))
    return (
      <div className="snack-shack">
        <h2>Shack Shack</h2>
        <p>
          Ordering for {this.props.personName}
        </p>
        <p>Click on a person, above to choose a snack for him/her.</p>
        <ul>
          {snackComponents}
        </ul>
      </div>
    );
  };
}

export default SnackShack;