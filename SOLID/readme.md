# SOLID Principle in JS

- `S` represents the Single Responsibility principle
- `O` represents the Open Closed principle
- `L` represents the Liskov Substitution principle
- `I` represents the Interface Segregation principle
- `D` represents the Dependency Inversion principle

## Single Responsibility principle (SRP)

Each module or class should be responsible to one, and only one actor or responsibility.

`it about making class or module be high cohesion`

## Open Closed principle (OCP)

It follows `Software entities (classes, modules, functions, and so on) should be open for extension but closed for modification`.

- Open for extension — we are able to extend what the module does.
- Closed for modification — extending the behavior of a module does not result in changes to the source or binary code of the module.

## Liskov Substitution principle (LSP)

It applies to inheritance hierarchies such that derived classes must be completely substitutable for their base classes.

`If it looks like a duck, quacks like a duck, but needs batteries, you probably have the wrong abstraction`

## Interface Segregation principle (ISP)

It states that clients should not be forced to depend upon interface members they do not use.

## Dependency Inversion principle (DIP)

It states that we should depend on abstractions (interfaces and abstract classes) instead of concrete implementations (classes).

`The abstractions should not depend on details; instead, the details should depend on abstractions.`

`A sure way to decouple modules and write testable code`

### Hints

- All examples are used to illustrate SOLID principles, are not tested it just clarifies the concepts, in the javaScript world we have limitations of what we can do, we act as OOP language, something like Dependency injection not achievable without angular DI logic, Dependency inversion not achievable at all.

- `SOLID` principles are just rules and best practices to follow while designing a class structure.
