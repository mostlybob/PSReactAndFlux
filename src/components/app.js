/*eslint-disable strict*/
// Disabling check because we can't run strict mode
//   - need global vars i.e. $

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHander;
$ = jQuery = require('jquery');

var App = React.createClass({

	render: function() {
		return (
			<div>
				<Header />
				<div className="container-fluid">
					<RouteHandler />
				</div>
			</div>
		);
	}
});

module.exports = App;