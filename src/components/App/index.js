import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import CharacterList from "../CharacterList";
import Filter from "../Filter";
import CharacterDetail from "../CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      filter: "",
      filterYear: ""
    };
    this.setFilter = this.setFilter.bind(this);
    this.setFilterYear = this.setFilterYear.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then(response => response.json())
      .then(data => {
        const newData = data.map((item, index) => {
          return { ...item, id: index + 1 };
        });
        return this.setState({
          characters: newData
        });
      });
  }

  setFilter(event) {
    this.setState({
      filter: event.target.value
    });
  }

  setFilterYear(event) {
    this.setState({
      filterYear: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App__title">Harry Potter Characters</h1>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={routerProps => (
                <React.Fragment>
                  <Filter
                    handler={this.setFilter}
                    value={this.state.filter}
                    handlerYear={this.setFilterYear}
                    valueYear={this.state.filterYear}
                  />
                  <CharacterList
                    data={this.state.characters
                      .filter(item =>
                        item.name
                          .toUpperCase()
                          .includes(this.state.filter.toUpperCase())
                      )
                      .filter(item =>
                        !this.state.filterYear
                          ? true
                          : item.yearOfBirth >= parseInt(this.state.filterYear)
                      )}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/:id"
              render={routerProps => {
                return (
                  <CharacterDetail
                    data={this.state.characters.find(
                      item => item.id === parseInt(routerProps.match.params.id)
                    )}
                  />
                );
              }}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
