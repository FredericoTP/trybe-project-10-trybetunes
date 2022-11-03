import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Header extends React.Component {
  state = {
    username: '',
    isLoading: true,
  };

  async componentDidMount() {
    const response = await getUser();

    this.setState({
      username: response.name,
      isLoading: false,
    });
  }

  render() {
    const { username, isLoading } = this.state;
    return (
      <header data-testid="header-component">
        <p>Header</p>
        {
          isLoading ? <Loading /> : <h3 data-testid="header-user-name">{ username }</h3>
        }
        <Link data-testid="link-to-search" to="/search">Pesquisar</Link>
        <Link data-testid="link-to-favorites" to="/favorites">Favoritos</Link>
        <Link data-testid="link-to-profile" to="/profile">Perfil</Link>
      </header>
    );
  }
}

export default Header;
