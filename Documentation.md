# Tests for angular routing
*Definitions*
- deeplink: a link which makes it possible to access one of the pages in a webapplication without having to manually click on different navigation elements
- permanent deeplink: a deeplink which is accessable even when the application evolves. Meaning decoupling between a permanent deeplink and a deeplink
  
In order to be able to uses permanent deeplinks I want to be able:
- to define the syntax for permanent deeplink
- to reroute a permanent deeplink to the current implemented deeplink

## Definition of permanent deeplinks
In the example application the following deeplinks are available:

| url                              | description   |
|----------------------------------|---------------|
| http://localhost:4200/home       | home page     |
| http://localhost:4200/first      | first page    |
| http://localhost:4200/first/:id  | first page    |
| http://localhost:4200/second     | second page   |
| http://localhost:4200/permlink

# References
* Angular routing 
  * https://angular.io/guide/router
  * https://angular.io/guide/observables-in-angular#router
* Angular debugging with visual code https://code.visualstudio.com/docs/nodejs/angular-tutorial
* Logging https://www.codemag.com/Article/1711021/Logging-in-Angular-Applications 
* Observables https://angular.io/guide/rx-library 
  