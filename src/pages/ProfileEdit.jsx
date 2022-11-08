/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';
import '../style/ProfileEdit.css';

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
        <div className="profileEdit-loading">
          <div className="profileEdit-loading-header">
            <Header />
          </div>
          <div className="profileEdit-loading-loading">
            <Loading />
          </div>
        </div>
      );
    }

    return (
      <div data-testid="page-profile-edit" className="page-profile-edit">
        <div>
          <Header />
        </div>
        <form className="page-profile-form">
          <div className="mb-3">
            <label
              className="form-label profileEdit-text"
              htmlFor="edit-input-name"
            >
              Nome
            </label>
            <input
              className="form-control"
              name="name"
              data-testid="edit-input-name"
              id="edit-input-name"
              type="text"
              placeholder="Seu nome"
              value={ name }
              onChange={ this.handleChange }
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label profileEdit-text"
              htmlFor="edit-input-email"
            >
              Email
            </label>
            <input
              className="form-control"
              name="email"
              data-testid="edit-input-email"
              id="edit-input-email"
              type="email"
              placeholder="Seu email"
              value={ email }
              onChange={ this.handleChange }
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label profileEdit-text"
              htmlFor="edit-input-description"
            >
              Descrição
            </label>
            <textarea
              className="form-control profileEdit-textarea"
              name="description"
              data-testid="edit-input-description"
              id="edit-input-description"
              rows="5"
              placeholder="Sua descrição"
              value={ description }
              onChange={ this.handleChange }
            />
          </div>
          <div className="mb-3">
            <label
              className="form-label profileEdit-text"
              htmlFor="edit-input-image"
            >
              Imagem
            </label>
            <input
              className="form-control"
              name="image"
              data-testid="edit-input-image"
              id="edit-input-image"
              type="text"
              placeholder="Link da imagem"
              value={ image }
              onChange={ this.handleChange }
            />
          </div>
          <button
            className="btn btn-dark profileEdit-text"
            data-testid="edit-button-save"
            type="submit"
            disabled={ isBtnDisabled }
            onClick={ this.handleButton }
          >
            Salvar
          </button>
        </form>
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
