# Morsel

## Getting Started

#### This project is built with :
1. [masseuse](http://solid-interactive.github.io/masseuse/docs/index.html) - A view helper built on top of [backbone.js](http://backbonejs.org/)
1. [Grasshopper Admin / Api](http://grasshopper.ws) For the backend.

#### Locations :
1. [Admin](http://morsel-backend.herokuapp.com/admin)
1. [API Endpoint](http://morsel-backend.herokuapp.com)


#### Install bower components, npm dependencies, and gems using:

```shell
bower install && npm install && bundle install
```

#### Run a local server pointed at the external backend :

```shell
grunt server
```

Select `local`, and `browser`

#### For an android build

You will need to have [cordova](http://cordova.apache.org/docs/en/3.5.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide) set up in order to run this command. 
(plug your android device in before, and have debugging mode turned on)

```shell
grunt android
```

#### app/dependencies

Here we will differentiate between browser and mobile, it chooses the correct one depending on your build. 



Update your release notes using:

```shell
grunt releaseNotes
```

Then you probably want to commit the bower dependencies and the newly generate README.md.
