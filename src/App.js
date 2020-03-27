import React from 'react';
import { robots } from './robots';
import CardList from './Card.list.jsx';
import SearchBox from './SearchBox.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots,
      searchField: '',
    };
  }

  onSearchChange(event) {
    console.log(event);
  }

  render() {
    console.log('this --', this)
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />
      </div>
    )
  }
};

export default App;