import React from 'react';
import Header from '../components/Header';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import '../style/Favorites.css';

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
    const { isLoading, favoriteMusics, click } = this.state;
    if (isLoading || click) {
      return (
        <div className="favorites-loading">
          <div className="favorites-loading-header">
            <Header />
          </div>
          <div className="favorites-loading-loading">
            <Loading />
          </div>
        </div>
      );
    }

    return (
      <div data-testid="page-favorites" className="page-favorites">
        <Header />
        <div className="favorites-musics">
          {
            favoriteMusics.map((music) => {
              const { trackName, trackId, previewUrl } = music;
              return (
                <div key={ trackId }>
                  <MusicCard
                    trackName={ trackName }
                    previewUrl={ previewUrl }
                    trackId={ +trackId }
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
