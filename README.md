# Automated Tests with API Rest

![GitHub repo size](https://img.shields.io/github/repo-size/brunoglara/automated-tests-API?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/brunoglara/automated-tests-API?style=for-the-badge)

This project aims to conducting automated tests using [Yelp Fusion API](https://fusion.yelp.com/). 
This API Contains information about world business like:

 * Business name;
 * Business images;
 * Reviews
 * Location
 * Phone
 * ...access the [documentation](https://docs.developer.yelp.com/docs/fusion-intro)
 

   <img src="/screenshots/feature.png" alt="Feature" align="center"/><br>
 
   
 
   <img src="/screenshots/tests_results.png" alt="Tests Results" align="center"/>



 
 <br/>
 
## Technologies and tools used 🛠️:
<div>
 <a href="https://nodejs.org/en/">
  <img align="center" alt="NodeJS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
 </a>
 <a href="https://www.npmjs.com/">
  <img align="center" alt="NPM" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
 </a>
 <a href="https://www.javascript.com/">
  <img align="center" alt="Javascript" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
 </a>
 <a href="https://codecept.io/">
  <img align="center" alt="CodeceptJS" height="50" width="60" src="https://www.svgrepo.com/show/330181/codeceptjs.svg" />
 </a>
 <a href="https://cucumber.io/" target="_blank">
  <img align="center" alt="Cucumber" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg" />
 </a>

</div>

 <br/>
 <br/>
 
## Requirements
 * [Node](https://nodejs.org/en/) v18 installed
 * [NPM](https://www.npmjs.com/) v8
 * [Git](https://git-scm.com/)
 * Yelp account created ([Sign Up for Yelp](https://www.yelp.com/signup))
 
 <br/>
 
## Running
* First step, you need to clone this repository. How to cloning a repository [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
* In the project's folder, execute:

 ```
 npm install
 ```

* Copy the key contained in your Yelp account. You can find in this key [here](https://www.yelp.com/developers/v3/manage_app)
  
  <img src="/screenshots/yelp_key.PNG" alt="Yelp KEY" align="center"/>

 <br/>
 
* Paste your key on file called .env.example after variable "API_SECRET_KEY"
 
  <img src="/screenshots/env_file.png" alt="env File" align="center" />
 
 <br/>
 
* Change the file name from ".env.example" to ".env"
  
 <br/>
 
 * In the project's folder, execute:

 ```
 npx codeceptjs run
 ```
 
 <br/>

## Tested scenarios

### First Scenario: Search business by location
><b>Endpoint used</b>: /businesses/search
>
><b>Given</b> I want to list business by location <br>
><b>When</b> I do a get request<br>
><b>Then</b> I should get a list of business from searched location<br>



### Second Scenario: Get business by Id
><b>Endpoint used</b>: /businesses/{id}
>
><b>Given</b> I want get a business by <id> <br>
><b>When</b> I do a get request by id <br>
><b>Then</b> I should get a business by searched id <br>


### Third Scenario: Get reviews by business Id
><b>Endpoint used</b>: /businesses/{Id}/reviews
>
><b>Given</b> I want get reviews by business id <br>
><b>When</b> I do a get request by business id <br>
><b>Then</b> I should get reviews by searched business id <br>


