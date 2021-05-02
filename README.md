# email-frontend challenge!

This is the frontend part of a two part challenge. The backend for this project is here https://github.com/tmert1012/email-backend

## Coding Challenge
What we would like to build is a very simple email subscription web service and user interface.

## The user requirements are as follows:
* A place to add an email to the global email list.
* A place to view all currently subscribed emails in the list.
* An unsubscribe page for people that want to remove themselves from the list. It should require the user to click an unsubscribe button then show a message that they have been removed from the list.

## Things to keep in mind:

* Email validation is not simple, so a best effort is good here, just don’t allow any string.
* For security purposes, the url for unsubscribing should not contain the users email, but some other identifier. This identifier should not be easily guessed like an incrementing id.

## Implementation Notes:

* The front end should be written in React. Any other library for state, forms, etc.. is fine to add in. Javascript or Typescript is fine and we do not prefer one or the other for this challenge.
* It is not required to write tests for the UI.
* The frontend project can be set up separately with npm or yarn, and runnable separately with ‘yarn start’ or ‘npm start’, or integrated into the Gradle build.
* Unless told otherwise, there is no need to spend time on the look and feel of the UI. If you have a component framework you are familiar with like bootstrap or material UI that would be nice, but not required.
* Do not worry about packaging or deploying this at all.
* There are no authentication or authorization concerns.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
