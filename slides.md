# Node Up

---

## Take the LEAP

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

# [jQuery, Templating, and Build Tools. Oh My!](http://yycjs.com/jquery-templates-builds)

* [Twitter Bower](http://twitter.github.com/bower/)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [Mustache](http://mustache.github.io/)
* [jQuery](http://jquery.com/)
* [Grunt](http://gruntjs.com/)

---

## NodeJS

[Node.js](http://nodejs.org/) is a platform built on Chrome's V8 JavaScript runtime for easily building fast, scalable network applications.

![NodeJS logo](images/nodejs.png)

* HTTP/HTTPS
* TCP/UDP Sockets
* Event Emitters
* Streams
* Files System Access
* Cross Platform

---

## Modules

### The [__N__ode __P__ackage __M__anager](https://npmjs.org)

- currently hosts ~ 28000 modules
- easy to use (`npm install <package>`)
- easy to publish (`npm publish`)
- use it with anything (folders, tarballs, git repositories)

### [CommonJS](http://www.commonjs.org/)

- Attempt for JavaScript API standardization

---

## CommonJS modules

Provides global `module`, `exports` and `require()` to define this files API

	!javascript
	// module1.js
	exports.hello = 'World';
	// or
	module.exports = {
		hello: 'World'
	}

Using the module

	!javascript
	// main.js
	var mod1 = require('./module1');

	console.log(mod1.hello); // -> World

---

## package.json

CommonJS specification for describing JavaScript packages

    !javascript
    {
      "name": "node-up",
      "version": "0.1.0",
      "author": "YYCJS <people@yycjs.com>",
      "description": "Server side JavaScript FTW!",
      "scripts": {
        "test": "mocha test",
        "start": "node lib/main.js"
      },
      "main": "./lib/main.js",
      "repository": {
        "type": "git",
        "url": "https://github.com/yycjs/node-up"
      },
      "dependencies": {
        "somePackage": "> 1.0.0"
      },
      "devDependencies": {
        "some-dev-only-package":  "*"
      },
      "license": "MIT"
    }

---

## Web Development

<br>
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

## Serving an HTML File

<br>

	!javascript
	var http = require('http');
	var fs = require('fs');

	http.createServer(function (req, res) {
		fs.readFile('index.html', function(error, data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
	  		res.end(data);
		});
	}).listen(1337, '127.0.0.1');
	console.log('Server running at http://127.0.0.1:1337/');

---

## Cloud Hosting

# Yes that infamous "CLOUD" buzzword.

<br>
![Cloud Hosting](images/cloud-hosting.png)

---

## We &#9829; Heroku

![Heroku logo](images/heroku-logo.png)

* Easy to get up and running
* Lots of third-party add ons
* Really easy to scale up and down
* 1 FREE Dyno Instance per app
* Just an all around awesome bunch of people!

---

## We need more...

![More cowbell!](images/cowbell.jpg)

---

## Node Web Frameworks

<table class="table centered">
	<thead>
		<tr>
			<th>Framework</th>
			<th>MVC</th>
			<th>Realtime</th>
			<th>Notes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="http://expressjs.com">Express</a></td>
			<td>&#x2718; *</td>
			<td>&#x2718; *</td>
			<td>Loosly based off Sinatra, the defacto framework right now</td>
		</tr>
		<tr>
			<td><a href="http://flatironjs.org/">Flatiron</a></td>
			<td>&#x2718; *</td>
			<td>&#x2718; *</td>
			<td>Module based, very modular, good docs</td>
		</tr>
		<tr>
			<td><a href="http://balderdashy.github.io/sails/">Sails</a></td>
			<td>&#10004;</td>
			<td>&#10004;</td>
			<td>Rails for Node. New but looks promising</td>
		</tr>
		<tr>
			<td><a href="http://locomotivejs.org/">LocomotiveJS</a></td>
			<td>&#10004;</td>
			<td>&#x2718; *</td>
			<td>Similar to above, just not as new and not real time.</td>
		</tr>
		<tr>
			<td><a href="http://meteor.com">Meteor</a></td>
			<td>&#10004;</td>
			<td>&#10004;</td>
			<td>Original ideas but doesn't follow NodeJS convention</td>
		</tr>
		<tr>
			<td><a href="http://towerjs.com">TowerJS</a></td>
			<td>&#10004;</td>
			<td>&#10004;</td>
			<td>Total Rails clone, and in CoffeeScript to boot</td>
		</tr>
		<tr>
			<td><a href="http://derbyjs.com/">Derby</a></td>
			<td>&#10004;</td>
			<td>&#10004;</td>
			<td>Very modular, quite fast, first real-time framework</td>
		</tr>
		<tr>
			<td><a href="http://geddyjs.org">Geddy</a></td>
			<td>&#10004;</td>
			<td>&#x2718; *</td>
			<td>Yet another Rails wannabe, nice website and docs</td>
		</tr>
		<tr>
			<td><a href="http://flams.github.io/olives/">Olives</a></td>
			<td>&#10004;</td>
			<td>&#10004;</td>
			<td>Written by our member Olivier, supports AMD</td>
		</tr>
	</tbody>
</table>

**\* Yes, with either coding style or modules**

---

## Express

[ExpressJS](http://expressjs.com/) is Most popular and stable web framework for NodeJS


	!javascript
	var express = require('express');
	var app = express();

	app.get('/hello.txt', function(req, res){
	  res.send('Hello World');
	});

	app.get('data', function(req, res) {
		res.json({
			message: "Hello world"
		})
	});

	// Statically serve files in the public/ folder
	app.use(express.static('public/'));

	app.listen(3000);
	console.log('Listening on port 3000');

---

## MongoDB

![MongoDB logo](images/mongodb-logo.png)

* Document Oriented Database
* Freaking Fast
* Easily Scalable & Maintainable
* Supports Geo Spatial Queries
* Now has full text search

---

## Mongoskin

* Wrapper on top of [node-mongodb-native](https://github.com/mongodb/node-mongodb-native) driver
* Provides nicer syntax than the native client
* Can do everything you can do in the MongoDB console

		!javascript
		var mongo = require('mongoskin');

		mongo.db('localhost:27017/testdb')
			.collection('blog')
			.find()
			.toArray(function (err, items) {
				console.dir(items);
			});


---

## Adding Login & Signup

![Great Success](images/great-success.jpg)

---

## Next Month

* Client Side MVC's!
* Moving our client side to [CanJS](http://canjs.us)
* More awesomeness
