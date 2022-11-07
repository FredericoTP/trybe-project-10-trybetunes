import React from 'react';

class Loading extends React.Component {
  render() {
    return (
      <div className="spinner-border">
        <p className="visually-hidden">Carregando...</p>
      </div>
    );
  }
}

export default Loading;
