import { gql } from 'apollo-boost';

export const getBooksQuery = gql`
  {
    books {
      id
      title
    }
  }
`;

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID) {
    book(id:$id) {
      id
      title
      genre
      author {
        id
        name
        age
        books {
          id
          title
        }
      }
    }
  }
`;

export const  addBookMutation = gql`
  mutation($title: String!, $genre: String!, $authorId: ID!) {
    addBook(title:$title, genre: $genre, authorId: $authorId) {
      title
      id
    }
  }
`;