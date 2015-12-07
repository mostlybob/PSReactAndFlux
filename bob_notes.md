## 2015-12-07
- Redirects
  - gives ability to retire old links as application matures
  - handle common typos in URLs
  - redirect requests into a non-existent (or locked) virtual directory using wild cards


## 2015-12-03
- Demo: Links (cont'd)
  - demos how one declaration of the "about" route can be used in multiple areas
- Demo: NotFoundRoute
  - define a 404

## 2015-12-2
- Params & Querystrings
- at first bounce it's a little confusing, but I think I get it
  - it'll take some practice
  - here's his example:
  ```javascript
  // Given a route like this:
  //<route path="/course/:courseId" handler={Course} />

  // and a URL like this:
  //'/course/clean-code?module=3'

  // the component's props will be populated
  var Course = React.createClass({
  	render: function() {
  		this.props.params.courseId;	// "clean-code"
  		this.props.query.module;		// "3"
  		this.prop.path;							// "/course/clean-code?module=3"
  	}
  });
  
  ```
  - what's a little confusing to me is the notation of the route
  	- "/course/:courseId"
  	- his example uses a url like "/couse/clean-code?module=3"
  	- another example later uses a url like "/user/1"
  		- I recognize this a REST-style URL, but his route looks the same
  			- i.e. the above example could be "/course/3" and it would look for course id 3, I think
  		- I'm guessing this will make more sense later
- Demo: Links
	- ooh, nice idea about normalizing references to hyperlinks
		- keep the actual path in one place & use the refernces in the actual code; makes maintenance easier
	- the routes are already defined in route.js, the Link element is just using them

## 2015-12-1
- trying to sort out why page won't show
- console shows a couple of warnings
  - Warning: React.createElement: type should not be null or undefined. It should be a string (for DOM elements) or a ReactClass (for composite components).
  - Warning: Only functions or strings can be mounted as React components.
- found it: a typo in the RouteHandler declaration in app.js
- started Params and Querystrings

## 2015-11-29
- starting with Prop Validation
- interesting comment about only running in Dev version, not prod & that minified is prod
- Demo: Prop Validation
- Mixins
- React Router
  - Nested views to route nested routes
  - Declarative
  - used by FB
  - inspired by Ember
- Route Configuration
  - Route - Declaratively map a route
  - DefaultRoute - For URL of "/". Like "index.html"
  - NotFoundRoute - Client-side 404
  - Redirect - redirect to another route
- Demo: Route Configuration	
- Demo: Bootstrapping
  - interesting comment about using a directive instead of "use strict" to suspend linting: /*eslint-disable strict*/
  - some trouble with the defined routes; his are fine, but mine are complaining about not being able to find the author & about components:
  { [Error: Cannot find module './components/authorPage' from '/home/bob/workspace/react/coryhouse_ps/src']
  stream: 
		...

	- it looks like the additional path specifier is missing 
	- yep, I goofed the routes.js file & omitted the path to components
	- fixed linting errors, but still doesn't show
	  - JS console is showing a couple of errors

## 2015-11-28
- still having trouble with the Authors page rendering
  - console complains about Authors.render() not returning a valid ReactComponent, but I'm having a hard time finding it
- authorApi at http://bit.ly/authorapi
- got Authors to render by rerunning the video & retyping the code; I might go & look at the diff later
	- commit id e82c9b3
- finished Demo: Controller Views

- started on React Composition

## 2015-11-22
- reviewing: Demo: Simple Routing
  - immediately invoked function expression (IIFE - "iffy")

## 2015-11-16
- was able to sort out why the header wasn't rendering after adding the about section
  - had forgotten to take out the render statement at the end of main.js
  - figured it out because no matter what I did to the App class in main.js, it still rendered the Home, effectively ignoring the App class
  - once the render statement was removed, all worked as expected

## 2015-11-15

HTML in JS: A Justification
- he makes a number of good points justifying the seeming "mixing of concerns" in that other frameworks essentially put JS in HTML but React does the reverse, the benefit being that errors are easier to spot and fix, since JS is less tolerant of errors and when an error occurs, it's explicit about where the error occurs.

-installed Babel and Babel snippets packages for sublime

Virtual DOM
