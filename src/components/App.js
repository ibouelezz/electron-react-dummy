import Form from "./Form";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "../history";

function App() {
  return (
    <div>
      <Router history={history}>
        <Dashboard />
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
