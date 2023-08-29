import React from 'react';

class PeopleList extends React.Component {

  render() {
    const peopleComponents =
      this.props.people
        .map((person) => (
          <li
            onClick={() => this.props.selectPerson(person)}
          > {person.name} </ li>
        ));

    return (
      <ul className="name-list">
        <h3>People</h3>
        {peopleComponents}
      </ul>
    );
  }
}

export default PeopleList;