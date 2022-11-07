import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../style/ListAlbums.css';

class ListAlbums extends React.Component {
  render() {
    const { albums, btnClicked, nameArtist } = this.props;
    if (btnClicked && albums.length > 0) {
      return (
        <div className="listAlbums">
          <div className="listAlbums-h4">
            <h4>
              Resultado de álbuns de:
              {' '}
              { nameArtist }
            </h4>
          </div>
          <div className="listAlbums-albums">
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
                  <div key={ `${artistId}-${collectionName}` } className="album">
                    <img src={ artworkUrl100 } alt={ name } />
                    <p className="text-font-album">{ collectionName }</p>
                    <p className="text-font-album">{ name }</p>
                    <Link
                      className="btn btn-outline-dark link-album"
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
        <div className="text-font-album">
          <h2>Nenhum álbum foi encontrado</h2>
        </div>
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
