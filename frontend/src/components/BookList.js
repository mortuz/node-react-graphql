import React from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../graphql/queries';
import BookDetails from './BookDetails';

class BookList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  displayBooks = () => {
    let data = this.props.data;
    if (data.loading) {
      return(<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={() => { this.setState({ selected: book.id })}}>{book.title}</li>
        );
      });
    }
  }

  render() {

    return (
      <div>
        <ul className="BookList">
          {this.displayBooks()}
        </ul>
        <BookDetails bookId={this.state.selected} />
      </div>
    )
  }
}

export default graphql(getBooksQuery)(BookList);