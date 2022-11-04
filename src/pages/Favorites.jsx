import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

class Favorites extends React.Component {
  constructor() {
    super();
    this.getSongs = this.getSongs.bind(this);
  }

  state = {
    isLoading: true,
    favoriteMusics: [],
    click: false,
  };

  async componentDidMount() {
    const response = await getFavoriteSongs();

    this.setState({
      isLoading: false,
      favoriteMusics: response,
    });
  }

  componentDidUpdate() {
    const { click } = this.state;
    if (click) {
      this.getSongs();
    }
  }

  async getSongs() {
    const response = await getFavoriteSongs();

    this.setState({
      favoriteMusics: response,
      click: false,
    });
  }

  clickOnCheck = () => {
    this.setState({
      click: true,
    });
  };

  render() {
    const { isLoading, favoriteMusics } = this.state;

    if (isLoading) {
      return (
        <div>
          <Header />
          <Loading />
        </div>
      );
    }
    return (
      <div data-testid="page-favorites">
        <Header />
        <div>
          {
            favoriteMusics.map((music) => {
              const { trackName, trackId, previewUrl } = music;
              return (
                <div key={ trackId }>
                  <MusicCard
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    trackId={ trackId }
                    favoriteMusics={ favoriteMusics }
                    clickOnCheck={ this.clickOnCheck }
                  />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Favorites;
