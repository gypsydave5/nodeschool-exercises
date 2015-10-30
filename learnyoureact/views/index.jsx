'use strict';

const React = require('react');

class TodoBox extends React.Component {
	render() { return (
		<div className="todoBox">
			<TodoList />
			<TodoForm />
		</div>
	);}
}

class TodoList extends React.Component {
	render() { return (
		<div className="todoList">
			I am a TodoList.
		</div>
	);}
}

class TodoForm extends React.Component {
	render() { return (
		<div className="todoForm">
			I am a TodoForm.
		</div>
	);}
}

module.exports = TodoBox;
