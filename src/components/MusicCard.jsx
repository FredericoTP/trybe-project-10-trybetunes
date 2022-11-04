import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { musics } = this.props;
    return (
      <div>
        {
          musics.map((music) => {
            const { trackName, trackId, previewUrl } = music;
            if (previewUrl) {
              return (
                <div key={ trackId }>
                  <p>{ trackName }</p>
                  <audio data-testid="audio-component" src={ previewUrl } controls>
                    <track kind="captions" />
                    <code>audio</code>
                  </audio>
                </div>
              );
            }
            return '';
          })
        }
      </div>
    );
  }
}

MusicCard.propTypes = {
  musics: PropTypes.arrayOf(PropTypes.shape({
    trackName: PropTypes.string,
    trackId: PropTypes.number,
    previewUrl: PropTypes.string,
  })).isRequired,
};

export default MusicCard;
