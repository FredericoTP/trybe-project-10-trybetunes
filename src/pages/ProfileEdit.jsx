import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

const NUMBER_3 = 3;

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.userUpdate = this.userUpdate.bind(this);
  }

  state = {
    isLoading: true,
    isBtnDisabled: false,
    name: '',
    email: '',
    image: '',
    description: '',
  };

  async componentDidMount() {
    const response = await getUser();

    this.setState({
      isLoading: false,
      name: response.name,
      email: response.email,
      image: response.image,
      description: response.description,
    });
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { name: nome, email, description, image } = this.state;
      const validationOne = nome.length < NUMBER_3;
      const validationTwo = (
        email.length === 0 || description.length === 0 || image.length === 0);
      const validationThree = !email.includes('@') || !email.includes('.com');

      if (!(validationOne || validationTwo || validationThree)) {
        this.setState({
          isBtnDisabled: false,
        });
      }

      if ((validationOne || validationTwo || validationThree)) {
        this.setState({
          isBtnDisabled: true,
        });
      }
    });
  };

  handleButton = (event) => {
    event.preventDefault();
    this.setState({
      isLoading: true,
    });
    this.userUpdate();
  };

  async userUpdate() {
    const { history } = this.props;
    const { name, email, image, description } = this.state;
    const object = { name, email, image, description };
    await updateUser(object);
    this.setState({
      isLoading: false,
    });
    history.push('/profile');
  }

  render() {
    const {
      isLoading,
      isBtnDisabled,
      name,
      email,
      image,
      description,
    } = this.state;

    if (isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="page-profile-edit">
        <Header />
        <div>
          <form>
            <label htmlFor="edit-input-name">
              Nome
              <input
                name="name"
                data-testid="edit-input-name"
                id="edit-input-name"
                type="text"
                value={ name }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="edit-input-email">
              Email
              <input
                name="email"
                data-testid="edit-input-email"
                id="edit-input-email"
                type="email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="edit-input-description">
              Descrição
              <textarea
                name="description"
                data-testid="edit-input-description"
                id="edit-input-description"
                cols="20"
                rows="5"
                value={ description }
                onChange={ this.handleChange }
              />
            </label>
            <label htmlFor="edit-input-image">
              Imagem
              <input
                name="image"
                data-testid="edit-input-image"
                id="edit-input-image"
                type="text"
                value={ image }
                onChange={ this.handleChange }
              />
            </label>
            <button
              data-testid="edit-button-save"
              type="submit"
              disabled={ isBtnDisabled }
              onClick={ this.handleButton }
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default ProfileEdit;
