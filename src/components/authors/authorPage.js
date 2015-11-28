//used to display a list of authors

"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var Authors = React.createClass({
	getInitialState: function(){
		return {
			authors: []
		};
	},

	componentWillMount: function(){
		this.setState({ authors: AuthorApi.getAllAuthors() });
		/*
		To keep it simple, this is a synchronous call, since it
		is only calling to the local mocked API and will return
		instantaneously. In a real-world app, an async call using
		callbacks or promises etc.
		*/
	},

	render: function(){
		var createAuthorRow = function(author) {
			
			return (
				<div>
					<h1>Authors</h1>
					// <table className="table">
					// 	<thead>
					// 		<th>ID</th>
					// 		<th>Name</th>
					// 	</thead>
					// 	<tbody>
					// 		{this.state.authors.map(createAuthorRow, this)}
					// 	</tbody>
					// </table>
				</div>
			);
		};
	}
});

module.exports = Authors;