import React from 'react';
import logo from './logo.svg';
import  Header  from './Header';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;




// render() {
//   return (
//     <div className="container">
//       <Header />
//       <AddItem />
//       <ItemCount count={3} />
//       <Item text="wine" quantity={4} bought={true} />
//       <Item text="cheese" quantity={10} />
//       <Item text="biscuits" quantity={5} />
//     </div>
//   );
// }
// }


// export default App;
