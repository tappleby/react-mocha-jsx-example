/** @jsx React.DOM */

var assert = require('chai').assert;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Header = require('../../src/components/Header');

describe('Header', function () {
	before('render and locate element', function () {
		this.header = TestUtils.renderIntoDocument(<Header />);
	});

	it('should contain logo', function () {
		var logo = TestUtils.findRenderedDOMComponentWithClass(this.header, 'foo-logo');
		assert.isDefined(logo, 'logo is defined');
		assert.equal(logo.getDOMNode().textContent, 'Foobar');
	});
});