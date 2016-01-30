'use strict';

const React = require('react');

class Todo extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    onDelete: React.PropTypes.func.isRequired
  }

  constructor() {
    super();
    this.state = { checked: false }
    this.handleChange = this.handleChange.bind(this);
    this._onDelete = this._onDelete.bind(this);
  }

  render() { return (
    <tr style={this.state.checked ?  style.checkedTodo : style.notCheckedTodo} >
      <td style={style.tableContent}><button onClick={this._onDelete}>X</button></td>
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

  _onDelete() {
    this.props.onDelete(this.props.id.slice(5));
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
  constructor (props) {
    super(props);
    this.state = {
      data: this.props.data,
      titleValue: "",
      detailValue: ""
    };
    this.changeTitle = this.changeTitle.bind(this);
    this.changeDetail = this.changeDetail.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  changeTitle (event) {
    this.setState({titleValue: event.target.value});
  }

  changeDetail (event) {
    this.setState({detailValue: event.target.value});
  }

  addTodo () {
    this.setState(oldState => {
      return {
        data: oldState.data.concat([{title: oldState.titleValue, detail: oldState.detailValue}]),
        titleValue: '',
        detailValue: ''
      }
    });
  }

  handleDelete (id) {
    this.setState(oldState => {
      return {
        data: oldState.data.filter((todo, index) => {
          return Number.parseInt(id) !== index
        })
      }
    });
  }

  render () {
    const todos = this.state.data.map((item, index) => {
      return <Todo title={item.title}
                   key={index}
                   id={'todo-' + index}
                   onDelete={this.handleDelete}
             >{item.detail}</Todo>
    });

    return (
        <div className = "todoList">
        <div>
        Title:<input type="text" value={this.state.titleValue} onChange={this.changeTitle} />
        Detail:<input type="text" value={this.state.detailValue} onChange={this.changeDetail} />
        <button onClick={this.addTodo}>Add</button>
        </div>
        <table style={{border: "2px solid black"}}>
        <tbody>
        {todos}
      </tbody>
        </table>
        </div>
    );

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
