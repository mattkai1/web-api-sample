# webapi-sample

Use this repo to bootstrap a game using the Alexa Web API for Games and Litexa.

* Learn about the Alexa Web API for Games here: https://developer.amazon.com/en-US/docs/alexa/web-api-for-games/understand-alexa-web-api-for-games.html
* The Alexa custom skill is built with Litexa.  Find more information on Litexa here: https://litexa.com/

## Build
From the repo root, run the following:

* `npm run clean`
* `npm run compile`

These commands install the npm dependencies, compile your code, and get it packed up and ready to deploy in the  [litexa](litexa) folder. 

## Deploy
This project uses the `@litexa/deploy-aws` module for the `development` environment. You'll need to set up profiles in the ASK and AWS CLI's, and fill out some information here
The Litexa documentation has instructions on prerequisites here: https://litexa.com/get-started/deploying.html#deployment-prerequisites

* Provide values for the null fields in [litexa.config.js](litexa.config.js)
* `npm run deploy` -- compiles your code and calls `litexa deploy`

## Invoke

Say "Alexa, Launch Skill Challenge Winner'" on a device on the same Amazon account as the askProfile. You should see a page that says "Alexa is ready to go!"

## Develop

Start hacking on the Litexa code for the skill at [litexa/main.litexa](litexa/main.litexa), and the HTML experience at [src/index.js](src/index.js).
  
Make something cool!
