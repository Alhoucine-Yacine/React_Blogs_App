import logo from './logo.svg';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (

    <Router>
    <div className="App">
      <Navbar/>
      <div className="component">
        <h1>
         <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>

            <Route path="/blog/:id">
              <BlogDetails/>
            </Route>

         </Switch>
        </h1>
      </div>
    </div>
    </Router>
  );
}

export default App;
