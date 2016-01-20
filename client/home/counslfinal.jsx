import React from 'react';
var ReactDOM = require('react-dom');
import {mount} from 'react-mounter';
var Dropzone = require('react-dropzone');

LawFirms = new Mongo.Collection('lawfirms');

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
            <div>
                <Dropzone ref="dropzone" onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <button type="button" onClick={this.onOpenClick}>
                    Open Dropzone
                </button>
                {this.state.files.length > 0 ? <div>
                <h2>Uploading {this.state.files.length} files...</h2>
                <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
                </div> : null}
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
        <p>Hi Lawfirm</p>

        <form className="newforms" onSubmit={this.handleSubmit} >
          Law Firm:
          <input
            type="text"
            name="name"
            placeholder="ELT Partners"
            onChange={this.handleChange('name')}
            value={this.state.name}/>
          Email:
        <input
            type="text"
            name="email"
            placeholder="email"
            onChange={this.handleChange('email')}
            value={this.state.email}/>


          <input
            type="submit"
            value="Submit"/>
          <DropzoneDemo />
        </form>

      </div>
    )
  }
})
FlowRouter.route('/',{
  name: 'home',
  action: function(params, queryParams) {
    mount(Home, {name: 'home'});
  }});
