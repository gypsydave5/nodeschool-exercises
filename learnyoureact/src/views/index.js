'use strict';

const React = require('react');

class Todo extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = { checked: false }
  }

  render() { return (
    <tr>
      <td style={style.tableContent}>
        <input type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange} />
      </td>
      <td style={style.tableContent}>{this.props.title}</td>
      <td style={style.tableContent}>{this.props.children}</td>
    </tr>
  );}

  handleChange(e) {
    this.state.checked = e.target.checked;
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
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
