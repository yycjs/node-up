# Node Up

---

## Take the leap

<a style="text-align: center; display: block; border: none;" href="https://www.leapmotion.com/"><img src="images/leap_logo.png" alt="Leap Motion Logo" /></a>

<iframe style="margin: 0 auto; display: block; padding-top: 20px;" width="560" height="315" src="http://www.youtube.com/embed/3b4w749Tud8" frameborder="0" allowfullscreen></iframe>

---

## Proudly presented to you by...

## David Luecke

* GitHub: [daffl.github.com](http://daffl.github.com), Twitter: [@daffl](http://twitter.com/daffl)

## Eric Kryski

* GitHub: [ekryski.github.com](http://ekryski.github.com), Twitter: [@ekryski](http://twitter.com/ekryski)

---

## Our Sponsors

## Assembly Co-working Space

![Assembly](images/sponsors/assembly_logo.png)

## Village Brewery

![Village Brewery](images/sponsors/village_brewery_logo_inverted.png)

---

## Last Month

### [jQuery, Templating, and Build Tools. Oh My!](http://yycjs.com/jquery-templates-builds)

* [Bower](http://twitter.github.com/bower/)
* [Bootstrap](http://twitter.github.com/bootstrap/)
* [Mustache](http://mustache.github.io/)
* [jQuery](http://jquery.com/)
* [Grunt](http://gruntjs.com/)

---

## NodeJS

[Node.js](http://nodejs.org/) is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

![NodeJS logo](images/nodejs.png)

---

## Modules

- __N__ode __P__ackage __M__anager

- CommonJS modules
- package.json

---

## Web development

Create `example.js` like this:

	!javascript
	var http = require('http');
	http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Hello World\n');
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

And run it like:

	% node example.js
	Server running at http://127.0.0.1:1337/


---

## Node Web Frameworks

- Express
- Flatiron
- Sails
- Locomotive
- Meteor
- Derby

---

## [Express](http://expressjs.com/)

Most popular and stable web framework for NodeJS


	!javascript
	var express = require('express');
	var app = express();

	app.get('/hello.txt', function(req, res){
	  res.send('Hello World');
	});

	// Statically serve files in the public/ folder
	app.use(express.static('public/'));

	app.listen(3000);
	console.log('Listening on port 3000');

---

## MongoDB

---

## Mongoskin

---

## Login

---

## Next Month

* Something awesome
* More awesomeness
