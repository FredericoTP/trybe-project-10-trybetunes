import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import ProfileEdit from './pages/ProfileEdit';
import { createUser } from './services/userAPI';

const NUMBER_3 = 3;

class App extends React.Component {
  constructor() {
    super();
    this.btnSaveUser = this.btnSaveUser.bind(this);
  }

  state = {
    inputName: '',
    isBtnDisabled: true,
    log: false,
    isLoading: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { inputName } = this.state;
      const newButtonState = inputName.length < NUMBER_3;
      this.setState({
        isBtnDisabled: newButtonState,
      });
    });
  };

  btnSaveUser = (event) => {
    this.saveUser();
    this.setState({
      log: true,
    });
    event.preventDefault();
  };

  async saveUser() {
    const { inputName } = this.state;
    await createUser({ name: inputName });
    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {
      inputName,
      isBtnDisabled,
      log,
      isLoading,
    } = this.state;
    return (
      <Switch>
        <Route exact path="/album/:id" component={ Album } />
        <Route exact path="/profile/edit" component={ ProfileEdit } />
        <Route exact path="/favorites" component={ Favorites } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/search" render={ () => <Search isLoading={ isLoading } /> } />
        <Route
          exact
          path="/"
        >
          {
            log ? <Redirect to="/search" /> : <Login
              inputName={ inputName }
              isBtnDisabled={ isBtnDisabled }
              handleChange={ this.handleChange }
              btnSaveUser={ this.btnSaveUser }
              isLoading={ isLoading }
            />
          }
        </Route>
        <Route exact path="*" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
