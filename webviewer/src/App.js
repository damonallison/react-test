import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';

//
//
//
// Forms
//
//
//
// There are two classifications of form elements.
//
// Controlled *recommended*
// * Managed by user code.
// * Add change handlers and binding
//
// Uncontrolled
// * DOM is the source of truth.
//
class App extends Component {

  state = { iframeSrc: '' }

  handleNavigation (iframeSrc) {
    this.setState({
      iframeSrc
    })
  }

  render() {
    return (
      <div>
        <Form onNavigate= { url => this.handleNavigation(url) } />
        <iframe
          style={{
              width: '100%',
              border: 0,
               marginTop: '2em'
          }}
          src={ this.state.iframeSrc} />
      </div>
    );
  }
}

export default App;
