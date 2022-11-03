import React from 'react';
import Header from '../components/Header';

const NUMBER_2 = 2;

class Search extends React.Component {
  state = {
    inputSearch: '',
    isBtnSearchDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      const { inputSearch } = this.state;
      const newButtonState = inputSearch.length < NUMBER_2;
      this.setState({
        isBtnSearchDisabled: newButtonState,
      });
    });
  };

  render() {
    const { inputSearch, isBtnSearchDisabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <p>Search</p>
        <div>
          <input
            data-testid="search-artist-input"
            name="inputSearch"
            type="text"
            placeholder="Nome do Artista"
            value={ inputSearch }
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ isBtnSearchDisabled }
          >
            Pesquisar
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
