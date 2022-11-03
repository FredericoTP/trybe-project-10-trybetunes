import React from 'react';
import Loading from '../components/Loading';

class Search extends React.Component {
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      return <Loading />;
    }
    return (
      <div data-testid="page-search">
        <p>Search</p>
      </div>
    );
  }
}

export default Search;
