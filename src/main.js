
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

// this is an example of an immediately invoked function expression - iife
(function (win) {		//parameter is supplied as argument to iife below
	"use strict";

	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route){
				case 'about': Child = About; break;
				case 'authors': Child = Authors; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header />
					<Child />
				</div>
			);
		}
	});

	function render() {
		var route = win.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	win.addEventListener('hashchange', render);
	render();
})(window);		//this is the parm passed to the iffe