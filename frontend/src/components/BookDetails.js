import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../graphql/queries';

class BookDetails extends React.Component {

  displayBookDetails = () => {
    const { book } = this.props.data;
    if(book) {
      return (
        <div>
          <h2>{book.title}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by the author</p>
          <ul className="other-books">
            {book.author.books.map(b => (
              <li key={b.id}>{b.title}</li>
            ))}
          </ul>
        </div>
      )
    }
  }

  displayBooks = () => {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading books...</div>)
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id}>{book.title}</li>
        );
      });
    }
  }

  render() {
    

    return (
      <div className="BookDetails">
        {this.displayBookDetails()}
      </div>
    )
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetails);