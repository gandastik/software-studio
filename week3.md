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
	- tabindex

### Image, Audio, Video
- Adding image to the page: `<img sr="image.png" alt="logo">`
- specify the size of image
- align
- border
- space

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