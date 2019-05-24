import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      characters: [],
      filter:'',
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Harry Potter Characters</h1>
        </header>
        <main>
          <CharacterList/>
        </main>
      </div>
    );
  }
  
}

export default App;
