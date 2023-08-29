import React from 'react';

class SnackOrders extends React.Component {

  render() {
    const snackList =
      this.props.people
        .map((person) => (
          <li>
            {person.name}: &nbsp;
            {this.props.snackOrders[person.name]}
          </li>
        ))
    return (
      <section className="snack-person-list">
        <h3> Snack orders </h3>
        <ul>
          {snackList}
        </ul>
      </section>
    );
  }
}

export default SnackOrders;