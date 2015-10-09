var React = require('react');

var HostButton = require('./hostbutton');
var HostSignup = require('./hostsignup');

var LoginForm = require('./loginform');
var SignupForm = require('./signupform');

var Host = React.createClass({

  getInitialState: function() {
    return {
      showButton: true,
      showInputBar: false,
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

  showLogin: function() {
    this.props.showForm("login");
  },

  showSignup: function() {
    this.props.showForm("signup");
  },

  goBack: function() {
    this.props.resetAuthView();
  },

  render: function() {
    var hostView;
    if (!this.props.showLoginForm && !this.props.showSignupForm) {
      hostView = <div>
                   <HostButton showLogin={this.showLogin} />
                   <HostSignup showSignup={this.showSignup} />
                 </div>;
    }
    if (this.props.showLoginForm) {
      hostView = <LoginForm goBack={this.props.resetAuthView} />;
    }
    if (this.props.showSignupForm) {
      hostView = <SignupForm goBack={this.props.resetAuthView} />;
    }

    return (
      <div className='login-container'>
        {hostView}
      </div>
    );
  }
});

module.exports = Host;
