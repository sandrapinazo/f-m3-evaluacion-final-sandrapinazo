import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import Filter from "./components/Filter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: ""
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("http://hp-api.herokuapp.com/api/characters")
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: index + 1 };
        });
        console.log(data);
        return this.setState({
          characters: newData
        });
      });
  }

  setFilter (event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <Filter handler={this.setFilter} />
          <CharacterList data={this.state.characters} />
        </main>
      </div>
    );
  }
}

export default App;
