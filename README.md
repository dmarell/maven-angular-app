## Mavenized AngularJS Application

This is a simple template application supporting both a build pipeline and fluent frontend
development with grunt serve.

 - Installs node and npm automatically
 - Packages and minifies into a deployable war-file
 - Artifact (pom) version information packaged in artifact and available in app

 Run `mvn clean install` from the root.

## Develop using Grunt Serve

In order to develop fluently, run `grunt serve` and open up `http://localhost:9000`
in a browser. Changes to the source is picked up instantly by grunt.

## Run on Tomcat with Maven

Run `mvn tomcat7:run` and open `http://localhost:9090` in a browser.

## Create a Run Target in Intellij

Run or debug like any web aoplication: Download Tomcat separately.
Create a Tomcat Server/Local run target and add this war-artifact in
the deployment tab.

Run or debug and open `http://localhost:8080` in a browser.
