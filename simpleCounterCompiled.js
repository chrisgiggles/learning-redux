(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var initialState = 0;

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

var _Redux = Redux;
var createStore = _Redux.createStore;

var store = createStore(counter);

var render = function render() {
  ReactDOM.render(React.createElement(Counter, {
    value: store.getState(),
    onIncrement: function onIncrement() {
      return store.dispatch({ type: 'INCREMENT' });
    },
    onDecrement: function onDecrement() {
      return store.dispatch({ type: 'DECREMENT' });
    }
  }), document.getElementById('root'));
};

var Counter = function Counter(_ref) {
  var value = _ref.value;
  var onIncrement = _ref.onIncrement;
  var onDecrement = _ref.onDecrement;

  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      value
    ),
    React.createElement(
      'button',
      { onClick: onIncrement },
      '+'
    ),
    React.createElement(
      'button',
      { onClick: onDecrement },
      '-'
    )
  );
};

store.subscribe(render);
render();

},{}]},{},[1]);
