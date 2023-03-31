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