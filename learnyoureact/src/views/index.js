'use strict';

const React = require('react');

class Todo extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this);
  }

  render() { return (
    <tr style={this.state.checked ?  style.checkedTodo : style.notCheckedTodo} >
      <td style={style.tableContent}>
        <input type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange} />
      </td>
      <td style={style.tableContent}>{this.props.title}</td>
      <td style={style.tableContent}>{this.props.children}</td>
    </tr>
  );}

  handleChange() {
    this.setState({ checked: !this.state.checked });
  }
}

class TodoBox extends React.Component {
  render() { return (
    <div className="todoBox">
      <h1>Todos</h1>
      <TodoList data={this.props.data} />
      <TodoForm />
    </div>
  );}
}

class TodoList extends React.Component {
  render() {
    const todos = this.props.data.map(item => {
      return <Todo title={item.title} key={item.title}>{item.detail}</Todo>
    });

    return (
      <div className = "todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todos}
          </tbody>
        </table>
      </div>);
  }
}

class TodoForm extends React.Component {
  render() { return (
    <div className="todoForm">
      I am a TodoForm.
    </div>
  );}
}

const style = {
  checkedTodo: {
    textDecoration: "line-through"
  },
  notCheckedTodo: {
    textDecoration: "none"
  },
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
