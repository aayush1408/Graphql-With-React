import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

//components
import BookList from './component/BookList';
import AddBook from './component/AddBook';

//appolo client setup
 const client = new ApolloClient({
   uri:'http://localhost:4000/graphql'
 })

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
       <h1>Book List</h1>
       <BookList />
       <AddBook />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
