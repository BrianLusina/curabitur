# Curabitur

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/93f43fe44e2b438b92a23a0fe560e49b)](https://www.codacy.com/app/BrianLusina/curabitur?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BrianLusina/curabitur&amp;utm_campaign=Badge_Grade)
[![Build Status](https://travis-ci.org/BrianLusina/curabitur.svg?branch=master)](https://travis-ci.org/BrianLusina/curabitur)
[![codecov](https://codecov.io/gh/BrianLusina/curabitur/branch/master/graph/badge.svg)](https://codecov.io/gh/BrianLusina/curabitur)

Translates to Latin for "Chat". This is a simple chat application with [Redux](https://redux.js.org/), [React](https://reactjs.org/) and [websockets](https://en.wikipedia.org/wiki/WebSocket). This is a simple demonstration onf the posibilities of using React for creating chat applications that communicate via websockets.

## Getting Started

Getting started is pretty simple, ensure you have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/)/[yarn](https://yarnpkg.com/en/) installed on your development environment. Installation instructions can be found in the links provided.

```bash
$ git clone https://github.com/BrianLusina/curabitur.git
$ cd curabitur
$ yarn install
# if using npm
$ npm install
```
> This will get you a copy of the project and install dependencies you need from the package.json provided

## Running the application

Running the application is as simple as:

```bash
$ yarn start
# if using npm
$ npm run start
```

This will run in development mode on address [http://localhost:3000](http://localhost:3000). Open Several browsers with the same address to act
like different clients and different clients will be created. That is it.

Go a step further and tunnel the localhost address using something like [ngrok](https://ngrok.com/) to allow multiple computers to connect while the development server is running.

# Running tests

Tests can be run with

```bash
$ yarn test
# or
$ npm run test
```

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/as-seen-on-tv.svg)](http://forthebadge.com)

Enjoy!
