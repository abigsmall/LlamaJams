var React = require('react');
var helpers = require('../../../utils/helpers');

var LoginForm = React.createClass({

  createData: function(e) {
    e.preventDefault();
    var username = this.refs.username.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;

    //var playlistCode = helpers.createPlaylist(firstname);

    // update auth/playlist view state in Main
    //this.props.updateCode(playlistCode);
  },

  render: function() {
    return (
      <form onSubmit={this.createData}>
        <button onClick={this.props.goBack} className='button-auth-back'>
          <span className='text-auth-back'>&larr;back</span>
        </button>
        <br />
        <input className='input-login-username' type='text' placeholder='username' ref='username'/>
        <br />
        <input className='input-host-jam' type='text' placeholder='password' ref='password'/>
      </form>
    );
  }
});

module.exports = LoginForm;
