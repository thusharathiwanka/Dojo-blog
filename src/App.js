import Navbar from "./components/Navbar";
import Home from "./components/Home";
import BlogSubmit from "./components/BolgSubmit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create/">
              <BlogSubmit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
