import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';
import '../style/Profile.css';

class Profile extends React.Component {
  state = {
    isLoading: true,
    user: {},
  };

  async componentDidMount() {
    const response = await getUser();

    this.setState({
      isLoading: false,
      user: response,
    });
  }

  render() {
    const { isLoading, user } = this.state;
    const { name, email, image, description } = user;
    if (isLoading) {
      return (
        <div className="profile-loading">
          <div className="profile-loading-header">
            <Header />
          </div>
          <div className="profile-loading-loading">
            <Loading />
          </div>
        </div>
      );
    }

    return (
      <div data-testid="page-profile" className="page-profile">
        <div>
          <Header />
        </div>
        <div className="page-profile-content">
          <div className="page-profile-image">
            <img
              className="profile-image"
              data-testid="profile-image"
              src={ image }
              alt={ name }
            />
          </div>
          <div className="page-profile-name">
            <h2>Nome</h2>
            <p>{ name }</p>
          </div>
          <div className="page-profile-email">
            <h2>Email</h2>
            <p>{ email }</p>
          </div>
          <div className="page-profile-description">
            <h2>Descrição</h2>
            <p>{ description }</p>
          </div>
          <div className="page-profile-link">
            <Link
              className="btn btn-outline-dark"
              to="/profile/edit"
            >
              Editar perfil
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
