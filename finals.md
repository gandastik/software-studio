## Overview

### Web Concept
![](https://media.discordapp.net/attachments/1014398974649708624/1108016907459760128/image.png?width=1225&height=685)
### Hypertext Transfer Protocol (HTTP)
- request - reply protocol (RR)
- HTTP Resources are identify by URI (or URL)
- 2 types of message
	- request message
	- response message
- HTTP Protocol (2 common methods)
	- Get: requesting resources
	- Post
![](https://media.discordapp.net/attachments/1014398974649708624/1108018313956700261/image.png)
- **query string** `q.php?id=123&name=John`
![](https://media.discordapp.net/attachments/1014398974649708624/1108022966727475240/image.png)
- datalength to be sent: get~4000, post=unlimited
- can send a chunk of data: get=no, post=yes
- location of data in message: get=URL, post=body
- can access CGI without using Form: get=yes, post=no
- can retreive file or other resource: get=yes, post=no

### HTML5
- released as a living-standard by WHATWG(Web Hypertext Application Technology Working Group) in 2012
- W3C developed a definitive HTML5
	- html5 released 2014
	- html5.1 2nd edition released 2017
	- html5.2 released 2017
### HTML
- Hypertext Markup Language
- Tags = tokens enclosed by angle brackets - < >
- Elements define the structure of document and lay the foundation for its presentstaion and manipulation, contained within one or two tags
- Attributes = Tag modifiers compose of 2 parts: name and value
- mostly case insensitive and not necessary to quote the value part of the attribute
- 

## HTML 💻
- Web page creation
- Main Idea: **use elements to structure the content**
- Several version
	- current -> HTML5
- HTML/XHTML

### Hypertext Markup Language
- Tags, Elements and Attributes
	- Tags คือ tokens enclosed by angle brackets **"< >"**
	- elements ถูก define โดย structure ของ documents และวางรากฐานสำหรับการ presentation and manipulation, contained within one or two tags
	- Attributes คือ tag modifiers ที่ประกอบไปด้วย 2 parts: name, values
- **mostly case insensitive and not necessary to quote the value part of the attributes**

#### HTML Element
![](https://media.discordapp.net/attachments/1014398974649708624/1068104461903470673/image.png)
- Relationship between elements are described in term from a family tree
	- Parent
	- Child
	- Grandchild and so on..

### HTML/XHTML
- same main idea 🤷🏻‍♂️
- HTML is too relaxed
	- hard to find a minor mistakes eg. `<h1>this is<i>KMITL</i></h1>` and `<h1>this<i>KMITL</h1></i>` -> "not a good practice"
- XHTML was then developed in 1998 by W3C to fix this issues
	- strengthen rules
	- version 2 -> (too strict, forces the developer to change behavior, has no new desired features, `/Failure`)

### HTML5
#### Dont break the web
- everything that was valid before HTML5 remains valid in HTML5

#### Pave the cowpaths
- standardizes the unofficial technics that is widely used

#### Be practical
- changes should have a practical purpose eg. if people are using the web to watch video, then support vide in HTML standard

#### things that are with HTML5 
- CSS3
- web workers
- forms
- offlines web apps
- audio & video
- new markup
- local storage
- canvas
- geolocation

### HTML Documents Structure
- document ของ HTML จะ valid ก็ต่อเมื่อมีคุณสมบัติตามดังนี้
	- the document type declaration
	- the document's **html** element
	- the **head** element inside of the **html** element
	- the **title** element and (optional) *link, script, base, meta* element inside of the **head** element
	- within the **html** elemetn after the **head** element must be **body** element
	- inside of **body** element, there must be at least 1 block element
- **Document Types**
	- declare which type the document are created
	- should be the very first thing in HTML document
	- contains information about HTML's version using in the page
- in HTML 4.01
	- using DTD file which defines the legal building block of the HTML document
	- 3 types: strict, transitional, frameset
- eg.
	- DOCTYPE = keyword, HTML = root element, PUBLIC = public type DTD, -//W3C// = formal public id, http://.... = URI of the DTD
	- `<!DOCTYPE> HTML PUBLIC"-//W3c//DTD HTML 4.01//EN" "http://../html4/strict.dtd"``
	- `<!DOCTYPE> HTML PUBLIC"-//W3c//DTD HTML 4.01//EN" "http://../html4/loose.dtd"``
	- `<!DOCTYPE> HTML PUBLIC"-//W3c//DTD HTML 4.01//EN" "http://../html4/frameset.dtd"``

### Document Structure
![](https://media.discordapp.net/attachments/1014398974649708624/1068118790233129023/image.png?width=947&height=685)

### Good HTML5 Practice
- including the optional `<html>, <head> and <body>` elements
- using **lowercase tags**
- using quotation marks around attribute values

#### XHTML5
- if HTML5 is too loose for you, XHTML5 may be your solution
- to use XHTML5 -> add xhtml namespace to the `<html>`
	- eg. `<html xmlns="https://www.w3.org/1999/xhtml"`

### Structuring Documents for the web
- Heading 6 levels from `<h1> to <h6>`
- Section: `<p>, <pre>, <br>, <address>`
- Phrase element: `<em>, <strong>, etc.`
- Presentation: `<b>, <i>, <u>, <sup>, <sub>, etc.`
- Lists: `<ul>&<li> <ol>&<li>`
- Editing: `<ins> and <del>`
- Structure & Grouping: `<article>, <header>, <footer>, <div>, <span>`
- Link: `<a>`
- Form: `<input>`

#### Absolute URL
- location: `http://www.test.ac.th` or `http://ww.test.ac.th/index.html`
#### Relative URL
- index.html to grade.html -> `<a href="student/grade.html>grade.html</a>"`

### Destination Anchor
- Destination anchor: `<a id="top">TOP</a>`
- Link to destination anchor: `<a href="#top">TOP</a>`
- other attributes of `<a>`
	- charset: `<a href="http://www.test.ac.th/ charset="ISO-8859-11>go</a>`
	- hreflang
	- target: `<a href="http://www.test.ac.th/ target="_blank">go</a>`
	- tabindex: `<a href="http://www.test.ac.th/ tabindex="1">go</a>`

### Image, Audio, Video
- Adding image to the page: `<img sr="image.png" alt="logo">`
- specify the size of image
- align
- border
- space: `<img src="image.png" hspace="15" vspace="15">`

### Form
- 2 attributes
	- action = usually specifies program that will receive information
	- method = specifies HTTP POST or HTTP GET to be used to carry information to the sever
- others
	- id
	- name(deprecated)
	- onsubmit = fire submit events
	- onreset = fire clear form event, its value is a script
	- enctype = uses with HTTP POST method to tell browser which kind of encoding to be used
		- application/x-www-form-urlencoded (default) = general data encoding
		- multipart/form-data = data encoding in case of uploading image or file
		- accept-charset = specifies character encoding used
		- target = specifies which frame the form's result will be displayed
- eg.
	- `<textarea name="something" rows="20" cols="50">`
	- `<input type="password">`
	- `<input type="submit">`
	- `<input type="reset">`
	- `<input type="image" src="submit.jpg">`
	- `<input type="checkbox">`
	- `<input type="radio">`
	- `<input type="file" accept="image/">`

### Semantic elements - document structure
- HTML4
	- `<div>`
	- `<span>`
- HTML5
	- `<header>`
	- `<footer>`
	- `<div>`
	- `<figure>`
	- `<aside>`
	- `<nav>`
	- `<section>`
	- `<main>`
- `<time>`: `<time datetime="2022-02-07">time</time>`

#### Client-side validation
- perform by browser
- use attributed "required"
- `<input type="text" required>`
#### Stop validate
- disable validate feature
- use attribute "novalidte" or "formnovalidate"
#### Regular Expression
- `<input type="text" pattern="[A-Z]{3}-[a-z]{2}-[0-9]{6}"`
##### New input types in HTML5
- email, url, search, tel, number, range, date, month, week, time*, color*

## CSS
- CSS: Cascading Style Sheets
- created by W3C
- 3 ways:
	- internal
	- external
	- inline
### Advantages of using CSS
- the presentation of the website can be centralized
- users can compose style sheet of their own for the website
- it is possible for users to select the CSS that suit their look and feel
- style sheets allow content to be optimized for more than 1 type of device
- using external CSS make the document size smaller

### Ways
- inline CSS: `<p style="color:blue;"></p>`
- internal CSS:
```
<head>
	<style>
		css
	</style>
</head>
```
- external import file with .css
```
<head>
	<link rel="stylesheet" type="text/css" href="xstyle.css">
	or
	@import url(xstyle.css);
</head>
```
- ordering
	- inline > internal and external > browser default

### CSS Rules and Syntax
- CSS can use white space and line break for purposes of readability
- comment text is put inside `/* */`
- CSS is composed of 2 parts
	- type selector or selector in short
	- declaration -> property:value
### Length and measurement options
- Absolute
	- in, cm, mm, pt -> 1 point = 1/72 inch, pc -> 1 picas = 12 points
- Relative
	- em: length relates to font-size (font-size:10px, 2em=20px)
	- ex: length relates to font-height
	- px: pixels (length relative to viewing device)
- Percentage
### Colors
- keywords: black, red, orange, etc.
- rgb: `rgb(128,128,128)`
- hexadecimal color: `color: #FF0000`
- short hex color: `color: #FFF`
### Selector
- address the target elements to be CSS-formatted
- a html tag
- can be grouping
- universal (wild card) selector
	- `*`: apply the CSS rule to the entire document
- contextual/descendant selectors
	- `div h1`
	- `div *` universal - descendant combination
- child selectors
	- `h2>em` direct child selector
- direct/indirect adjacent sibling combinators
	- `h2 + p`
- attribute selectors
	- `input[type="text"]`
- user-defined class and id selector

## Responsive Web Design
### Pseudo classse
- `:link`
- `a:hover`
- `div::first-line`

### Variables
- `--color: red;`
- `color: var(--color);`

### Content layout
- flex
- grid

### position
- relative
- absolute
- fixed
- sticky
- inherit

### Responsive (RWD)
- viewport = viewable area of browser
- media queries, breakpoints -> "shrink to fit"
- others
	- AWD: detects screen size (viewport) and then uses the most suitable static style
	- FWD: percentage for widths
	- Fixed Design: design based on fix pixel widths

### CSS Media queries
```
 @media screen and (min-width: n px)
```

## Bootstrap
- frontend framework
- layout
	- `.container`: max width at each breakpoint
	- `.container-fluid`: 100% width at all breakpoint
	- `.container-[breakpoint]`: 100% width until specific breakpoint

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

## Javascript & DOM

### DOM
- **Document Object Model**
- represents a document as a family tree
- a programming interface for HTML or XML

#### Levels of DOM
- level 0: supports an inteface DOM and refers to what existed before the standard
- level 1: allows Navigation of DOM, content manipulation
- level 2: support namespace, filtered views and event
- level 3: has many specifications
	- core
	- load and save
	- XPath
	- views and formatting
	- requirements
	- validation

#### Fundamental Data Types
- Document object
	- represent web page
- node: basic objecct within document
	- element: type of node
	- attribute
	- text 
	- comment etc.

#### DOM Tree
![](https://media.discordapp.net/attachments/1014398974649708624/1075966059900841994/image.png?width=964&height=685)

### DOM accessing
- every web browser uses DOM as a gateway to document for scripting language eg. Javascript

### Working with Document Object
- properties of document object
	- image property
	- form property
- method of document object
	- selecting elements
	- traversing elements
	- manipulating elements
	- attributes
	- manipulating styles

#### Selecting Elements
- getElementById
	- allow access to an element by the value of its id attribute
- getElementByName
	- if there are more than one elements with the same names this will return as a array filled with matched elements
- getElementByClassName
- getElementByTagName
- querySelector
	- select element(s) by using CSS selector
	 - querySelector(): select only first element that matched
	 - querySelectoAll(): select all elements that matched

#### Traversing Elements
- get parent node
	- node.parentNode
- get child nodes
	- node.firstChild
	- blah blah

#### Manipulating Elements
- createElement
- appendChild
- createTextNode
- textContent
- innerHTML
- removedChild

### Methods
- getAttribute(): get the values of attribute of an element
- setAttribute(): set the values of attribute of an element

#### Manipulating Style
- **Styles property**
- getComputedStyle
- className
- classList
- width & height

### Events
- normally used in combination with functionss
- eg.
	- abort: loading of a media is aborted
	- blur: element loses focus
	- change: content of element has changed
	- click: mouse clicks on element
	- focus: element gets focus

#### assignments
- making dom from js
- the time button -> at least 6 set of colors
	- chaning color every second
	- use web workers -> another script file

## React
- UI Library
- component-based
- react components
	- jsx
	- element & component
	- state & props
	- virtual DOM

### Props
- properties
- uni-directional (parent to child)
- passing data
- readonly

### States
- data storage within component
- creates and manages by component
- state cannot be passed to other components
- state changes -> DOM re-rendering
	- just a part of that component that state are in
- use callback function to pass data from child to parent

## Backend

### Web in general
![](https://media.discordapp.net/attachments/1014398974649708624/1088646582670475284/image.png)

### Early backend
- have to declared the web root directory
	- /www or
	- /wwwRoot or
	- /public_html

### Early backend with data handling
![](https://media.discordapp.net/attachments/1014398974649708624/1088647971979141190/image.png)
- CGI: Common Gateway Interface

### Early CGI
- develop wtih C/C++, perl etc.
- data transfer from web server to CGI via standard input (or system env. var.)
- data transfer from CGI to web server via standard output

### PHP (ASP)
- easier data input handling
	- automatic generate `$_GET, $_POST`
 - easier coding
	 - coding in html file
- integrates PHP intercepter into web server (optional)
#### Execution
![](https://media.discordapp.net/attachments/1014398974649708624/1088655072591892521/image.png)

### ASP
- classic ASP
- active server page
- developed by microsoft
- same concepts as PHP
- ASP command written witin <% ... %>
- based on VBscript syntax
#### example
```
<!DOCTYPE html>
<body>
	<p>ASP example: output HTML tag</p>
	 <%
	  response.write("<h1>Hello World!</h1>")
	 %>
	// <h1>Hello World1</h1>
</body>
</html>
```

### ASP.net
- release in 2002 as a successor to ASP
- normally used c# syntax
- uses .aspx as an extension
#### example
```
<!DOCTYPE html>
<html>
	<body>
	@{
		if (IsPost) {
			string companyname = Request["CompanyName"];
			string contactname = Request["ContactName"];
			<p>You entered: <br>
			Company Name: @companyname <br>
			Contact Name: @contactname
			</p>
		}
		else {
			<form method="post" action="">
				Company Name:<br>
				<input type="text" name="CompanyName" value=""><br>
				Contact Name:<br><br>
				<input type="text" name="ContactName" value=""><br><br>
				<input type="submit" value="Submit" class="submit">
			</form>
		}
	}
	</body>
</html>
```

### ASP/ASP.net
![](https://media.discordapp.net/attachments/1014398974649708624/1088659617506132008/image.png)

### ASP.net MVC -> ASP.net CORE MVC (2016)
- **MVC** = Model View Controller
	- model represent data
	- view is UI
	- controller is the request handler

#### MVC Architecture
![](https://media.discordapp.net/attachments/1014398974649708624/1088660143278923796/image.png)
#### Life cycle of MVC
![](https://media.discordapp.net/attachments/1014398974649708624/1088660312309379122/image.png)
#### ASP.net Core MVC
![](https://media.discordapp.net/attachments/1014398974649708624/1088660481541156864/image.png)

#### Controller-Model-View
![](https://media.discordapp.net/attachments/1014398974649708624/1088661360830845050/image.png?width=1229&height=685)

## MVC & Ajax

### ASP.Net Core MVC

### Handling Data

#### Conclusion #1
![](https://media.discordapp.net/attachments/1014398974649708624/1091186817740582983/image.png?width=1124&height=685)

##### Conclusion #2
![](https://media.discordapp.net/attachments/1014398974649708624/1091187060955693116/image.png?width=1114&height=685)
- chose either or both 🤷🏻‍♂️

#### Get Method
- `http://localhost:5001/Test01/Index/?fname=Jack` or
- `http://localhost:5001/Test01/?fname=Jack`
- in controller
```
public IActionResult Index(string fname) {
	ViewBag.Message = fname;
	return View();
}
```
- in view
```
<div>@ViewBag.Message</div>
```
#### Controller return
- View()
	- web page - html
	- view file in Views folder will be used to render response
- Content()
	- can be anything that MIME supports
	- fiexed type output
	- according to accept header of http message

#### Example
![](https://media.discordapp.net/attachments/1014398974649708624/1091187936164323418/image.png?width=1172&height=685)
#### Comsume http
![](https://media.discordapp.net/attachments/1014398974649708624/1091188117400211486/image.png?width=1148&height=685)

### AJAX
- Asynchronous Javascript And XML
