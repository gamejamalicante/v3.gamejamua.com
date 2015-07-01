## GameJamUA - 48 hour making of a game competition

![Build Status](https://raw.githubusercontent.com/travis-ci/travis-api/515ffb8a8a881f18c7e27bf134da81a8de54945f/public/images/result/passing.png)-
![Version](http://img.shields.io/badge/version-0.1a-red.svg)-
![Dependencies](http://img.shields.io/badge/dependencies-up--to--date-yellow.svg)-
![License](http://img.shields.io/badge/license-MIT-blue.svg)


## Requirements

It needs: [npm](https://www.npmjs.com/) | 
[bower](http://bower.io/)

## Dependencies

- [strongloop/express](https://github.com/strongloop/express): minimal and flexible Node.js web application framework used for the routes and other features.
- [felixge/node-mysql](https://github.com/felixge/node-mysql): Node.js driver for mysql, used for all the db queries.
-  [angular/angular](https://github.com/angular/angular): development platform in JavaScript for building the frontend app.
-  [angular/bower-angular-resource](https://github.com/angular/bower-angular-resource)
-  [angular/material](https://github.com/angular/material): lightweight set of AngularJS-native UI components for  the CSS layout.
-  [angular-ui/ui-router](https://github.com/angular-ui/ui-router): routing framework for AngularJS, which allows you to organize the parts of your interface into a state machine.
-  [FortAwesome/Font-Awesome](https://github.com/FortAwesome/Font-Awesome): set of icons for easy scalable vector graphics on websites.
-  [l-lin/font-awesome-animation](https://github.com/l-lin/font-awesome-animation): set of animations for fontawesome icons.
-  [daneden/animate.css](https://github.com/daneden/animate.css): bunch of cool, fun, and cross-browser animations for the project.
-  [less/less.js](https://github.com/less/less.js): dynamic stylesheet language.
-  [hiddentao/squel.js](https://hiddentao.github.io/squel/): for building SQL query strings.

## Instalation
Once you have cloned or forked this repo, just run:

```
npm update
```

```
bower update
```

## API REST
These are the following routes our project contains:

#####USERS

```
...rest/users/all
```
Gets full list of the users

#####GAMES

```
...rest/games/all
```
Gets full list of the games

```
...rest/games?q=N
```
Gets N number of games or a maximum of 15

#####EDITIONS

```
...rest/editions/all
```
Gets full list of the editions

```
...rest/editions/active
```
Get all info of an active edition if there is, otherwise returns an empty object
#####NEWS

```
...rest/news?q=N
```
Gets N numer of news or a maximum of 15




### License
GAMEJAMUA is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
