import React from 'react';
var ReactDOM = require('react-dom');
import {mount} from 'react-mounter';
var Dropzone = require('react-dropzone');
MainLayout = React.createClass({
  render() {
    return <div>
      <header>
        This is our header
      </header>
      <main>
        {this.props.content}
      </main>
      <footer>
        This is our footer
      </footer>
    </div>
  }
});
