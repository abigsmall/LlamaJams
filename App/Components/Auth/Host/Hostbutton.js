var React = require('react');

var HostButton = React.createClass({

  showLoginForm: function() {
    this.props.showLogin();
  },

  render: function() {
    return (
      <button onClick={this.showLoginForm} className='button-login'>
        <span className='text-login'>Login</span>
      </button>
    );
  }
});

module.exports = HostButton;
