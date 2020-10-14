notes
LAB - 01
Deployment Test
Author: Michael Eclavea (copied from John Cokos Class Lab)
tests report
front-end
Resources and helps
Lots of help from Sara R.
(link to Console messages with jest)[https://stephencharlesweiss.com/jest-testing-spyon-consoles/]
Setup
.env requirements
PORT - Port Number
Running the app
npm start
Endpoint: /status
Returns Object

{
  "domain": "john-api-server.demo.herokuapp.com",
  "status": "running",
  "port": 42123
}
Tests
Unit Tests: npm run test
Lint Tests: npm run lint
UML
wire-frame('./uml/img.png');