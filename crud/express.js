
// Choosing the right Node.js Framework: Express, Koa, or Hapi?
// Node.js allows developers use the same language for both the client-side and the server-side part of an application: JavaScript.

// Explore the differences between three of the most popular frameworks in Node.js: Express, Koa, and Hapi. 

// Express
// GitHub Stars: +43,000
// npm weekly downloads: 8MM

// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications, it behaves like a middleware to help manage servers and routes.


// Advantages
// 1)Almost the standard for Node.js web middleware.
// 2)Simple, minimalistic, flexible and scalable.
// 3)Fast app development.
// 4)Fully customizable.
// 5)Low learning curve.
// 6)Easy integration of third-party services and middleware.
// 7)Majorly focused on browsers, making templating and rendering an almost out of the box feature.


// Disadvantages
// Although Express.js is a very convenient and easy-to-use framework, it has some minor drawbacks that may influence the development process.
// 1)Organization needs to be very clear to avoid problems when maintaining the code.
// 2)As your codebase size increases, refactoring becomes very challenging.
// 3)A lot of manual labor is required, since you need to create all endpoints.


// Koa
// GitHub Stars: +25,000
// npm weekly downloads: +300K
// Koa was built by the same team behind Express, 
// and aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. 
// By leveraging async functions, Koa allows you to ditch callbacks and significantly increase error-handling. 
// Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.

// Advantages
// Koa improves interoperability, robustness, and makes writing middleware much more enjoyable.
// Has a large number of helpful methods but maintains a small footprint, as no middleware are bundled.
// Koa is very lightweight, with just 550 lines of code.
// Has a very good user experience.
// Better error handling through try/catch.
// Generated-based control flow.
// No more callbacks, facilitating an upstream and downstream flow of control.
// Cleaner, more readable async code.

// Disadvantages
// The open source community around Koa is relatively small.
// Not compatible with Express-style middleware.
// Koa uses generators which are not compatible with any other type of Node.js framework middleware.

// Hapi
// GitHub Stars: +11,.000
// npm weekly downloads: +250K
// Hapi is a rich framework for building applications and services. It enables developers to 
// focus on writing reusable application logic instead of spending time building infrastructure.

// Advantages
// It provides a robust plugin system that allows you to add new features and fix bugs at a fast pace.
// It enables you to build scalable APIs.
// There is a deeper control over request handling.
// It is an excellent choice for building Representational State Transfer (REST) APIs because it provides you with routing, input, output validation, and caching.
// You can build an API that serves all kinds of clients that need mobile and single-page applications.
// Detailed API reference and good support for document generation.
// You can use hapi.js with any front-end framework, like React, Angular, and Vue.js to create a single-page application.
// Configuration-based approach to some sub-middlewares(pseudo-middlewares)
// Provides the availability of caching, authentication, and input validation.
// Has a plugin-based architecture for scaling.
// Provides really good enterprise plugins such as joi, yar, catbox, boom, tv, and travelogue.

// Disadvantages
// Developers need to figure out the code structure on their own.
// “Locks” developers into using hapi-specific modules and plugins such as catbox, joi, boom, tv, good, travelogue, and yar; and which are not compatible with Express/Connect.
// Endpoints are created manually and must be tested manually.
// Refactoring is manual.