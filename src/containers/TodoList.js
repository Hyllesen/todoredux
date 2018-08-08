import React, { Component } from "react";
import TodoLisItem from "../components/TodoListItem";

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        <TodoLisItem todoName="Wash clothes" />
        <TodoLisItem todoName="Do dishes" />
      </ul>
    );
  }
}
