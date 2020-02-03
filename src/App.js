import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  // this is a class property :D
  // it removes the need for excessive this-bindings
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    })

    return (
      <div className="App">
        <h1>Robo Rolodex</h1>
        <SearchBox
          placeholder="search robo"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
