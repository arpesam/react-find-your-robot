import React from 'react';
import Scroll from '../components/Scroll.jsx'
import CardList from '../components/Card.list.jsx';
import SearchBox from '../components/SearchBox.jsx';
import ErrorBoundry from '../components/ErrorBoundry';
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
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return !robots.length
      ? <h1 className="tc mv6">Loading...</h1>
      : <div className='tc'>
          <h1 className="f2">Find your robot</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
  }
};

export default App;