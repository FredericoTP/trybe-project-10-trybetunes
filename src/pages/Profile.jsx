import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser } from '../services/userAPI';

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
        <div>
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="page-profile">
        <Header />
        <div>
          <Link to="/profile/edit">Editar perfil</Link>
          <div>
            <img data-testid="profile-image" src={ image } alt={ name } />
          </div>
          <div>
            <h2>Nome</h2>
            <p>{ name }</p>
          </div>
          <div>
            <h2>Email</h2>
            <p>{ email }</p>
          </div>
          <div>
            <h2>Descrição</h2>
            <p>{ description }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
