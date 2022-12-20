# Bank

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

This project was the second challenge of the Digital Futures Academy programme and was undertaken June 22nd to 1st July 2022.

The project was to produce a simple bank account program which could log transactions to accounts and print statements to the console.

The challenge was to practice Object Orientated Design skills, Test Driven Development and Domain Modelling to map the problem space.

---

## Built With

Built in `javascript` using `node` for running. `Jasmine` has been used as the test framework.

---

## Getting Started

1. Clone the repo.

2. `npm install` to install dependencies.

3. `npm test` to run the tests.

4. `node ./src/bankRunner.js` to run `bankRunner`, this will print a statement to the console that meets the challenge acceptance criteria.

---

## Problem Statements

This project was the second challenge of the Digital Futures Academy programme. The project was to produce a simple bank account program which could log transactions to accounts and print statements to the console. The challenge was to practice Object Orientated Design skills, Test Driven Development and Domain Modelling to map the problem space.

- The original user stories and acceptance criteria can be found in the file [./ChallengeNotes.md](./ChallengeNotes.md).

- I used a Domain Modelling approach to map the user requirements into an object/message model prior to undertaken coding. This is documented in [./DomainModel.md](./DomainModel.md).

- A TDD approach was used for all code.

---

## Project Review and Roadmap

My key overall learnings from project:

- The power of using Test Driven Design (TDD) to remain focused on core requirement and the confidence testing gives that code is working as expected. TDD ensures thought is put into desired behaviour prior to coding.
- Testing strategy is important and is a skill to build upon. At times I found myself having to rewrite tests after implementing new functionality due to the tests being too linked to implementation details. Tests should ideally be based on expected behaviour/outcomes and attempt to avoid becoming too linked to implementation details in the code.

My technical learnings from the project:

- Using Test Driven Design as an approach to solving a problem.
- Implementing the `jasmine` test framework.
- Implementing `static` methods.
- Further consolidation and familiarisation with `javascript` syntax from previous learning.

Improvements/additional features that could be included:

- Dates are currently stored as strings. I could have used the inbuilt `Date` class. This would have allowed me to avoid implementing my own `formatDate()` method.

---

## Acknowledgments

- Advice and guidance was provided by Digital Futures Academy Trainers Ed Wright and Lucas Chagas at various points throughout the project.
