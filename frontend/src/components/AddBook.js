import React from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../graphql/queries';

class AddBook extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      genre: '',
      authorId: ''
    }
  }
  
  displayAuthors = () => {
    let data = this.props.getAuthorsQuery;
    if(data.loading) {
      return <option disabled>Loading Authors...</option>
    } else {
      return data.authors.map(author => {
        return <option value={author.id} key={author.id}>{author.name}</option>
      })
    }
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addBookMutation({
      variables: {
        title: this.state.title,
        genre: this.state.genre,
        authorId: this.state.authorId
      },
      refetchQueries: [{query: getBooksQuery}]
    });
  }

  render() {
    return(
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>

        <div className="field">
          <label htmlFor="title">Book title:</label>
          <input type="text" onChange={(e) => this.setState({title: e.target.value})}/>
        </div>

        <div className="field">
          <label htmlFor="name">Genre:</label>
          <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
        </div>

        <div className="field">
          <label htmlFor="name">Author:</label>
          <select onChange={(e) => this.setState({ authorId: e.target.value })}>
            <option>Select author</option>
            {this.displayAuthors()}
          </select>
        </div>

        <button type="submit">+</button>

      </form>
    );
  }

}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery'}),
  graphql(addBookMutation, {name: 'addBookMutation'})
)(AddBook);