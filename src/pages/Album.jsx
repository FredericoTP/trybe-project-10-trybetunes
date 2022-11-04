import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  state = {
    musics: [],
    name: '',
    collection: '',
    isLoading: true,
    favoriteMusics: [],
  };

  async componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const response = await getMusics(params.id);

    const responseFav = await getFavoriteSongs();

    this.setState({
      musics: response,
      name: response[0].artistName,
      collection: response[0].collectionName,
      favoriteMusics: responseFav,
      isLoading: false,
    });
  }

  render() {
    const { musics, name, collection, isLoading, favoriteMusics } = this.state;
    if (isLoading) {
      return (
        <Loading />
      );
    }
    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <h2 data-testid="artist-name">{ name }</h2>
          <p data-testid="album-name">{ collection }</p>
        </div>
        <div>
          {
            musics.map((music) => {
              if (music.previewUrl) {
                return (
                  <div key={ music.trackId }>
                    <MusicCard
                      trackName={ music.trackName }
                      previewUrl={ music.previewUrl }
                      trackId={ music.trackId }
                      favoriteMusics={ favoriteMusics }
                    />
                  </div>
                );
              }
              return '';
            })
          }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Album;
