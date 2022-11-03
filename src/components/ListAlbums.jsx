import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListAlbums extends React.Component {
  render() {
    const { albums, btnClicked, nameArtist } = this.props;
    if (btnClicked && albums.length > 0) {
      return (
        <div>
          <h4>
            Resultado de álbuns de:
            {' '}
            { nameArtist }
          </h4>
          <div>
            {
              albums.map((album) => {
                const {
                  artistId,
                  artistName: name,
                  collectionName,
                  artworkUrl100,
                  collectionId,
                } = album;
                return (
                  <div key={ `${artistId}-${collectionName}` }>
                    <img src={ artworkUrl100 } alt={ name } />
                    <p>{ collectionName }</p>
                    <p>{ name }</p>
                    <Link
                      data-testid={ `link-to-album-${collectionId}` }
                      to={ `/album/${collectionId}` }
                    >
                      Álbum
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }

    if (btnClicked && albums.length === 0) {
      return (
        <h2>Nenhum álbum foi encontrado</h2>
      );
    }
  }
}

ListAlbums.propTypes = {
  btnClicked: PropTypes.bool.isRequired,
  albums: PropTypes.arrayOf(PropTypes.shape({
    artistName: PropTypes.string,
  })).isRequired,
  nameArtist: PropTypes.string.isRequired,
};

export default ListAlbums;
