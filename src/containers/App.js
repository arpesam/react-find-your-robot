import React from 'react';
import Scroll from '../components/Scroll.jsx'
import CardList from '../components/Card.list.jsx';
import SearchBox from '../components/SearchBox.jsx';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    console.log('check')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    if (!this.state.robots.length) {
      return <h1 className="tc mv6">Loading...</h1>
    }
    return (
      <div className='tc'>
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    )
  }
};

export default App;