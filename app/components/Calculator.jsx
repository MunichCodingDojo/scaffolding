'use strict';

var React = require('react'),
    Calculator;

Calculator = React.createClass({
    getInitialState: function () {
        return {
            buttonText: 'Hello'
        }
    },

    handleClick: function (event) {
        event.preventDefault();

        if (this.state.buttonText === 'Hello') {
            this.setState({ buttonText: 'World' });
        } else {
            this.setState({ buttonText: 'Hello' });
        }
    },

    render: function () {
        return (
            <button onClick={this.handleClick}>
               { this.state.buttonText }
            </button>
        );
    }
});

module.exports = Calculator;
