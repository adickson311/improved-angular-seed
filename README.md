# improved-angular-seed — the improved seed for AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
This seed is inspired by the original AngularJS seed project [https://github.com/angular/angular-seed]
The improvements (in progress) include recommendations from John Papa's styleguide [https://github.com/johnpapa/angular-styleguide]
and borrows ideas from [https://github.com/JshReynolds/angular-seed-styleguided]


## Getting Started

To get you started you can simply clone the improved-angular-seed repository and install the dependencies:

### Prerequisites

You need git to clone the improved-angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test improved-angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone improved-angular-seed

Clone the improved-angular-seed repository using [git][git]:

```
git clone https://github.com/swos-/improved-angular-seed.git
cd improved-angular-seed
```

If you just want to start a new project without the improved-angular-seed commit history then you can do:

```bash
git clone --depth=1 https://github.com/swos-/improved-angular-seed.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.

## Serving the Application Files

While angular is client-side-only technology and it's possible to create angular webapps that
don't require a backend server at all, we recommend serving the project files using a local
webserver during development to avoid issues with security restrictions (sandbox) in browsers. The
sandbox implementation varies between browsers, but quite often prevents things like cookies, xhr,
etc to function properly when an html page is opened via `file://` scheme instead of `http://`.


### Running the App during Development

The improved-angular-seed project comes preconfigured with a local development webserver.  It is a node.js
tool called [http-server][http-server].  You can start this webserver with `npm start` but you may choose to
install the tool globally:

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

Alternatively, you can choose to configure your own webserver, such as apache or nginx. Just
configure your server to serve the files under the `app/` directory.

## Contact

For more information on AngularJS please check out http://angularjs.org/

[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/

## To Do
* Wire up layout/* components
