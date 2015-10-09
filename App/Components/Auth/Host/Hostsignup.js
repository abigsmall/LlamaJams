var React = require('react');

var HostSignup = React.createClass({
  
  render: function() {
    return (
      <button onClick={this.props.consoleLog} className='button-signup'> <span className='text-signup'>Sign up</span> </button>
    );
  }
});

module.exports = HostSignup;
