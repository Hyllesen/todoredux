import React, { Component } from "react";

export default class TodoListItem extends Component {
  state = {
    lineThrough: false
  };

  constructor() {
    super();
    this.onClickTodoListItem = this.onClickTodoListItem.bind(this);
  }

  onClickTodoListItem() {
    console.log("You clicked");
    this.setState({ lineThrough: !this.state.lineThrough });
  }

  render() {
    console.log(this.state.lineThrough);

    return (
      <li
        onClick={this.onClickTodoListItem}
        className={this.state.lineThrough ? "lineThroughStyle" : null}
      >
        {this.props.todoName}
      </li>
    );
  }
}
