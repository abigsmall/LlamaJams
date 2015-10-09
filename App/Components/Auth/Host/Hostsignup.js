var React = require('react');

var HostSignup = React.createClass({

  showSignupForm: function() {
    this.props.showSignup();
  },

  render: function() {
    return (
      <button onClick={this.showSignupForm} className='button-signup'>
        <span className='text-signup'>Sign up</span>
      </button>
    );
  }
});

module.exports = HostSignup;
