/** @jsx React.DOM */

"use strict";

var React = require("react");
var Modal = require("react-bootstrap").Modal;

var KeptCounterForm = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.data.title
    };
  },

  handleCancel: function() {
    this.props.resetForm();
  },

  handleChangeTitle: function(event) {
    this.setState({title: event.target.value});
  },

  handleSubmit: function() {
    var rawId = this.refs.id.getDOMNode().value;
    var process = rawId ? this.props.update : this.props.create;
    process({
      type: "counter",
      id: rawId ? parseInt(rawId, 10) : null,
      title: this.refs.title.getDOMNode().value.trim()
    });
  },

  render: function() {
    return (
      <Modal title="Create new counter" onRequestHide={this.props.resetForm} animation={false}>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="modal-body">
            <input type="hidden" ref="id" defaultValue={this.props.data.id || ""} />
            <div className="form-group">
              <input ref="title" type="text" className="form-control"
                     placeholder="Title" value={this.state.title || ""}
                     onChange={this.handleChangeTitle} />
            </div>
          </div>
          <div className="modal-footer form-group">
            <button type="submit" className="btn btn-primary">Save</button>
            &nbsp;
            <a href="#" onClick={this.handleCancel}>Cancel</a>
          </div>
        </form>
      </Modal>
    );
  }
});

module.exports = KeptCounterForm;
