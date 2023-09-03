
import Home from './Home';
import Create from './Create';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import BlogDetails from './BlogDetails';
import Notfound from './Notfound';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/blogs/:id'>
            <BlogDetails />
          </Route>
          <Route path='*'>
            <Notfound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;