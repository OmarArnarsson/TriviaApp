import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Questions from './components/Questions';
import { Component } from 'react';
//import { InMemoryCache } from 'apollo-cache-inmemory';

//const cache = new InMemoryCache();

const client = new ApolloClient({
 uri: 'http://localhost:5000/graphql'
 //cache
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client= { client }>
        <div className="App">
          
        </div>
        <Questions />
      </ApolloProvider>
    );
  }
}


export default App;
