import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import GitHubCepSearch from 'pages/GitHubCepSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/githubsearch">
        <GitHubCepSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
