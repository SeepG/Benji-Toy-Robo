# Benji-Toy-Robo
Simulation of a toy robot moving on a 5 x 5 square tabletop.

Author: Seep Gulati
[Linkedin](https://www.linkedin.com/in/seepgulati) | [Twitter](https://twitter.com/seepgulati)

### Demo video
Please check the video in docs folder `toy-robo-demo.mov` in any movie player preferably Quick Time Player.

### Technology Stack
Benji Toy Robot simulation is built using a simple REST API with NodeJS and Express. PostMan has been used for integration testing and Jest for unit testing. HTML, Javascript and Bootstrap for the front-end. 

### Architecture of application
Back End - Nodejs & Expressjs | Front End - Javascript, HTML and Bootstrap

### Softwares used in application
* Javascript - ES7 
* Node - 10.16.0
* Express - 4.16.1
* NPM as a packet manager gave access to various libraries and programs and easily manage the installation process.
* Visual Studio Code helped in writing source-code and supported debugging.

### Prerequisites
The first thing you need to have is Node.js on your computer.You can download the Node.js installer from the Node.js website at: https://nodejs.org/en/download/

Once Node.js is installed, open a terminal and enter the `node --version` on command line to verify that it is installed correctly. This application is using Node 10.16.0 version.

## Installation and important commands

1. You need to open the repository in a code editor of your choice. I'm using visual studio code. Download link: https://code.visualstudio.com/docs/setup/mac

2. cd into repository and run below command to start the express server.
`npm start`

3. Once server is running, you will see following on command line -'Benji listens to your commands on port 3000'.

4. To view UI in the browser. Download Live server Visual Studio code.extension. Download link: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer 

5. Once live server is installed. Open Public folder and click on Index.html file and right click to open with live server. Path: http://localhost:3000

6. To run tests `npm test`
