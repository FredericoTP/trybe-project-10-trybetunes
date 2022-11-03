import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Album from './pages/Album';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/search" component={ Search } />
        <Route exact path="/" component={ Home } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
