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
* `toggle( String [, force] )`
When only one argument is present: Toggle class value; 
(if class exists then remove it and return false, if not, add class and return true)

When a second argument is present: If the second argument evaluates to true, add specified class value, and if it evaluates to false, remove it.
* `contatins(str)` - checks if specified class value exists
* `replace(oldClass, newClass)` - Replaces an existing class with a new class.

### [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)

Sets a timer which executes a function or specified piece of code once after the timer expires.

* Wes noted that if you are using the [`transition` property](https://www.w3schools.com/cssref/css3_pr_transition.asp) in CSS, using `setTimeout` in your JS may result in transitions becoming out of sync. For this reason, Wes attaches a listener on the `transitionend` event

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

Or use `Array.from():

`let x = querySelectorAll(selector)`
`Array.from(x);`

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
```
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

```
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
```
const promise = doSomething(); 
promise.then(successCallback, failureCallback);
```

Or:
`doSomething().then(successCallback, failureCallback);`

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

```
# Remove 0 element, insert 'drum'
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
// removed is [], no elements removed
```

```
# Remove 1 element from index 3
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

`slice()` method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will **not be modified.**

Syntax: `arr.slice([begin[, end]])`

Example: 
```
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```