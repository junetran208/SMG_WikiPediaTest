# This is guideline to set up and execute tests
## Test Suite Introduction 
   ### 1.API-Search.spec.js is testsuite of API test
   ### 2.UI-Wikipedia-Search.spec.js is testsuite of UI test

## Execute Test
### 1. Install Node

[NodeJs download](https://nodejs.org/en/download/)

### 2. Install Cypress

[Follow these instructions to install Cypress.](https://docs.cypress.io/guides/getting-started/installing-cypress)

### 3. Execute testing for this repo

#### a. install the node_modules
```npm install```

#### b. Run test with cypress headless
```npx cypress run```
#### c. Open Cypress UI and select specs to run
```npx cypress open```

#### Note: you also able to refer the test result through the shared video from Google drive https://drive.google.com/file/d/1SCOm5Jwe3gbJcJhPbG8MRDYlAOrBohkQ/view?usp=drive_link


### 4.Test Report
#### a. install cypress-mochawesome-reporter
```npm install cypress-mochawesome-reporter --no-save```
#### b. View html report
##### afer executing the test, open html file from your local under ..\cypress\reports



