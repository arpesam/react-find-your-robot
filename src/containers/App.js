import React from 'react';
import Scroll from '../components/Scroll.jsx'
import CardList from '../components/Card.list.jsx';
import SearchBox from '../components/SearchBox.jsx';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  onRequestRobots: () => dispatch(requestRobots()),
});

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending
      ? <h1 className="tc mv6">Loading...</h1>
      : <div className='tc'>
          <h1 className="f2">Find your robot</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);