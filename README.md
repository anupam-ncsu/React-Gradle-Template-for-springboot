# React-Gradle-Template-for-springboot
This project is to serve as the front end for our template stack of 
React-Sprintboot application.

Prereq: We have Nodejs 8.0+ and gradle installed on the machine.

To start from scratch, we will use npm init to create the project.
```
npm init react-app React-Gradle-Template-for-springboot
cd React-Gradle-Template-for-springboot
```
The project will have the following structure:
```
react-gradle-template-for-springboot
├─ .git
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   ├─ serviceWorker.js
   └─ setupTests.js

```
Next thing is to wrap the project with gradle.
```
gradle init --type basic --dsl groovy --project-name react-gradle-template-for-springboot
```

put content in the build.gradle
run
```
./gradlew appNpmInstall
this will install clean and build the project
```


- To avoid CORS error.
define backened server as proxy in package.json


```
React-Gradle-Template-for-springboot
├─ .git
├─ .gitignore
├─ .project
├─ README.md
├─ gradle
│  └─ wrapper
│     ├─ gradle-wrapper.jar
│     └─ gradle-wrapper.properties
├─ gradlew
├─ gradlew.bat
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ App.css
   ├─ App.js
   ├─ App.test.js
   ├─ index.css
   ├─ index.js
   ├─ logo.svg
   └─ serviceWorker.js
```
The react app will be looking at the Springboot appliaction running at a different machine at a different port. This causes CORS (Cross Origin Resource Sharing) error. We'd like to be able to call services in the backend and display the results in the frontend. In order to do this we ask the frontend server to proxy any requests from :[react application port]3000 to [springboot backend application]8080. for this we add a proxy entry to the package.json
```
"proxy": "http://localhost:8080",
```
NOTE: This proxy entry will change in kubernetes. we will replace localhost with the service name of the backend. localhost is for local testing only. 

Inside src folder we have created a citizen folder to implement the operations that our API layer exposes.

We will use axios npm package for interaction with api. This is included as a dependency in package.json file.
Each operation have been defined in its own *.js file in teh folder. The URL parameter will be an extension to the proxy url mentioned in the package.json file


### Dockerize 

If application looks good on your local, we will put it in docker. Make sure you login to your dockerhub profile on your terminal before running the script. Create a  dockerhub account for free.
```
#login
docker login --username=yourhubusername --email=youremail@company.com
```
after login
```
# ./dockerize.sh ARG1 ARG2 ARG3

# ARG1 - username for dockerhub
# ARG2 - imagename that you want to publish
# ARG3 - image version (latest by default)

# In out case

./dockerize.sh anupam007 react-gradle-template 0.0.1
```
This also create a local image for us to test.
```
docker run -it -p 3000:3000 anupam007/react-gradle-template:0.0.1
```
Interact with your application again on the postman.