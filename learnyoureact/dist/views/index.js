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
    return _this;
  }

  _createClass(Todo, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        null,
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
    value: function handleChange(e) {
      this.state.checked = e.target.checked;
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

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoList).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: 'render',
    value: function render() {
      var todos = this.props.data.map(function (item) {
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
  tableContent: {
    border: "1px solid black"
  }
};

module.exports = TodoBox;
//# sourceMappingURL=index.js.map