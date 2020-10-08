import React from 'react';

class Articles extends React.Component {
  state = {
    content: [],
    isLoading: false,
    error: null,
  };

  getContent = (page) => {
    this.setState({
      ...this.state,
      isLoading: true,
    });
    fetch(`https://jsonmock.hackerrank.com/api/articles?page=${page}`)
      .then((res) => res.json())
      .then((json) =>
        this.setState({ ...this.state, content: json, isLoading: false })
      )
      .catch((error) => this.setState({ error, isLoading: false }));
  };

  componentDidMount() {
    this.getContent(1);
  }

  render() {
    const { isLoading, error } = this.state;

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    const { data, total_pages } = this.state.content;

    const listTitles = data ? (
      data.map((listTitle, index) => {
        if (listTitle.title) {
          return (
            <li key={`title-${index}`} data-testid="result-row">
              {listTitle.title}
            </li>
          );
        }
      })
    ) : (
      <div>no posts here</div>
    );

    const pageCount = total_pages
      ? [...Array(total_pages + 1).keys()].slice(1)
      : [];

    const buttons = total_pages ? (
      pageCount.map((number) => {
        return (
          <button
            data-testid="page-button"
            key={`page-button-${number}`}
            onClick={() => this.getContent(number)}
          >
            {number}
          </button>
        );
      })
    ) : (
      <div>Sorry no data</div>
    );

    return (
      <React.Fragment>
        <div className="pagination">{buttons}</div>
        <ul className="results">{listTitles}</ul>
      </React.Fragment>
    );
  }
}

export default Articles;
