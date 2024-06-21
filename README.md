# TypeScript Data Structures with Jest Testing

This repository contains implementations and unit tests for various data structures in TypeScript, including stacks, queues, deques, heaps, binary search trees (BSTs), and linked lists.

## Project Structure

```
ts-data-structures/
├── src/
│   ├── stack.ts
│   ├── queue.ts
│   ├── deque.ts
│   ├── heap.ts
│   ├── bst.ts
│   └── linkedlist.ts
├── tests/
│   ├── stack.test.ts
│   ├── queue.test.ts
│   ├── deque.test.ts
│   ├── heap.test.ts
│   ├── bst.test.ts
│   └── linkedlist.test.ts
├── jest.config.js
├── package.json
└── tsconfig.json
```

## Setup Instructions

1. Install Dependencies
    Make sure you have Node.js and npm installed.
    Then, install the necessary dependencies:
        ```npm install```
2. Compile TypeScript Code
    Compile the TypeScript code to JavaScript:
        ```npx tsc```
3. Run Tests
    Run the tests using Jest:
        ```npx jest```
    To run a specific test file, use the path to that test file.
    For example, to run tests in stack.test.ts:
        ```npx jest tests/stack.test.ts```
    To run a specific test case by name, use the -t option with Jest.
    For example, to run the should start empty test case in stack.test.ts:
        ```npx jest -t "should start empty"```
