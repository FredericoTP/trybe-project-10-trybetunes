import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import ListAlbums from '../components/ListAlbums';
import Loading from '../components/Loading';

const NUMBER_2 = 2;

class Search extends React.Component {
  constructor() {
    super();
    this.searchAlbum = this.searchAlbum.bind(this);
  }

  state = {
    inputSearch: '',
    isBtnSearchDisabled: true,
    albums: [],
    isLoading: false,
    btnClicked: false,
    nameArtist: '',
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

  handleClickBtn = () => {
    const { inputSearch } = this.state;
    this.setState({
      nameArtist: inputSearch,
    });
    this.searchAlbum(inputSearch);
    this.setState({
      isLoading: true,
      btnClicked: true,
    });
  };

  async searchAlbum(name) {
    const response = await searchAlbumsAPI(name);
    this.setState({
      albums: response,
      isLoading: false,
      inputSearch: '',
    });
  }

  render() {
    const {
      inputSearch,
      isBtnSearchDisabled,
      albums,
      isLoading,
      btnClicked,
      nameArtist,
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
            onClick={ this.handleClickBtn }
          >
            Pesquisar
          </button>
        </div>
        <div>
          <ListAlbums
            inputSearch={ inputSearch }
            albums={ albums }
            btnClicked={ btnClicked }
            nameArtist={ nameArtist }
          />
        </div>
      </div>
    );
  }
}

export default Search;
