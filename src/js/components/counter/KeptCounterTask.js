/** @jsx React.DOM */

"use strict";

var React = require("react");

var KeptCounterTask = React.createClass({
  handleClick: function() {
    this.props.incrementCounter();
  },

  render: function() {
    return (
        <label className="counter-item-label pull-right">
          <input type="submit" value="+1" ref="increment" onClick={this.handleClick} />
        </label>
    );
  }
});

module.exports = KeptCounterTask;
