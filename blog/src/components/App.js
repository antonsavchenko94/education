import React, { Component } from 'react';
import ListPosts from './ListPosts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <main>

          <ListPosts />

        </main>

        <footer>
          <p>This is FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;