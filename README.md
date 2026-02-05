# typescript_unit_test
I had not written TypeScript before this project. I used the following resources while learning and building this repository:
- https://www.youtube.com/watch?v=n8uJILGhmPs&list=PLa72FipivD80tL1QpP0HKk6zL01h1y2KZ
- https://www.geeksforgeeks.org/typescript/how-to-test-typescript-with-jest/
- https://medium.com/@dimi_2011/tdd-unit-testing-typescript-project-with-jest-2557e8b84414

# How to set up and run the code and unit tests
1. Clone this repository.
2. Install dependencies:

```bash
npm install
```

3. Run tests:

```bash
npm test
```

# Setup
- Install TypeScript (local dev dependency):

```bash
npm install --save-dev typescript
```

- Create `package.json` (if you don't have one):

```bash
npm init -y
```

# Configuration files added
- `jest.config.js` — Jest configuration for running tests with TypeScript.
- `tsconfig.json` — TypeScript compiler configuration.

# Logic
Collections `collection1` and `collection2` are sorted in ascending order, while `collection3` is sorted in descending order. The merge algorithm works as follows:

- Iterate through all collections simultaneously and select the smallest number among the current items (skip duplicates).
- Append that number to the `merged` result.
- Advance the pointer in the collection that contained the smallest number.
- Repeat until all collections are exhausted, then return `merged`.