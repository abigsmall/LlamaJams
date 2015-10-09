var React = require('react');
var Host = require('./host/host');
var Guest = require('./guest');

var AuthInputContainer = React.createClass({

  getInitialState: function() {
    return {
      updateCode: this.props.updateCode,
      showLoginSignupForm: false,
      showLoginForm: false,
      showSignupForm: false
    };
  },

  resetAuthView: function() {
    this.setState({
      showLoginSignupForm: false,
      showLoginForm: false,
      showSignupForm: false
    });
  },

  showForm: function(whichForm) {
    this.setState({showLoginSignupForm: true});
    if (whichForm === "login") {
      this.setState({showLoginForm: true});
    }
    if (whichForm === "signup") {
      this.setState({showSignupForm: true});
    }
  },

  render: function() {
    var authView;
    if (!this.state.showLoginSignupForm) {
      authView = <div>
                   <Guest {...this.props} />
                   <Host showForm={this.showForm} {...this.props} />
                 </div>;
    } else if (this.state.showLoginSignupForm) {
      authView = <Host showForm={this.showForm}
                  showLoginForm={this.state.showLoginForm}
                  showSignupForm={this.state.showSignupForm}
                  resetAuthView={this.resetAuthView}
                  {...this.props} />
    }

    return (<div>{authView}</div>);
  }
});

module.exports = AuthInputContainer;
