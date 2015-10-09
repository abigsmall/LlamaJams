var React = require('react');
var Host = require('./host/host');
var Guest = require('./guest');

var Auth = React.createClass({

  getInitialState: function() {
    return {
      showLoginForm: false,
      showSignupForm: false
    };
  },

  showForm: function(whichForm) {
    if (whichForm === "login") {
      this.setState({showLoginForm: true});
    }
    if (whichForm === "signup") {
      this.setState({showSignupForm: true});
    }
  },

  resetAuthView: function() {
    this.setState({
      showLoginForm: false,
      showSignupForm: false
    });
  },

  render: function() {
    var authView;
    if (!this.state.showLoginForm && !this.state.showSignupForm) {
      authView = <div>
                   <Guest {...this.props} />
                   <Host showForm={this.showForm} {...this.props} />
                 </div>;
    } else {
      authView = <Host showForm={this.showForm}
                  showLoginForm={this.state.showLoginForm}
                  showSignupForm={this.state.showSignupForm}
                  resetAuthView={this.resetAuthView}
                  {...this.props} />
    }

    return (
      <div className='padded-container'>
        <img src='../../assets/img/llamalogo.png'/>

        {authView}

      </div>
    );
  }
});

module.exports = Auth;
