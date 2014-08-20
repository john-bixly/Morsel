# Morsel

## Getting Started

#### This project is built with :
1. [masseuse](http://solid-interactive.github.io/masseuse/docs/index.html) - A view helper built on top of [backbone.js](http://backbonejs.org/)
1. [Grasshopper Admin / Api](http://grasshopper.ws) For the backend.

#### Locations :
[Admin](http://morsel-backend.herokuapp.com/admin)
[API Endpoint](http://morsel-backend.herokuapp.com)


#### Install bower components, npm dependencies, and gems using:

```shell
bower install && npm install && bundle install
```

#### Run a local server pointed at the external backend :

```shell
grunt server
```

Select local, and browser

#### For an android build

```shell
grunt android
```

(plug your android device in before)

#### app/dependencies

Here we will differentiate between browser and mobile, it chooses the correct one depending on your build.



Update your release notes using:

```shell
grunt releaseNotes
```

Then you probably want to commit the bower dependencies and the newly generate README.md.
