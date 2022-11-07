import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import '../style/Header.css';
import image from '../image/picwish.png';

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
      <header data-testid="header-component" className="page-header">
        <div className="title-header">
          <img className="image-header" src={ image } alt="TrybeTunes" />
        </div>
        <div className="links-header">
          <Link
            className="btn btn-outline-dark links"
            data-testid="link-to-search"
            to="/search"
          >
            Pesquisar
          </Link>
          <Link
            className="btn btn-outline-dark links"
            data-testid="link-to-favorites"
            to="/favorites"
          >
            Favoritos
          </Link>
          <Link
            className="btn btn-outline-dark links"
            data-testid="link-to-profile"
            to="/profile"
          >
            Perfil
          </Link>
        </div>
        <div className="profile-header">
          {
            isLoading ? <Loading /> : (
              <h3
                data-testid="header-user-name"
                className="textFont h3"
              >
                { username }
              </h3>)
          }
        </div>
      </header>
    );
  }
}

export default Header;
