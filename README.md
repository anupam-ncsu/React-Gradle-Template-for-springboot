# React-Gradle-Template-for-springboot

Prereq: We have Nodejs 8.0+ nad gradle installed on the machine

```
npm init react-app React-Gradle-Template-for-springboot
cd React-Gradle-Template-for-springboot
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

