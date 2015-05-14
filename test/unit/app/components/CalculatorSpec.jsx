'use strict';

var expect = require('chai').expect,
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    Calculator = require('../../../../app/components/Calculator.jsx');

describe('Calculator component', function () {
    var calculatorElement;

    beforeEach(function () {
        calculatorElement = TestUtils.renderIntoDocument(<Calculator />);
    });

    it('should contain a button', function () {
        var button = TestUtils.findRenderedDOMComponentWithTag(calculatorElement, 'button');
        expect(button).to.be.ok;
    });

    describe('button text', function () {
        var button, buttonNode;

        beforeEach(function () {
            button = TestUtils.findRenderedDOMComponentWithTag(calculatorElement, 'button');
            buttonNode = React.findDOMNode(button);
        });

        it('should have the correct initial text', function () {
            expect(buttonNode.textContent).to.equal('Hello');
        });

        it('should replace the text on click', function () {
            expect(buttonNode.textContent).to.equal('Hello');

            TestUtils.Simulate.click(button);

            expect(buttonNode.textContent).to.equal('World');
        });

        it('should restore the original text after clicking the button twice', function () {
            expect(buttonNode.textContent).to.equal('Hello');

            TestUtils.Simulate.click(button);
            TestUtils.Simulate.click(button);

            expect(buttonNode.textContent).to.equal('Hello');
        });
    });
});
