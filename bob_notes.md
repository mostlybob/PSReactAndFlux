## 2015-12-16
- Build Controller View cont'd
  - getting error - ```Adjacent JSX elements must be wrapped in an enclosing tag while parsing file: /home/bob/workspace/react/PSReactAndFlux/src/components/authors/manageAuthorPage.js```  at the line that corresponds to the addition of the <AuthorForm />
    - seems the ```<h1>Manage Author</h1>``` is the problem; take it out and everything goes right
    - tried ```<p></p>```, ```<div></div>``` and ```<span></span>`, all with the same result
    - tried unmarked up text, got a different error
    - I will continue with the ```<h1></h1>``` and see what happens
  - after entering the html for the form, he checked the console to see this error
    - he addressed it by removing the ```<h1></h1>``` from the top level where the ```<AuthorForm/>``` element was located
    - basically what I discovered on my own :)
    - he did say he could wrap the ```<h1></h1>``` and ```<AuthorForm />``` in a div, but it didn't seem to work when I tried that

## 2015-12-15
- review forms
- Build Controller View
  - top level component can have smarts (marshal data, validation etc), but ought not have a lot of the actual markup
  - controller views provide a means of separating that away, allowing top component to pass data down to be rendered out by the child components


## 2015-12-08
- Demo: Locations
  - using ```HistoryLocation``` adds some load to the server and is limited/no support for older browsers
    - Cory has other things to say about the plumbing overhead it introduces
  - I'll check in the change that implements it in ```main.js``` but Cory pulls it out to keep the site simple
    - commit ```6279f54```

- Mixins
  - for cross-cutting concerns
  - share code between multiple components
  - Navigation Mixin

- React Forms
  - Validation
  - Redirects
  - Reusable inputs
  - User notifications
  - Saving & Population on load

- Create Manage Authors Page

- switched to ssh git (cloned to a new local folder)  

## 2015-12-07
- Redirects
  - gives ability to retire old links as application matures
  - handle common typos in URLs
  - redirect requests into a non-existent (or locked) virtual directory using wild cards
- Transitions
  - willTransitionTo - determine if page should be transitioned to
  - willTransitionFrom - runs checks before use navigates away
  - occurs on client side using React Router
  - examples of use:
    - willTransitionTo: verify user is logged in
    - willTransitionFrom: check if there is unsaved form data
  - completed example of willTransitionTo
  - willTranstionFrom
- Demo: Locations
  - note the differences between Hash Location & History Location styles of routing & effect on URLs
  - Hash Location
    - e.g. yourUrl.com#/courses
    - wider support (for older browsers)
  - History Location
    - e.g. yourUrl.com/courses
    - cleaner
    - HTML5-maintained stack; accessible via API: push state, replace state, pop state
    - not supported in IE 8, 9, Opera Mini, older stock Android browsers
    - isomorphic JS (server side JS rendering) can only be done using this style

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
