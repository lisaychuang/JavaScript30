![](https://javascript30.com/images/JS3-social-share.png)

# What is JavaScript30

JavaScript 30 Day Challenge is created by @wesbos

Check out Wes' course at [https://JavaScript30.com](https://JavaScript30.com)

The idea is to build 30 projects with vanilla Javascript! No compiler, frameworks, or external libraries.

# Concepts Learned

I will be keeping track of the various JS concepts learned in my branch *study-notes*. The original Javascript30 starter file are kept on the *master* branch!

## Project 1: JavaScript Drum Kit

### [Data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*):

The `data-*` global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts. 

The `*` may be replaced by any name following the production rule of xml names with the following restrictions:

* the name must not start with xml, whatever case is used for these letters;
* the name must not contain any semicolon (U+003A);
* the name must not contain capital A to Z letters.

### [Document vs Window objects](http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/)

* Window is the first thing that gets loaded into the browser
* Document object is your html, aspx, php, or other document that will be loaded into the browser

To access a property for the window it is window.property, if it is document it is window.document.property which is also available in short as document.property.

* An iframe actually is considered as a new window with its own document loaded into it
To access a frame is window.frames[], which is an array of all the frames. If you only have one iframe you access it by using window.frames[0].

Reference: 
[Window object properties](http://www.w3schools.com/jsref/obj_window.asp)
[Document object properties](http://www.w3schools.com/jsref/dom_obj_document.asp)

### [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

Using `classList` is a convenient way to access an element's list of classes (class names), with 6 methods available: 
* `add(str)` - add specified class values. If these classes already exist in attribute of the element, then they are ignored.
* `remove(str)` - remove specified class values. Removing a class that does not exist, does NOT throw an error.
* `item(num)` - Return class value by index number
* `contatins(str)` - checks if specified class value exists
* `replace(oldClass, newClass)` - Replaces an existing class with a new class.

### [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Sets a timer which executes a function or specified piece of code once after the timer expires.

* Wes noted that if you are using the [`transition` property](https://www.w3schools.com/cssref/css3_pr_transition.asp) in CSS, using `setTimeout` in your JS may result in transitions becoming out of sync. For this reason, Wes attaches a listenr on the `transitionend` event

* A timeout may also take longer to fire than anticipatd, caused by browser throttling and code execution sequence on single thread apps. [Read more about these potential delays here.](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

### [`transitionend`](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the `transition-property` is removed or `display` is set to "none", then the event will not be generated.

### [`animationend`](https://developer.mozilla.org/en-US/docs/Web/Events/animationend)
 
The animationend event is fired when a CSS animation has completed. 
In the case where an animation is removed before completion, such as if the `animation-duration` is removed or `display` is set to "none", then the event will not be generated.

## Project 2: CSS + JS Clock

### [CSS `transform` property](https://www.w3schools.com/cssref/css3_pr_transform.asp)
CSS Syntax: `transform: none|transform-functions|initial|inherit;`

The `transform` property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements

* `rotate(angle)` - Defines a 2D rotation, the angle is specified in the parameter

### [CSS `transform-origin` property](https://www.w3schools.com/cssref/css3_pr_transform-origin.asp)

CSS syntax: `transform-origin: x-axis y-axis z-axis|initial|inherit;`

The `transform-origin` property allows you to change the position of transformed elements.

2D transformations can change the x- and y-axis of an element. 3D transformations can also change the z-axis of an element.  

The default value is: `transform-origin: 50% 550% 0`

* Wes noted that the default value for `transform-origin` is 50% on the x-axis. To adjust the rotation pivot point on the most right of the clock hands, we can define:
`transform-origin: 100%` or `transform-origin: right` 

### [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp)

CSS syntax: `transition: property duration timing-function delay|initial|inherit;`

CSS transitions allows you to change property values smoothly (from one value to another), over a given duration.

To create a transition effect, you must specify two things:
* `transition-property` - CSS property you want to add an effect to
* `transition-duration` - Specifies how many seconds or milliseconds the transition effect takes to complete

### [`transition-timing-function`](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)

The `transition-timing-function` property specifies the speed curve of the transition effect.

This property allows a transition effect to change speed over its duration.

* In console, we can also click on the *Open Cubic Bezier Editor* icon next to the transition function to quickly edit the transition effect, then simply copy and paste the values into our CSS.

e.g. `transition-timing-function: cubic-bezier(0.1, 2.74, 1, 0.48)` 

## Project 3: CSS Variables and JS

### [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.

CSS variables allow a value to be stored in one place, then referenced in multiple other places. An additional benefit is semantic identifiers. 
For example `--main-text-color` is easier to understand than `#00ff00`, especially if this same color is also used in another context.

They are set using custom property notation (e.g. `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`)

**CSS variables can be updated with Javascript.** Whereas with [SASS variables](https://sass-lang.com/guide), variables are defined at compile time and cannot be changed after.

### [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)

`NodeList` objects are collections of nodes such as those returned by `document.querySelectorAll()` method. `NodeList` can be:

- Live collection: changes in the DOM are reflected in the collection (e.g. `Node.childNodes`)
- Static collection: any subsequent change in the DOM does not affect the content of the collection. (e.g. `document.querySelectorAll()`)

An `Array` has a lot more methods than a `NodeList`, such as `map(), reduce()`. We can convert a NodeList into an array:

`let x = querySelectorAll(selector)`
`Array.prototype.slice.call(x);`

### [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

The `HTMLElement.dataset` property allows access, both in reading and writing mode, to all the custom data attributes (`data-*`) set on the element, either in HTML or in the DOM.

- `dataset` property itself can be read, but not directly written
- all writes must be to `dataset.property`, which in turn represent the data attributes.