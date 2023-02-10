> week 4 I'm sick 🤒

## Javascript & DOM

### Using HTML Script Tag

```javascript
<script>
//some script
</script>

<script type="text/javascript" src="yourfile.js">
</script>
```

- any number of `<script>` are allowed in HTML doc
- it can be placed in `<head>` or `<body>` or both
- trick: placing scripts at the bottom of `<body>` improves speed of page rendering

### External Javascript
- **Pros**
	- HTML and JS are separated physically
	- easier to maintain
	- proxy server or browser caches can store frequently used JS file

### Variables
- declaring using `var` or `let` keyword ps. but var is kinda deprecated
- variables are case sensitive
- avoid using reserved names
- variable "type" can include number, string, Boolean, and null
- javascript allows virtually any value to be assinged to any variables
- special character can be used in string type eg. `\t \n \\ \" \'`

![](https://media.discordapp.net/attachments/1014398974649708624/1073430743650410538/image.png?width=1185&height=685)

### Hoisting Behavior
- Hoisting is the behavior of moving all declarations to the top of the current scope
	- all variables in the scope can be used right from the start of the scope (before the declaration of variables)
	- only variables declared with var keyword  
- keyword `let` also has this behavior
	- but that `var` cannot be used before its declaring point

### Functions
- declaring function
```javascript
function funcName() {
	//code
}
```
- function names are case sensitive
- same naming syntax as the rest of variables
- parameter(s)

### Nameless
- aka. **anonymous function**
- function without name
	- `function() { ... }`
- usage:
	- immediately invoked function
	- using anonymous functions as arguments
	- assign the function to variables for calling later
- arrow function is a shorthand for declaring anonymous function
	- `let test = () => alert('Hello World')`

### Operators
- Maths
	- `+,-,*,/,%,++,--*`
- Assignment
	- `=,+=,-=,*=, /=, %=`
- Comparison
	- `==, !=, >, <, >=, <=, ===, !==`
- Logical
	- `&&, ||, !, &, |, ^, >>, >>>, <<`
	- ps `>>` preserved the sign bit while `>>>` doesn't 😯

### Conditional Statements
- If/else
- switch

### Loops
- for
- while
- do ... while

### Event Handlers
- **event** is something that happens when viewer of the page perform some actions such as clicking a mouse button
- can be used to identify the occuring event and then perform as task or a set of task 
- with event handler, the page can react to the action of the viewer
- each event handler responds to or applies to differnt objects (html elements)
- events
	- onblur
	- onclick
	- onfocus
	- onmouseover
	- onsubmit

### The Event object 🎴
- automatically created when an event occurs
- a number of properties
	- provide additional info about the event

### Web Workers 👨‍🏭
- a way to execute JS in the background without affecting the performance
- normally web workers are used for the CPU intensive script
- the script that run by a worker is always stored in a separated file
- to create web worker
```javascript
if (typeof(w) === "undefined") {
	w = new Worker("workers1.js")
}
```
- to receive message from worker
```javascript
w.onmessage = function(event) {
	window.aleart(event.data);
}
```
- to termitate the worker: `w.termiate();` or `w = undefined;`
- to send msg. out of the worker: `postMessage(message);`
- sending msg. into worker
```javascript
//main
const w = new Worker("worker1.js");
w.postMessage("message");

//worker
self.onmessage = function(msg) {
	console.log("received: ", msg);
}
```
- data exchanges between main and workers done by onmessage event
- a worker can create sub-worker

### Cookie 🍪
- cookies are data stored in small text file 😋
- cookie were invented to help server remember info about the user
	- eg. when user login, session info can be stored in a cookie
	- cookies are saved in name-value pairs
	- when browser sends request to a server, cookies of that page of the server are added to request message
- attributes
	- expires: expiry date of the cookie
	- domain: specifies which host to be sent cookie to
	- path: specifies which cookie to be sent to which URL
	- etc.
- create a cookie: `-document.cookie`
```javascript
document.cookie = "user=Hello World";

document.cookie = "user=Hello World;expires=Mon, 6 Feb 2023 12:00:00 UTC";

document.cookie = "username=John Doe;expires=Mon, 6 Feb 2023 12:00:00 UTC;path=/";
```
- read a cookie: `let i = document.cookie`
- change value of a cookie can be done in the same way as creating it
- delete a cookie can be done by setting expires attribute to a past date

### Web Storage 🗃️
- a way for web app. to store data locally
- before HTML5, data store in cookies
	- cookies are included in every request
		- less secure
		- limited amount a data to be stored
- web storage is per domain
	- all pages from the same domain can store and access the same data
- 2 objects:
	- `window.localStorage`: stores data with no expiration
	- `window.sessionStorage`: stores data for one session (data delted after the browser is closed)
- to check browser support `if (typeof(Storage) !== "undefined"`
- storing data
	- `localStorage.setItem("name", "John")` or
	- `localStorage.name="John"`
- retrieving data
	- `let n = localStorage.getItem("name")` or
	- `let ne = localStorage.name`
- removing data
	- `localStorage.removeItem("name")`
 