
import Home from './pages/Home'
import Users from './pages/Users'
import { Switch, Route } from 'react-router-dom'
import './scss/index.scss';

function App() {
  return (
    <div className="appCo">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
      </Switch>

    </div>
  );
}

export default App;
