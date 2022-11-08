/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import '../style/Login.css';
import image from '../image/picwish.png';

class Login extends React.Component {
  render() {
    const { inputName, handleChange, isBtnDisabled, btnSaveUser, isLoading } = this.props;

    if (isLoading) {
      return (
        <div className="login-loading">
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="page-login" className="page-login">
        <div className="login">
          <div className="login-title">
            <img className="img-login" src={ image } alt="TrybeTunes" />
          </div>
          <div className="login2">
            <div className="title">
              <p>Login</p>
            </div>
            <form className="form-login">
              <div className="mb-3">
                <label
                  htmlFor="login-name-input"
                  className="form-label textFormatation"
                >
                  Nome
                </label>
                <input
                  className="form-control textFormatation"
                  data-testid="login-name-input"
                  id="login-name-input"
                  type="text"
                  placeholder="Digite seu nome"
                  name="inputName"
                  value={ inputName }
                  onChange={ handleChange }
                />
              </div>
              <button
                className="btn btn-dark"
                data-testid="login-submit-button"
                type="submit"
                disabled={ isBtnDisabled }
                onClick={ btnSaveUser }
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
  btnSaveUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Login;
