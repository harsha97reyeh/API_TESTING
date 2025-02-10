# API_TESTING 
# Cypress API Testing
this repository contains tests for interacting with an API using Cypress test framework. These cover common HTTP request such as **GET**,**POST**,**PUT** and **DELETE**

# Prerequisties
We need to make sure that we have 'Node.js','visual studio code'and 'npm' in our system installed.

# Installation and Setup
1. Create a new folder in visual studio code and name as Cypress API Testing
2. Create a new file in Cypress API Testing and name it as apitest_cypress.cy.js
3. Open terminal in visual studio code and run command **npm init -y**
4. Command npm install init -y installs package.json file
To install cypress use command **npm install cypress**

# Execution
npx cypress run --spec 'give cypress file relative path'
or
npx cypress open

# Playwright API Testing
this repository contains tests for interacting with an API using Playwright test framework. These cover common HTTP request such as **GET**,**POST**,**PUT** and **DELETE**
# Prerequisties
We need to make sure that we have 'Node.js','visual studio code'and 'npm' in our system installed.
# Install and setup 
There are two ways to install playwright in VS code
We install playwright using command lines as npm package using commands and other way to install is VS code application
**Installing using command as npm package**
1. Create a new folder and open in VS Code and name as APITESTING2
2. Create a file and name as APItesting_Playwright.spec.js
3. Goto terminal in VS code and run command -npm initplaywright@latest
This installs latest version of Playwright

# Execution
npx playwright --ui opens playwright application we need run **GET**, **POST**, **PUT**, **DELETE** request
To check with result use console tab.

