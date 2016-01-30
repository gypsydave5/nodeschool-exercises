'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var Todo = (function (_React$Component) {
  _inherits(Todo, _React$Component);

  function Todo() {
    _classCallCheck(this, Todo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Todo).call(this));

    _this.state = { checked: false };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Todo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        { style: this.state.checked ? style.checkedTodo : style.notCheckedTodo },
        React.createElement(
          'td',
          { style: style.tableContent },
          React.createElement('input', { type: 'checkbox',
            checked: this.state.checked,
            onChange: this.handleChange })
        ),
        React.createElement(
          'td',
          { style: style.tableContent },
          this.props.title
        ),
        React.createElement(
          'td',
          { style: style.tableContent },
          this.props.children
        )
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange() {
      this.setState({ checked: !this.state.checked });
    }
  }]);

  return Todo;
})(React.Component);

Todo.propTypes = {
  title: React.PropTypes.string.isRequired
};

var TodoBox = (function (_React$Component2) {
  _inherits(TodoBox, _React$Component2);

  function TodoBox() {
    _classCallCheck(this, TodoBox);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoBox).apply(this, arguments));
  }

  _createClass(TodoBox, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'todoBox' },
        React.createElement(
          'h1',
          null,
          'Todos'
        ),
        React.createElement(TodoList, { data: this.props.data }),
        React.createElement(TodoForm, null)
      );
    }
  }]);

  return TodoBox;
})(React.Component);

var TodoList = (function (_React$Component3) {
  _inherits(TodoList, _React$Component3);

  function TodoList(props) {
    _classCallCheck(this, TodoList);

    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).call(this, props));

    _this3.state = {
      data: _this3.props.data,
      titleValue: "",
      detailValue: ""
    };
    _this3.changeTitle = _this3.changeTitle.bind(_this3);
    _this3.changeDetail = _this3.changeDetail.bind(_this3);
    _this3.addTodo = _this3.addTodo.bind(_this3);
    return _this3;
  }

  _createClass(TodoList, [{
    key: 'changeTitle',
    value: function changeTitle(event) {
      this.setState({ titleValue: event.target.value });
    }
  }, {
    key: 'changeDetail',
    value: function changeDetail(event) {
      this.setState({ detailValue: event.target.value });
    }
  }, {
    key: 'addTodo',
    value: function addTodo() {
      this.setState(function (oldState) {
        return {
          data: oldState.data.concat([{ title: oldState.titleValue, detail: oldState.detailValue }]),
          titleValue: '',
          detailValue: ''
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var todos = this.state.data.map(function (item) {
        return React.createElement(
          Todo,
          { title: item.title, key: item.title },
          item.detail
        );
      });

      return React.createElement(
        'div',
        { className: 'todoList' },
        React.createElement(
          'div',
          null,
          'Title:',
          React.createElement('input', { type: 'text', value: this.state.titleValue, onChange: this.changeTitle }),
          'Detail:',
          React.createElement('input', { type: 'text', value: this.state.detailValue, onChange: this.changeDetail }),
          React.createElement(
            'button',
            { onClick: this.addTodo },
            'Add'
          )
        ),
        React.createElement(
          'table',
          { style: { border: "2px solid black" } },
          React.createElement(
            'tbody',
            null,
            todos
          )
        )
      );
    }
  }]);

  return TodoList;
})(React.Component);

var TodoForm = (function (_React$Component4) {
  _inherits(TodoForm, _React$Component4);

  function TodoForm() {
    _classCallCheck(this, TodoForm);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoForm).apply(this, arguments));
  }

  _createClass(TodoForm, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'todoForm' },
        'I am a TodoForm.'
      );
    }
  }]);

  return TodoForm;
})(React.Component);

var style = {
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