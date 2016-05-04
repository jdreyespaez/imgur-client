var React = require('react');
var Header = require('./header');

module.exports = React.createClass({
  render: function() {
    return <div>
      I'm a header.
      {this.props.children}
    </div>
  }
});
