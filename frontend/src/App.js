import React from 'react';
import ApolloCient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// apollo client setup
const client = new ApolloCient({
  uri: 'http://127.0.0.1:8000/graphql'
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL Reading List</h1>
        <BookList />
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
