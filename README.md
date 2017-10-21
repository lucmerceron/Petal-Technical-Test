# Petal - Javascript engineer exercise

## Overview

You can use whatever languages/tools/frameworks that you need. Just give the steps on how to run your app below.

## Exercise instructions

Write an application that displays the status of automated tests. Given the following tests:

```javascript
function generateDummyTest() {
  var delay = 1000 + Math.random() * 1000;
  var testPassed = Math.random() > 0.5;

  return function(callback) {
    setTimeout(function() {
      callback(testPassed);
    }, delay);
  };
}

var tests = [
  { description: "2 + 2 = 4",          run: generateDummyTest() },
  { description: "Coffee is warm", run: generateDummyTest() },
  { description: "Haikus are 17 syllables",   run: generateDummyTest() },
  { description: "English sentences read like Edgar Allen Poe",     run: generateDummyTest() },
  { description: "Indents are tabs not spaces always!", run: generateDummyTest() },
  { description: "Overscores are now underscores",          run: generateDummyTest() }
];
```

### Application Requirements
1. Display the list of un-run tests, with a 'Start' button
2. When the start button is clicked, all the tests are shown as running-count, and the 'Start button' should change to
be an un-clickable 'Running...' button
3. As they complete, their final status text is display, and they are moved to the top of the list. Passed tests should be
listed above failed tests.
4. At any given point in time, there should be a count displayed of each test by status. At the top of the page, there should be text of this format, but changed when tests status changes:

Passed: 2

Failed: 3

Running: 5

6. When all tests have completed, display a 'Re-run' button that starts the tests over again.

Bonus:
When tests are running, show a 'Cancel' button that resets the tests to their initial state.

### Notes

Visual styling skills will not be assessed, beyond anything meeting requirements.

## Installation

This project was generated on the base of [create-react-app](https://github.com/facebookincubator/create-react-app). To install it, just type:

```
npm i
```

## Usage

```
$ npm run build   Build the application for production use
$ npm start       Start the server in development mode (port 3000)
$ npm run test    Launch the tests using jest in watch mode
$ npm run lint    Launch eslint on the /src folder
```

## Information

