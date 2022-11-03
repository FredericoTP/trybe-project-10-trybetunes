import React from 'react';
import PropTypes from 'prop-types';

class Login extends React.Component {
  render() {
    const { inputName, handleChange, isBtnDisabled, btnSaveUser } = this.props;
    return (
      <div data-testid="page-login">
        <p>TrybeTunes</p>
        <p>Login</p>
        <form>
          <label htmlFor="login-name-input">
            Nome
            <input
              data-testid="login-name-input"
              id="login-name-input"
              type="text"
              placeholder="Digite seu nome"
              name="inputName"
              value={ inputName }
              onChange={ handleChange }
            />
          </label>
          <button
            data-testid="login-submit-button"
            type="submit"
            disabled={ isBtnDisabled }
            onClick={ btnSaveUser }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  inputName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isBtnDisabled: PropTypes.bool.isRequired,
  btnSaveUser: PropTypes.func.isRequired,
};

export default Login;
