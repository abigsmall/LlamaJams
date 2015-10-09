var React = require('react');

var HostButton = React.createClass({
  
  render: function() {
    return (
      <button onClick={this.props.showInput} className='button-login'> <span className='text-login'>Login</span> </button>
    );
  }
});

module.exports = HostButton;
