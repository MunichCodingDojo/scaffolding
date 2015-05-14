'use strict';

var React = require('react'),
    Calculator = require('./components/Calculator.jsx'),
    mountNode = document.getElementById('calculator');

React.render(<Calculator foo="bar" />, mountNode);
