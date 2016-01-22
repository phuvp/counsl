import React from 'react';
var ReactDOM = require('react-dom');
import {mount} from 'react-mounter';
var Dropzone = require('react-dropzone');

LawDb = new Mongo.Collection('lawdb');

var DropzoneDemo = React.createClass({
  getInitialState: function () {
    return {
      files: []
    };
  },
  onDrop: function (files) {
    this.setState({
      files: files
    });
  },

  onOpenClick: function () {
    this.refs.dropzone.open();
  },

  render: function () {
    return (
      <div id="dropzone">
        <Dropzone ref="dropzone" onDrop={this.onDrop}>
          <label>Try dropping some files here, or click to select files to upload.</label>
        </Dropzone>
        <button type="button" onClick={this.onOpenClick}>
          Open Dropzone
        </button>
        {this.state.files.length > 0 ? <label>
          <h2>Up {this.state.files.length} files...</h2>
          <label>{this.state.files.map((file) => <img src={file.preview} /> )}</label>
        </label> : null}
      </div>
    );
  }
});


var Home = React.createClass({
  getInitialState(){
    return{
      name:'',
      email:''
    }
  },
  handleChange: function (key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  },
  handleSubmit:function(){

    LawFirms.upsert(this.state)
  },
  render: function() {
    return (
      <div>
        <form id="msform" class='center' className="newforms" onSubmit={this.handleSubmit} >
          <fieldset>
            <h1 className="fs-subtitle">Law Firm Site Generator</h1>

            <input
              type="text"
              name="name"
              placeholder="ELT Partners"
              onChange={this.handleChange('name')}
              value={this.state.name}/>

            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={this.handleChange('email')}
              value={this.state.email}/>
            <DropzoneDemo />

            <input
              type="submit"
              className="submit action-button"
              value="Submit"/>
          </fieldset>
        </form>

      </div>
    )
  }
})
FlowRouter.route('/',{
  name: 'home',
  action: function(params, queryParams) {
    mount(Home, {name: 'home'});
  }
});
