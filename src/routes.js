"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
	<Route name="app" path="/" handler={require('./components/app')}>
		<DefaultRoute handler={require('./components/homePage')} />
		<Route name="authors" handler={require('./components/authors/authorPage')} />
		<Route name="about" handler={require('./components/about/aboutPage')} />
		<Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
		<NotFoundRoute handler={require('./components/notFoundPage')} />
		<Redirect from="about-us" to="about" />		//example of a retired page
		<Redirect from="awthurs" to="authors" />	//example of typo page
		<Redirect from="about/*" to="about" />		//use wild cards to redirect any requests to subfolders back up to About
	</Route>
);

module.exports = routes;