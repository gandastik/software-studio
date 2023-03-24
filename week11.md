> first week after midterm ps. missed one week (react lecture)

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
