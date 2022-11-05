import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.addAndRemoveSongFavorite = this.addAndRemoveSongFavorite.bind(this);
  }

  state = {
    check: false,
    isLoading: false,
  };

  componentDidMount() {
    const { trackName, trackId, favoriteMusics } = this.props;
    this.verifyFavorite(trackName, trackId, favoriteMusics);
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
      isLoading: true,
    });

    this.addAndRemoveSongFavorite();
  };

  verifyFavorite = (name, id, array) => {
    array.map((music) => {
      const { trackName, trackId } = music;
      if (name === trackName && id === trackId) {
        this.setState({
          check: true,
        });
      }
      return '';
    });
  };

  async addAndRemoveSongFavorite() {
    const { check } = this.state;
    if (!check) {
      const { trackName, previewUrl, trackId } = this.props;
      await addSong({ trackName, previewUrl, trackId });
    }

    if (check) {
      const { trackName, previewUrl, trackId } = this.props;
      await removeSong({ trackName, previewUrl, trackId });
    }

    this.setState({
      isLoading: false,
    });
  }

  render() {
    const { isLoading, check } = this.state;
    const { trackName, previewUrl, trackId, clickOnCheck } = this.props;
    if (isLoading) {
      return (
        <Loading />
      );
    }

    return (
      <>
        <p>{ trackName }</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            id={ trackId }
            name="check"
            onChange={ this.handleChange }
            checked={ check }
            onClick={ clickOnCheck }
          />
        </label>
      </>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  previewUrl: PropTypes.string.isRequired,
  favoriteMusics: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
  })).isRequired,
  clickOnCheck: PropTypes.func,
};

MusicCard.defaultProps = {
  clickOnCheck: null,
};

export default MusicCard;
