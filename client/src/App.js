import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Launches from './components/launches'
import Launch from './components/launch'
import ScrollToTop from './components/scrollToTop'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <ScrollToTop>
            <div className="container">
              <h1>DevNet/Space</h1>
              <Route exact path = "/" component={Launches} />
              <Route exact path = "/launch/:flight_number" component={Launch} />
            </div>
          </ScrollToTop> 
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
