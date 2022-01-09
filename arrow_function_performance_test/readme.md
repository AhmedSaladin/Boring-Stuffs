## Summary
- The initialization of arrow functions in class properties are transpiled into the constructor
- Arrow functions in class properties won’t be in the prototype and we can’t call them with `super`.
- Arrow functions in class properties are much slower than bound functions, and both are much slower than usual function.

- Usual functions are defined in the prototype and will be shared across all instances. If we have a list of N components, these components will share the same method. So, if our components get clicked we still call our method N times, but it will call the same prototype. As we’re calling the same method multiple times across the prototype, the JavaScript engine can optimize it.

- Arrow functions in class properties, if we’re creating N components, these N components will also create N functions. Remember what we’ve seen in the transpiled version, class properties are initialized in the constructor. Which means if we click on N components, N different functions will be called.
## Reference
1. [Arrow Functions In Class Properties Might Not Be As Great As We Tthink](https://medium.com/@charpeni/arrow-functions-in-class-properties-might-not-be-as-great-as-we-think-3b3551c440b1)
2. [Dark Side Of The Fat Arrow function](https://medium.com/@rohans16996/dark-side-of-the-fat-arrow-function-8d2a477f743b)
