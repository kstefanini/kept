/** @jsx React.DOM */

"use strict";

var React = require("react");
var KeptCounterTask = require("./KeptCounterTask");

var KeptCounter = React.createClass({
  getInitialState: function() {
    return {count: this.props.data.count || 0};
  },

  // this is needed to map newly received props to current state
  componentWillReceiveProps: function(props) {
    this.setState({count: props.data.count});
  },

  getCount: function() {
    return this.props.data.count;
  },

  resetCount: function() {
    if (!confirm("Confirm reset?"))
       return;
    this.updateCount(0);
  },

  incrementCounter: function() {
    this.updateCount(this.state.count + 1);
  },

  updateCount: function(count) {
    this.props.update({
      type:"counter",
      id: this.props.data.id,
      title: this.props.data.title,
      count: count
    });
  },

  render: function() {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item"> {this.getCount()}
            <KeptCounterTask key={this.props.key} data={this.props.data} incrementCounter={this.incrementCounter} />
          </li>
        </ul>
        <p><a href="#" className="clear" onClick={this.resetCount}>Reset count</a></p>
      </div>
    );
  }
});

module.exports = KeptCounter;
