var React = require('react');

var HostButton = require('./hostbutton');
var HostSignup = require('./hostsignup');

var InputBar = require('./inputbar');

var Host = React.createClass({

  getInitialState: function() {
    return {
      showButton: true,
      showInputBar: false
    };
  },

  showInput: function() {

    // retrieve token from local storage
    var jwt = window.localStorage.getItem('token');

    //if token exists, take user to playlist
    if (jwt) {
      //take to playlist
    } else {
      this.setState({showButton: false});
      this.setState({showInputBar: true});
    }
  },

  render: function() {
    return (
      <div className='login-container'>
          <div>
            {this.state.showButton ? <HostButton showInput={this.showInput}/> : null}
            <HostSignup {...this.props}/>
          </div>
      </div>
    );
  }
});

module.exports = Host;
