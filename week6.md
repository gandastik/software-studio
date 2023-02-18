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
- 