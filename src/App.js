import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Welcome to The Checkout Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
   
  );
}

export default App;
