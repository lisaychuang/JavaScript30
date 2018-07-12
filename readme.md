![](https://javascript30.com/images/JS3-social-share.png)

# What is JavaScript30

JavaScript 30 Day Challenge is created by @wesbos

Check out Wes' course at [https://JavaScript30.com](https://JavaScript30.com)

The idea is to build 30 projects with vanilla Javascript! No compiler, frameworks, or external libraries.

# Concepts Learned

I will be keeping track of the various JS & CSS concepts learned in my branch `study-notes`. The original Javascript30 starter file are kept on the `master` branch!

## Project 1: JavaScript Drum Kit

### [Data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*):

The `data-*` global attributes form a class of attributes called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation by scripts. 

The `*` may be replaced by any name following the production rule of xml names with the following restrictions:

* the name must not start with xml, whatever case is used for these letters;
* the name must not contain any semicolon (U+003A);
* the name must not contain capital A to Z letters.

Data attribute values can be accessible via:
`HTMLElement.dataset.attributeName` OR
`HTMLElement.dataset[attributeName]` OR
`HTMLElement[data-key="attributeName"]`

### [Document vs Window objects](http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/)

* `Window` is the first thing that gets loaded into the browser
* `Document` object is your html, aspx, php, or other document that will be loaded into the browser

To access a property for the window it is window.property, if it is `document` it is `window.document.property` which is also available in short as `document.property`.

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
* `toggle( String [, force] )`
When only one argument is present: Toggle class value; 
(if class exists then remove it and return false, if not, add class and return true)

When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
* `contains(str)` - checks if specified class value exists
* `replace(oldClass, newClass)` - Replaces an existing class with a new class.

### [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Sets a timer which executes a function or specified piece of code once after the timer expires.

* Wes noted that if you are using the [`transition` property](https://www.w3schools.com/cssref/css3_pr_transition.asp) in CSS, using `setTimeout` in your JS may result in transitions becoming out of sync. For this reason, Wes attaches a listener on the `transitionend` event

* A timeout may also take longer to fire than anticipated, caused by browser throttling and code execution sequence on single thread apps. [Read more about these potential delays here.](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

### [transitionend](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
The `transitionend` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the `transition-property` is removed or `display` is set to "none", then the event will not be generated.

### [animationend](https://developer.mozilla.org/en-US/docs/Web/Events/animationend)
 
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

### [transition-timing-function](https://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp)

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

```js
let x = querySelectorAll(selector)
Array.prototype.slice.call(x);
```

Or use `Array.from()`:

```js
let x = querySelectorAll(selector)
Array.from(x);
```

### [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

The `HTMLElement.dataset` property allows access, both in reading and writing mode, to all the custom data attributes (`data-*`) set on the element, either in HTML or in the DOM.

- `dataset` property itself can be read, but not directly written
- all writes must be to `dataset.property`, which in turn represent the data attributes.

## Project 4: Array cardio 1

### [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

The `filter()` method calls a provided `callback` function once for each element in an array, and constructs a new array of all the values for which callback returns a value that returns `true` or `truthy`

### [Console.table](https://developer.mozilla.org/en-US/docs/Web/API/Console/table)

This function takes one mandatory argument `data`, which must be an array or an object, and one additional optional parameter `columns`.

It logs `data` as a table. Each element in the array (or enumerable property if `data` is an object) will be a row in the table.

### [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

Syntax: `arr.sort([compareFunction])`

The `sort()` method sorts the elements of an array in place and returns the array, using a `compareFunction` to determine the sort order. Array elements are sorted according to the return value of the `compareFunction`:
- If `compareFunction(a, b)` < 0, sort `a` to an index lower than `b`, i.e. `a` comes first
- If `compareFunction(a, b)` = 0, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements
- If `compareFunction(a, b)` > 0, sort `b` to an index lower than `a`, i.e. `b` comes first.

Example:
```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

### [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

Syntax: `arr.reduce(callback[, initialValue])`

The `reduce()` method applies a function against an `accumulator` (like a running total) and each element in the array (from left to right) to reduce it to a single value.

Example:

```js
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum is 6
```

### [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

The `Node.textContent` property represents the text content of a node and its descendants.

Internet Explorer introduced `node.innerText`. The intention is similar but with the following differences:

- While `textContent` gets the content of all elements, including `<script>` and `<style>` elements, `innerText` does not.
- `innerText` is aware of style and will not return the text of hidden elements, whereas `textContent` will.

Quite often, in order to retrieve or write text within an element, people use `innerHTML`. `Element.innerHTML` returns the HTML as its name indicates.  However, `textContent` often has better performance because the text is not parsed as HTML, and can prevent XSS attacks.

### [String.prototype.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

The `includes()` method determines whether one string may be found within another string, returning `true` or `false` as appropriate.

### [String.prototype.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

The `indexOf()` method returns the index within the calling `String` object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

## Project 5: Flex Panels Image Gallery

### [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox)

Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. The key feature of flexbox is the fact that items in a flex layout can grow and shrink. Space can be assigned to the items themselves, or distributed between or around the items.

Learn more about Flexbox with Wes through his [Flexbox course](https://flexbox.io/) - a 20 video course series!

#### `display`
A flexbox layout is defined using `display:flex` or `display:inline-flex` on the parent item (e.g. `div`). This element then becomes a `flex container`, and each one of its children becomes a `flex item`. 

An element can be both a `flex container` and a `flex item`!

#### `flex`
The `flex` CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets `flex-grow`, `flex-shrink`, and `flex-basis`.

#### [flex-basis](https://css-tricks.com/almanac/properties/f/flex-basis/)
Specifies the initial size of the flex item, before any available space is distributed according to the flex factors. 

## Project 6: Ajax Type Ahead Search Form

### [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used `XMLHttpRequest`, but the new API provides a more powerful and flexible feature set.

`Fetch` provides a generic definition of `Request` and `Response` objects.

The `fetch()` method takes one mandatory argument, the path to the resource you want to fetch. It returns a `Promise` that resolves to the `Response` to that request, whether it is successful or not. You can also optionally pass in an `init` options object as the second argument.

Once a `Response` is retrieved, there are a number of methods available to define what the body content is and how it should be handled.

### [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

A `Promise` is a proxy for a value not necessarily known when the promise is created. It is an object which represents the eventual completion (or failure) of an asynchronous operation and resulting value.

A promise allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a `Promise` to supply the value at some point in the future.

A `Promise` is in one of these states:

* `pending`: initial state, neither fulfilled nor rejected.
* `fulfilled`: meaning that the operation completed successfully.
* `rejected`: meaning that the operation failed.

Instead of passing callbacks into a function, we can attach callback functions to a `Promise` object - an asynchronous function call. 

Example:
```js
const promise = doSomething(); 
promise.then(successCallback, failureCallback);
```

Or:
```js
doSomething().then(successCallback, failureCallback);
```

* Callbacks attached to a `Promise` will never be called before the completion of the current run of the JavaScript event loop.
* Multiple callbacks may be added by calling `.then` several times, to be executed independently in insertion order.

Read more about [using promises here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

### [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)

The `Response` interface of the `Fetch API` represents the response to a request, which has many properties and methods. For example:

#### Properties
* `Response.ok`: Contains a boolean stating whether the response was successful (status in the range 200-299) or not
* `Response.statusText`: Contains the status message corresponding to the status code (e.g., OK for 200).
* `Response.body`: the body of the response/request, allowing you to declare what its content type is and how it should be handled.

#### Methods
* `Response.clone()`: Creates a clone of a Response object.
* `Body.json()`: Takes a `Response` stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.
* `Body.formData()`: Takes a `Response` stream and reads it to completion. It returns a promise that resolves with a FormData object.

### [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)

In Wes's video, he named the returned value of `fetch(endpoint)` as a `blob`. Per MDN definition:

A `Blob` object represents a file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. 

### [ES6 Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

`Spread syntax (...)` allows an iterable such as an array or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

### [RegExp()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

The `RegExp` constructor creates a regular expression object for matching text with a pattern.

Learn more about using [Regular Expressions here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### [String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

The `match()` method retrieves the matches when matching a string against a regular expression.

### [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

The `replace()` method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a `RegExp`, and the replacement can be a string or a function to be called for each match.

## Project 7: Array Cardio Day 2

### [Date.prototype.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear)

The `getFullYear()` method returns the year of the specified date according to local time. Use this method instead of the `getYear()` method - as it has been deprecated!

### [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

Syntax: `arr.some(callback[, thisArg])`

The `some()` method tests whether at least one element in the array passes the test implemented by the provided callback function.

`some()` executes the callback function once for each element present in the array until it finds one where callback returns a `truthy` value. 

If such an element is found, `some()` immediately returns `true`. Otherwise, `some()` returns `false`.

### [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

Syntax: `arr.every(callback[, thisArg])`

The `every()` method tests whether all elements in the array pass the test implemented by the provided callback function.

The `every()` method executes the provided callback function once for each element present in the array until it finds one where callback returns a `falsy` value. If such an element is found, the `every()` immediately returns `false`. Otherwise, `every()` returns `true`.

### [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

Syntax: `arr.find(callback[, thisArg])`

The `find()` method returns the value of the first element in the array that satisfies the provided callback function. Otherwise `undefined` is returned.

### [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

Syntax: `arr.findIndex(callback[, thisArg])`

The `findIndex()` method returns the index of the first element in the array that satisfies the provided callback function.  If the callback never returns a `truthy` value or the array's length is 0, `findIndex()` returns -1. 

### [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) vs [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

`splice() `method changes the contents of an array by removing existing elements and/or adding new elements.  It will return an array containing the **deleted elements.**

Syntax: `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

Example:

```js
# Remove 0 element, insert 'drum'
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed
```

```js
# Remove 1 element from index 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

`slice()` method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will **not be modified.**

Syntax: `arr.slice([begin[, end]])`

Example: 
```js
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

## Project 8: HTML5 Canvas

### [window.innerWidth()](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) & [ window.innerHeight()](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)

* `window.innerWidth()`: Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar.

* `window.innerHeight()`: Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.

### [<canvas>](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

The HTML `<canvas>` element provides an empty graphic zone on which specific JavaScript APIs can draw (such as Canvas 2D or WebGL). This can, for instance, be used to draw graphs, make photo composition or animations. 

`<canvas>` element has only two attributes, `width` and `height`. These are both optional and can also be set using DOM properties. When no width and height attributes are specified, the canvas will initially be 300 pixels wide and 150 pixels high.

Learn more with [MDN's Canvas tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)

#### [canvas.getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext)

Syntax: `var ctx = canvas.getContext(contextType, contextAttributes);`

The `HTMLCanvasElement.getContext()` method is used to obtain the rendering context and its drawing functions. 

`getContext()` takes one parameter, the type of context:

* `"2d"` leading to the creation of a `CanvasRenderingContext2D` object representing a two-dimensional rendering context.
* `"webgl"` (or `"experimental-webgl"`) which will create a `WebGLRenderingContext` object representing a three-dimensional rendering context. 

#### [CanvasRenderingContext2D](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D)

The `CanvasRenderingContext2D` interface is used for drawing rectangles, text, images and other objects onto the canvas element. It provides the 2D rendering context for the drawing surface of a <canvas> element.

`CanvasRenderingContext2D` has many methods for drawing rectangles, text, paths etc, and to customize styles for these drawings.  In this project, we used:

* `strokeStyle()`: Color or style to use for the lines around shapes. 
* `lineJoin()`: Defines the type of corners where two lines meet. Possible values: `miter` (default), `round`, `bevel`.
* `lineCap()`: Type of endings on the end of lines. Possible values: `butt` (default), `round`, `square`.
* `lineWidth()`: Width of lines
* `beginPath()`: Starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path (e.g. a new line)
* `moveTo()`: Moves the starting point of a new sub-path to the `(x, y)` coordinates.
* `lineTo()`: Connects the last point in the subpath to the `(x, y)` coordinates with a straight line.
* `stroke()`: Strokes the subpaths with the current stroke style
* `globalCompositeOperation()`: a property of `CanvasRenderingContext2D` that sets the type of compositing operation to apply when drawing new shapes, where type is a string identifying which of the compositing or blending mode operations to use.

See [MDN docs with diagram explanation of each composition type](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)

### [MouseEvent.offsetX](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX) & [MouseEvent.offsetY](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetY)

* `offsetX` read-only property of the `MouseEvent` interface provides the offset in the X coordinate of the mouse pointer between that event and the padding edge of the target node. 
* `offsetY` read-only property of the `MouseEvent` interface provides the offset in the Y coordinate of the mouse pointer between that event and the padding edge of the target node. 

### [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

The `destructuring assignment` syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

The left-hand side of the assignment define what values to unpack from the sourced variable.

Example:

```js
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]
```

### [HSL cylindrical-coordinate system: `hsl()`](https://www.w3schools.com/cssref/func_hsl.asp)

`hsl()` function define colors using the **Hue-saturation-lightness model (HSL)**.

`HSL` stands for hue, saturation, and lightness - and represents a cylindrical-coordinate representation of colors.

Handy [HSL value reference](http://mothereffinghsl.com/)

## Project 9: DevTools Tricks

### [Console API reference](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)

Console API allow developers to write information to the Dev Tools console in browsers, create JavaScript profiles, and start a debugging session.

### [Pause Your Code With Breakpoints](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints)

In DevTools, there are several types of breakpoints available, which can be used to pause JS code for debugging:

* `Line-of-code`: Pause on an exact region of code.
* `Conditional line-of-code`: Pause on an exact region of code, but only when some other condition is true.
* `DOM`: Pause on the code that changes or removes a specific DOM node, or its children.
* `XHR`: Pause when an XHR URL contains a string pattern.
* `Event listener`: Pause on the code that runs after an event, such as when `click`, is fired.
* `Exception`: Pause on the line of code that is throwing a caught or uncaught exception.
* `Function`: Pause whenever a specific function is called.

Read [Get Started with Debugging JavaScript in Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/) to learn more.

#### [String substitution and formatting](https://developers.google.com/web/tools/chrome-devtools/console/console-write#string-substitution-and-formatting)

The first parameter passed to any of the logging methods may contain one or more format specifiers. A format specifier consists of a `%` symbol followed by a letter that indicates the formatting that applies to the value. 

Example: Using `string` and `digit` formatters to insert values into the output

```js
console.log("%s has %d points", "Sam", 100);  
// Sam has 100 points
```

* `%s`:	Formats the value as a string
* `%i` or `%d`:	Formats the value as an integer
* `%f`:	Formats the value as a floating point value
* `%o`:	Formats the value as an expandable DOM element. As seen in the Elements panel
* `%O`:	Formats the value as an expandable JavaScript object
* `%c`:	Applies CSS style rules to the output string as specified by the second parameter

#### `console.warn()`
Prints a message like `console.log()`, but also displays a yellow warning icon next to the logged message.

#### `console.error()`
Prints a message similar to `console.log()`, styles the message like an error, and includes a stack trace from where the method was called.

#### `console.info()`
Prints a message like `console.log(),` but also shows an icon (blue circle with white "i") next to the output.

#### `console.assert()`
Syntax: `console.assert(expression, object)`

Writes an `error` to the console when the evaluated expression is `false`.

#### `console.clear()`
Clears the console. However, if the `Preserve log` checkbox is enabled, `console.clear()` is disabled.

#### `console.dir()`

Prints a JavaScript representation of the specified object. If the object being logged is an `HTML element`, then the properties of its DOM representation are printed

#### `console.group()` and `console.groupEnd()`
Starts a new logging group with an optional title. 

All console output that occurs after `console.group()` and before `console.groupEnd()` is visually grouped together.

Example:

```js
function name(obj) {
  console.group('name');
  console.log('first: ', obj.first);
  console.log('middle: ', obj.middle);
  console.log('last: ', obj.last);
  console.groupEnd();
}

name({"first":"Wile","middle":"E","last":"Coyote"});
```

You can also use `console.groupCollapsed()` to create a logging group that is initially collapsed instead of open.

#### `console.count()`
Writes the number of times that `count()` has been invoked at the same line and with the same label.

Example:

```js
function login(name) {
  console.count(name + ' logged in');
}
```

See [Counting Statement Executions](https://developers.google.com/web/tools/chrome-devtools/console/track-executions#counting-statement-executions) for more examples.

#### `console.time()` and `console.timeEnd()`
Starts a new timer. Call `console.timeEnd()` to stop the timer and print the elapsed time to the Console.  You can also use labels to run multiple timers at the same time.

Example for running `console.time()` once:

```js
console.time('total');

let arr = new Array(10000);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Object();
  }
console.timeEnd('total');
// total: 3.696044921875ms
```
Example for running `console.time('total)` multiple times using label "total":

```js
console.time('total');
console.time('init arr');

let arr = new Array(10000);
  console.timeEnd('init arr');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Object();
  }
console.timeEnd('total');
// init arr: 0.0546875ms
// total: 2.5419921875ms
```

#### [performance.now()](https://developer.mozilla.org/en-US/docs/Web/API/Performance/now)

Wes also mentioned using `performance.now()`

The `performance.now()` method returns a `DOMHighResTimeStamp`, measured in milliseconds.  The returned value represents the time elapsed since the time origin.
 
`DOMHighResTimeStamp` type is a `double` and is used to store a time value. The value could be a discrete point in time or the difference in time between two discrete points in time.

## Project 10: Hold SHIFT to Check Multiple Checkboxes

### [Event Interface](https://developer.mozilla.org/en-US/docs/Web/API/Event)

The `Event` interface represents any event which takes place in the DOM; some are user-generated (such as mouse or keyboard events), while others are generated by APIs (such as events that indicate an animation has finished running, a video has been paused, and so forth).

### [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)

The MouseEvent interface represents events that occur due to the user interacting with a pointing device (such as a mouse). Common events using this interface include `click, dblclick, mouseup, mousedown, mouseenter etc`

`MouseEvent` properties covered in this project:

* `MouseEvent.shiftKey`: Returns true if the <kbd>shift</kbd> key was down when the mouse event was fired.

Other related properties:
* `MouseEvent.ctrlKey `: Returns true if the <kbd>control</kbd> key was down when the mouse event was fired.
* `MouseEvent.clientX`: The X coordinate of the mouse pointer in local (DOM content) coordinates.
* `MouseEvent.clientY`: The Y coordinate of the mouse pointer in local (DOM content) coordinates.

## Project 11: Custom HTML5 Video Player

### [HTMLMediaElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement)

The `HTMLMediaElement` interface adds to `HTMLElement` the properties and methods needed to support basic media-related capabilities that are common to audio and video. The `HTMLVideoElement <video>` and `HTMLAudioElement <audio>` elements both inherit this interface.

**Properties covered in this project:**
* `HTMLMediaElement.paused`: Returns a `Boolean` that indicates whether the media element is paused.
* `HTMLMediaElement.currentTime`: Gives the current playback time in seconds. Setting this value sets the media to the new playback time.
**Covered in project 28**
* `HTMLMediaElement.playbackRate`:  sets the rate at which the media is being played back. This is used to implement user controls for fast forward, slow motion, and so forth. The normal playback rate is multiplied by this value to obtain the current rate, so a value of 1.0 indicates normal speed.

**Methods covered in this project:**
* `HTMLMediaElement.play()`: Begins playback of media
* `HTMLMediaElement.pause()`: Pauses media playback
* `HTMLMediaElement.duration`: gives the length of the media in seconds, or zero if no media data is available.

### [HTML Video Element: <video>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)

The HTML Video element `<video>` embeds a media player which supports video playback into the document. You can use `<video>` for audio content as well, but the `<audio>` element may provide a more appropriate user experience.

### [Node.textContent](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

`Node.textContent` property represents the text content of a node and its descendants, and can be used to `get` or `set` the text content.

## Project 12: KONAMI CODE

Konami code was originally a cheat code that appears in many Konami video games - a sequence of buttons on the game controller that enable a cheat or other effects.  The code is also present as an Easter egg on a number of websites.

### [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key)

The KeyboardEvent.key read-only property returns the value of a key or keys pressed by the user. Its value is determined as follows:

See a [full list of key values here](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values)

### [CornifyJS](http://www.cornify.com/)

A JS library that randomly populars unicorn and rainbows on your webpage!

## Project 13: Image Slide In On Scroll

### [Debounce vs Throttle](https://css-tricks.com/the-difference-between-throttling-and-debouncing/)

Debouncing enforces that a function not be called again until a certain amount of time has passed. 
**"Execute this function only if 100 milliseconds have passed without it being called."**

Throttling enforces a maximum number of times a function can be called over time. 
**"Execute this function at most once every 100 milliseconds."**

### [window.scrollY](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY)

`scrollY` is a read-only property of `window`, which returns the number of pixels that the document is currently scrolled vertically.

The `pageYOffset` property is an alias for the `scrollY` property:

`window.pageYOffset == window.scrollY; // always true`

For cross-browser compatibility, use `window.pageYOffset` instead of `window.scrollY`.

### [window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)

Height (in pixels) of the browser `window` viewport including, if rendered, the horizontal scrollbar.

### [HTMLElement.offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)

`HTMLElement.offsetTop` is a read-only property, which returns the distance of the current element relative to the top of the closest relatively positioned parent element.

## Project 14: Objects and Arrays - Reference vs Copy

In this project, Wes explained **Passing By Value** and **Passing By Reference** concepts in Javascript with examples.  Researching further, I found this blog to be very helpful in explaining the two concepts:

[Javascript Passing by Value vs. Reference Explained in Plain English](https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c) by Chris D'Ascoli

### Pass by Value
There are 5 `primitive` values in Javascript: `undefined, null, boolean, string, numbers`

**Passing By Value** means that you have two variables in memory that are assigned to one another.   When we pass `primitives` by value, we are making a copy of the value of a variable stored in memory, say at address `0x001` and assigning it to a stored at `0x002`. 

Example:
```js
  let a;
  let b = 8;

  let a = b;

  console.log(b); // will return 8
```

Both `a` and `b` mirror each other as they are just copies of one another. 

### Pass by Reference

**Passing By Reference** relates to `objects` in Javascript (ALL objects including `array` and `functions`). Passing by reference involves having two references point to the same `object` in memory. 

This means you can mutate an `object/array/function` by assigning it to another object or passing it as a parameter to a function.

Example:
```js
let a = {language: "Javascript"}
let b = a

console.log(a) // => {language: "Javascript"}
console.log(b) => {language: "Javascript"}

a.language = "Ruby"

console.log(a) // => {language: "Ruby"}
console.log(b) // => {language: "Ruby"}
```

First, we created a variable `a` and set it equal to an object `{language: “Javascript”}`. 

The equals `=`operator recognizes that the value is an object, creates a new spot in memory, and points `a` to it. 

We then create a new variable `b` and set it equal to `a`. The equals `=` operator identifies we are dealing with objects and points `b` to the same location in memory that `a` is pointed to.

No new location or object in memory was created, rather both variables `a` & `b` are pointing to the SAME location (address).

So, when we mutate the value of variable `a`, changing “Javascript” to “Ruby”), the results of `a` & `b` are the same since `b` points to the same location as `a`.  

Therefore, in order to make a copy of an `object/array/function`, we have to use different methods:

### Copying Array
- [ES6 spread syntax `...`](https://github.com/lisaychuang/JavaScript30#es6-spread-syntax), method covered in Project 6
- [`Array.slice()`](https://github.com/lisaychuang/JavaScript30#arrayprototypesplice-vs-arrayprototypeslice) method covered in Project 7
- [`Array.prototype.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat): The `concat()` method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
- [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from): creates a new Array instance from an array-like or iterable object.

#### Copying Object - Shallow Copy

[`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign): The `Object.assign()` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

In another word, `Object.assign` performs a shallow copy and merges the original object's enumerable keys, but any nested properties remain shared between the original and the clone.

Syntax: `Object.assign(target, ...sources)`

However, there are some side effects with this method:

1. all accessors or properties with a `getter` and a `setter`, will be copied as data, invoking the `getter` during the copy
2. all `Symbol` keys, that are enumerable by default, will be copied too, making Symbols less private or protected than we think

[How To Copy Objects in JavaScript](https://www.webreflection.co.uk/blog/2015/10/06/how-to-copy-objects-in-javascript) is a helpful blog by Andrea Giammarchi, he also provided his patched version of `Object.assign` function that preserves accessors. 

[Understanding Object Cloning in Javascript](http://blog.soulserv.net/understanding-object-cloning-in-javascript-part-i/)is another useful blog for reference by Cédric Ronvel.

#### Copying Object - Deep Copy
When it is ok to share some data across variables, we can use shallow copy. 

However, when we need to clone a deep and complex data structure (e.g. a `tree`), we will have to perform a `deep copy`.  A `deep copy` will recursively clone every objects it encounters. The clone and the original object will not share anything, so the clone will be a fully distinct entity.

There's also an issue with `circular reference` - when an object  refers to itself in a property.

Example:

```js
function Foo() {
  this.abc = "Hello";
  this.circular = this;
}

var foo = new Foo();
alert(foo.circular.circular.circular.circular.circular.abc);
// foo contains a reference to itself.
```

Currently, there is no native mechanism to perform a deep copy in JavaScript. So, it is best to use external libraries such as [cloner](https://github.com/WebReflection/cloner) or [tree-kit](https://www.npmjs.com/package/tree-kit), frameworks often have their own libraries such as React's [immutability-helper](https://github.com/kolodny/immutability-helper)

Wes showed us that we can create a `deep clone` with: 

`JSON.parse(JSON.stringify(obj))`

- [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify): converts a JavaScript value to a JSON string
- [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse): parses a JSON string, then returns the JavaScript value or object described by the JSON string.

This is also the suggested solution on [MDN guides](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), and a great [StackOverflow thread](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript) discussed performance for various methods.

## Project 15: LocalStorage & Event Delegation

### [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage)
The `Storage` interface of the Web Storage API provides access to the `sessionStorage` or `localStorage` for a particular domain, allowing you to for example add, modify or delete stored data items.

[`LocalStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) allows you to access a `Storage` object for the current origin, the stored data is saved across browser sessions with no expiration set.

#### [Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
Syntax: `storage.getItem(keyName);`

When passed a key name, the `getItem()` method will return that key's value.

#### [Storage.setItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
Syntax: `storage.setItem(keyName, keyValue);`

when passed a key name and value, the `setItem()` method will add that key to the storage, or update that key's value if it already exists.

#### [Storage.clear()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear)
When invoked,  the `clear()` method will empty all keys out of the storage.

### [Event.preventDefault()](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
The `Event` interface's `preventDefault()` method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be. The event continues to propagate as usual, unless one of its event listeners calls `stopPropagation()` or `stopImmediatePropagation()`, either of which terminates propagation at once.

In this project, we used this method to stop the page from refreshing upon clicking the form `submit` button.

### [Event delegation](https://davidwalsh.name/event-delegate)

`Event delegation` allows us to avoid adding event listeners to specific nodes (e.g. `<li>` items once created).  

Instead, the event listener is added to one parent (e.g. `ul`).  That event listener analyzes bubbled events to find a match on child elements.  

## Project 16: CSS Text Shadow Mouse Move Effect
For block-level elements, `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight` describe the border box of an element relative to the `offsetParent`.

### [HTMLElement.offsetLeft](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft)
The `HTMLElement.offsetLeft` read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the `HTMLElement.offsetParent` node.

### [HTMLElement.offsetTop](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop)
The `HTMLElement.offsetTop` read-only property returns the distance of the current element relative to the top of the `offsetParent` node.

### [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)
The `Math.round()` function returns the value of a number rounded to the nearest integer.  However, there may be rounding errors due to `floating-number` arithmetic. 

Example: Rounding 1.005 should have an expected result of 1.01, but it returns 1.

### [CSS `text-shadow` property](https://www.w3schools.com/cssref/css3_pr_text-shadow.asp)
CSS Syntax: `text-shadow: h-shadow v-shadow blur-radius color|none|initial|inherit;`
JS Syntax: `object.style.textShadow="2px 5px 5px red"`

The text-shadow property adds shadow to text, default value is none.

## Project 17: Sorting Band Names without articles

### [Regular Expressions (Regex)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

Regular expressions are patterns used to match character combinations in strings. 

- [Handy JS Regex cheatsheet](https://www.debuggex.com/cheatsheet/regex/javascript)
- [RegExr sandbox](https://regexr.com/)

## Project 18: Tally String Times with Reduce

### [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
The `parseFloat()` function parses an argument and returns a floating point number.  We used this function to convert time from `string` to `number`.

### [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
The `Math.floor()` function returns the largest integer less than or equal to a given number.

## Project 19: Unreal Webcam Fun

### [Navigator interface](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

The `Navigator` interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

A `Navigator` object can be retrieved using the read-only `window.navigator` property.  The interface gives us access to several properties and methods.

#### [Navigator.mediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices)
The `Navigator.mediaDevices` read-only property returns a `MediaDevices` object, which provides access to connected media input devices like cameras and microphones, as well as screen sharing.

### [MediaDevices interface](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices)
The `MediaDevices` interface provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.

#### [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
The MediaDevices `getUserMedia()` method prompts the user for permission to use a media input which produces a `MediaStream` with tracks containing the requested types of media, e.g. video, audio etc.

It returns a `Promise` that resolves to a `MediaStream` object. If the user denies permission, or matching media is not available, then the promise is rejected with `PermissionDeniedError` or `NotFoundError` respectively.

### [URL interface](https://developer.mozilla.org/en-US/docs/Web/API/URL)
The URL interface represents an object providing static methods used for creating object URLs.

#### [Window.URL](https://developer.mozilla.org/en-US/docs/Web/API/Window/URL)
The `Window.URL` property returns an object that provides static methods used for creating and managing object URLs. It can also be called as a **constructor** to construct `URL` objects.

#### [URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)
The `URL.createObjectURL()` static method creates a `DOMString` containing a `URL` representing the object given in the parameter. The URL lifetime is tied to the document in the `window` on which it was created.

### [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
The `setInterval()` method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. It returns an `interval` ID which uniquely identifies the interval, so you can remove it later by calling `clearInterval()`. This method is offered on the `Window` and `Worker` interfaces.

### [CanvasRenderingContext2D](https://github.com/lisaychuang/JavaScript30#canvasrenderingcontext2d)
We learned about HTML Canvas in Project 8. The `CanvasRenderingContext2D` interface is used for drawing objects onto the `canvas` element.  

In this project, we used the following methods:

#### [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)
Syntax: `ctx.drawImage(image, dx, dy, dWidth, dHeight)`

`CanvasRenderingContext2D.drawImage()` method takes in several arguments:.

- `image`: An element to draw into the canvas context
- `dx`: The X coordinate in the destination canvas at which to place the top-left corner of the source `image`
- `dy`: The Y coordinate in the destination canvas at which to place the top-left corner of the source `image`
- `dWidth`: The width to draw the image, this allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
- `dHeight`: The height to draw the image. this allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.

#### [CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)
Syntax: `ctx.getImageData(sx, sy, sw, sh)`

The `CanvasRenderingContext2D.getImageData()` method returns an `ImageData` object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at `(sx, sy)` and has an `sw` width and `sh` height.`

#### [CanvasRenderingContext2D.globalAlpha](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
The `CanvasRenderingContext2D.globalAlpha` property specifies the alpha value that is applied to shapes and images before they are drawn onto the canvas. The value is in the range from 0.0 (fully transparent) to 1.0 (fully opaque).

### [ImageData Interface](https://developer.mozilla.org/en-US/docs/Web/API/ImageData)

The `ImageData` interface represents the underlying pixel data of an area of a `<canvas>` element, it has 3 properties:

- `ImageData.data`: Is a [`Uint8ClampedArray`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) representing a one-dimensional array containing the data in the RGBA order, with integer values between 0 and 255.

Example: `[255, 0, 0, 1] // red, green, blue, alpha`

**Note** The `Uint8ClampedArray` typed array represents an array of 8-bit unsigned integers clamped to 0-255. It has limited properties and methods, such as `.length()`.  However, it does not have higher order functions like `map` or `reduce` for iterating over the array elements.

- `ImageData.height`: the actual height, in pixels, of the `ImageData`.
- `ImageData.width`: the actual width, in pixels, of the `ImageData`.

## Project 20: Native Speech Recognition

### [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
The `Web Speech API` enables you to incorporate voice data into web apps. The Web Speech API has two parts: `SpeechSynthesis` (Text-to-Speech), and `SpeechRecognition` (Asynchronous Speech Recognition.)

- Speech recogition is accessed via the `SpeechRecognition` interface, which provides the ability to recognize voice context from an audio input (normally via the device's default speech recognition service) and respond appropriately. 

- Speech synthesis is accessed via the `SpeechSynthesis` interface, a text-to-speech component that allows programs to read out their text content (normally via the device's default speech synthesiser.) 

Different voice types are represented by `SpeechSynthesisVoice` objects, and different parts of text that you want to be spoken are represented by `SpeechSynthesisUtterance` objects. You can get these spoken by passing them to the `SpeechSynthesis.speak()` method.

[MDN Guide to Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

### [SpeechRecognition interface](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
The `SpeechRecognition` interface of the Web Speech API is the controller interface for the recognition service; this also handles the `SpeechRecognitionEvent` sent from the recognition service.

Generally you'll use the interface's constructor to create a new `SpeechRecognition` object:`SpeechRecognition.SpeechRecognition()` 

This object has a number of event handlers available for detecting when speech is input through the device's microphone.

`SpeechRecognition` methods used in this project:
-[SpeechRecognition.start()](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start)

The `start()` method of the `Web Speech API` starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current SpeechRecognition.

- [SpeechRecognition.interimResults](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults)
The `interimResults` property controls whether interim results should be returned (`true`) or not (`false`.) Interim results are results that are not yet final (i.e. `SpeechRecognitionResult.isFinal = false`)

The default value for `interimResults` is `false`.

## Project 21: Geolocation based Speedometer and Compass

### [NavigatorGeolocation](https://developer.mozilla.org/en-US/docs/Web/API/NavigatorGeolocation)
The `Navigator` interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

In this project, our user agent is a user's mobile phone.

`Navigator.geolocation` returns a `Geolocation` object allowing accessing the location of the device.

### [Geolocation interface](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
The `Geolocation` interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a website or app to offer customized results based on the user's location.

`Geolocation` methods used in this project:
- [Geolocation.watchPosition()](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition)

`watchPosition()` method is used to register a handler function that will be called automatically each time the position of the device changes. For example, `console.log(data)`. You can also specify an error handling callback function.

If successful, this method will return a `Position` object with data on the device's position.

#### [Position interface](https://developer.mozilla.org/en-US/docs/Web/API/Position)

The `Position interface` represents the position of the user device at a given time.  The `position` is represented by a `Coordinates` object which contains various data.

#### [Coordinates interface](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates)

The `Coordinates interface` represents the longitude, latitude, altitude of the device on Earth, current speed, as well as the accuracy with which these properties are calculated.

Some of [Coordinates properties](https://developer.mozilla.org/en-US/docs/Web/API/Coordinates):
- `Coordinates.latitude`
- `Coordinates.longitude`
- `Coordinates.altitude`
- `Coordinates.accuracy`
- `Coordinates.speed`
- `Coordinates.heading`
Returns a double representing the direction in which the device is traveling. This value, specified in degrees, indicates how far off from heading true north the device is and the direction is determined clockwise. 
  - True north = 0 degrees
  - East = 90 degrees
  - South = 180 degrees
  - West = 270 degrees

If speed is 0, heading is `NaN`. If the device is unable to provide heading information, this value is `null`.

## Project 22: Follow Along Highlight Links

### [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
The `Element.getBoundingClientRect()` method returns the size of an element and its position relative to the viewport.

The returned value is a `DOMRect` object which is the union of the rectangles returned by `getClientRects()` for the element, i.e., the CSS border-boxes associated with the element. 

The result is the smallest rectangle which contains the entire element, with read-only `left, top, right, bottom, x, y, width`, and `height` properties describing the overall border-box in pixels. 

Properties other than `width` and `height` are relative to the top-left of the viewport.

## Project 23: Speech Synthesis

In project 20, we learned to use the `SpeechRecognition` interface. In this project, we learned about the `SpeechSynthesisUtterance` interface to add speech service to our web app.

### [SpeechSynthesisUtterance interface](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)
The `SpeechSynthesisUtterance` interface of the Web Speech API represents a speech request. It contains the content the speech service should read and information about how to read it (e.g. language, pitch and volume.)

#### [SpeechSynthesisUtterance() constructor](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance)
The constructor returns a new `SpeechSynthesisUtterance` object instance, which has various properties that can get and set the language, pitch, speed, voice, volume of the utterance (or speech) to be spoken.

In this project, we defined these properties:

- `SpeechSynthesisUtterance.text`: Gets and sets the text that will be synthesised when the utterance is spoken.
- `SpeechSynthesisUtterance.pitch`: Gets and sets the pitch at which the utterance will be spoken at.
- `SpeechSynthesisUtterance.rate`: Gets and sets the rate at which the utterance will be spoken at.
- `SpeechSynthesisUtterance.voice`: Gets and sets the voice that will be used to speak the utterance.


### [SpeechSynthesis interface](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

The `SpeechSynthesis` interface of the Web Speech API is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech etc.

In this project, we used these methods:

- `SpeechSynthesis.getVoices()`: Returns a list of `SpeechSynthesisVoice` objects representing all the available voices on the current device. (e.g. English, French)

This list is retrieved with an event handler, `SpeechSynthesis.onvoiceschanged` which fires when the list of `SpeechSynthesisVoice` objects that would be returned by the SpeechSynthesis.getVoices() method has changed.

- `SpeechSynthesis.speak()`: Adds an `utterance` to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.
- `SpeechSynthesis.cancel()`: Removes all utterances from the utterance queue.


### [Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

Syntax: `function.bind(thisArg[, arg1[, arg2[, ...]]])`

`thisArg`: The value to be passed as the `this` parameter to the target function when the bound function is called. 
`arg1, arg2, ...`:
These arguments (if any) follow the provided `this` value, and are then inserted at the start of the arguments passed to the target function, followed by the arguments passed to the bound function, whenever the bound function is called.

MDN Guides provide two great examples showing how to create a `bound function` and a `partially applied function`.

In this project, we used the `.bind()` method in the `stopButton` event handler to create a partially applied function:

```js
function toggle(startOver = true){
    speechSynthesis.cancel();

    if (startOver) {
        speechSynthesis.speak(msg);
    };
}

stopButton.addEventListener('click', toggle.bind(null, false));
```

When the `stopButton` is clicked, the event handler will execute the `toggle()` function with an initial value `false`

i.e. `toggle(false)` which will call `speechSynthesis.cancel()` method to stop speech utterance.


## Project 24: Sticky Nav Bar

They key takeaway for this project was the need to account for nav bar height (`offsetHeight`) when we fix it to the top of page, and CSS tweaks.

### Fix Nav Bar
When user scroll past nav bar, we:

- added a `class` to `<body>` element
- account for nav bar's height by adding padding to `<body>`:
```js 
document.body.style.paddingTop = nav.offsetHeight; 
```

- updated CSS for `.fixed-nav nav`: change `position` from `relative` to `fixed`

### Logo Transition Animation
Note that CSS transitions do not work on auto dimensions!  Here's a great article by Brandon Smith, [Using CSS Transitions on Auto Dimensions](https://css-tricks.com/using-css-transitions-auto-dimensions/)
- updated CSS for `.fixed-nav li.logo`: change `max-width: 500px`

### Scale Up Content
Here, Wes scaled up the content (wrapped in `<div> `with class name `site-wrap`):
- updated CSS for `.fixed-nav .site-wrap`: change `transform` scale from 0.98 to 1

The [`scale()` CSS function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale) defines a transformation that resizes an element on the 2D plane. The amount of scaling is defined by a vector, so it can resize the horizontal and vertical dimensions at different scales.

Syntax: 
```js
scale(sx)  
// sx: A number representing the abscissa of the scaling vector.

scale(sx, sy)
// sy: A number representing the ordinate of the scaling vector. If not defined, its default value is sx, resulting in a uniform scaling that preserves the element's aspect ratio.
```

## Project 25: Event Capture, Propagation, Bubbling & Once

They key takeaway for this project is [DOM Event Architecture](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow). 

Here's a great diagram, showing an event dispatched in a DOM tree using the DOM event flow:
![DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)

Event objects are dispatched to an event target. But before dispatch can begin, the event object’s **propagation path** must first be determined. 

### Propagation path
Propagation is also known as an **event target chain** - the ordered set of current event targets though which an event object will pass sequentially on the way to and back from the event target.As the event propagates, each current event target in the propagation path is in turn set as the currentTarget.

Once the propagation path has been determined, the event object passes through one or more event phases:

### Event phases
* `Capture Phase`: The event object propagates through the target’s ancestors from the `Window` to the target’s parent
* `Target phase`:  The event object arrives at the event object’s event target. This phase is also known as the at-target phase. If the event type indicates that the event doesn’t bubble, then the event object will halt after completion of this phase.
* `Bubble phase`: The event object propagates through the target’s ancestors in reverse order, starting with the target’s parent and ending with the `Window`. 

 A phase will be skipped if it is not supported, all phases will be skipped if `stopPropagation()` has been called prior to the dispatch.

 ### [EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 

Syntax: 
```js
  target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
```

The `EventTarget` method `addEventListener()` sets up a function that will be called whenever the specified event is delivered to the target. 

* `type`: A case-sensitive string representing the event type to listen for (e.g. click, mousedown)
* `listener`: a callback function
* `options` (optional attributes): 
  * `capture`: a `Boolean`, if `false` the `capture phase` will be skipped
  * `once`: a `Boolean` indicating that the `listener`  should be invoked at most once after being added. If true, the listener would be automatically removed when invoked.
  * `passive` a `Boolean`, if `true` the `listener` will never call `preventDefault()`.

## Project 26: Stripe Follow Along Nav

### [setProperty()](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty)

Syntax: 
```js
  style.setProperty(propertyName, value, priority); 
```
`priority`: is a DOMString allowing the `important` CSS priority to be set. If not specified, treated as the empty string.

`setProperty()` method sets a new value for a property on a CSS style declaration object.

Example:
```js
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('transform', `translate(${coords.left}px,${coords.top}px)`);
```

## Project 27: Click and Drag

### [UIEvent.pageX](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageX)

In this project, Wes used `.pageX` to get the horizontal X coordinate of the `mousemove` event relative to the whole document. 

`UIEvent.pageY` gets the vertical Y coordinate of the `mousemove` event relative to the whole document. 

**NOTE** MDN notes that this feature is only valid on [MouseEvent interface](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)!  

### [Element.scrollLeft](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft)

`Element.scrollLeft` property gets or sets the number of pixels that an element's content is scrolled to the left.

The CSS [direction](https://developer.mozilla.org/en-US/docs/Web/CSS/direction) property sets the direction of text, table columns, and horizontal overflow. 
* `rtl`: for languages written from right to left (e.g. Chinese, Hebrew, Arabic)
* `ltr`: for languages written from left to right (e.g. English)

Note that if the element's direction of the element is `rtl` (right-to-left) then `scrollLeft = 0` when the scrollbar is at its rightmost position (at start of the scrolled content) and then increasingly negative as you scroll towards the end of the content.

## Project 28: Video Speed Controller
Added `UIEvent.pageY` and `HTMLMediaElement.playbackRate` to corresponding sections above.

### [Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

The `toFixed()` method formats a number using fixed-point notation, where a number that has a fixed number of digits after (and sometimes also before) the decimal point.

## Project 29: Countdown Timer

### [JavaScript Date instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

Syntax:
```js
  new Date();
  new Date(value);
  new Date(dateString);
  new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);
```

`Date` objects are based on a time value that is the number of milliseconds since 1 January 1970 UTC.

[`Date.now()` method]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now)): Returns the numeric value corresponding to the current time - the number of milliseconds elapsed since **January 1, 1970 00:00:00 UTC**, with leap seconds ignored.

### [Document.title](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)

The `document.title` property gets or sets the current title of the document.

