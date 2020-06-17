# ChatSockets

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/93f43fe44e2b438b92a23a0fe560e49b)](https://www.codacy.com/manual/BrianLusina/chat-sockets?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrianLusina/chat-sockets&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/BrianLusina/chat-sockets.svg?branch=develop)](https://travis-ci.org/BrianLusina/chat-sockets)
[![codecov](https://codecov.io/gh/BrianLusina/chat-sockets/branch/develop/graph/badge.svg)](https://codecov.io/gh/BrianLusina/chat-sockets)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FBrianLusina%2Fchat-sockets.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FBrianLusina%2Fchat-sockets?ref=badge_shield)

This is a simple chat application with [Redux](https://redux.js.org/), [React](https://reactjs.org/) and [websockets](https://en.wikipedia.org/wiki/WebSocket). This is a simple demonstration of the posibilities of using React for creating chat applications that communicate via websockets.

## Getting Started

Getting started is pretty simple, ensure you have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/en/) installed on your development environment. Installation instructions can be found in the links provided.

``` bash
$ git clone https://github.com/BrianLusina/chat-sockets.git
$ cd chat-sockets
$ cd client
$ yarn install
# if using npm
$ npm install
$ cd ..
$ cd server
$ yarn install
```

> This will get you a copy of the project and install dependencies you need from the package.json provided

## Running the application

Running the application is as simple as:

```bash
$ cd client
$ yarn start
# if using npm
$ npm run start

$ cd server
$ yarn start
```

This will run in development mode on address [http://localhost:3000](http://localhost:3000). Open Several browsers with the same address to act
like different clients and different clients will be created. That is it.

Go a step further and tunnel the localhost address using something like [ngrok](https://ngrok.com/) to allow multiple computers to connect while the development server is running.

# Running tests

Tests can be run with

```bash
$ cd client
$ yarn test
# or
$ npm run test
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)](http://forthebadge.com)

Enjoy!


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FBrianLusina%2Fchat-sockets.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FBrianLusina%2Fchat-sockets?ref=badge_large)