import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <app className="component">
        <h1>
          <Home/>
        </h1>
      </app>
    </div>
  );
}

export default App;
