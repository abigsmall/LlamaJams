var React = require('react');
var Host = require('./host/host');
var Guest = require('./guest');

var Auth = React.createClass({

  render: function() {
    return (
      <div>
        <Guest {...this.props}/>
        <Host {...this.props}/>
      </div>
    );
  }
});

module.exports = Auth;
