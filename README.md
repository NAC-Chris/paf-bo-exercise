# Paf frontend exercise

## Objective

Transform the provided [JSON data](./src/api/) into a single response and send it to the frontend. Then use that
response to render a layout using TypeScript and JSX through modern React. The layout should resemble the
provided [design mocks](./design/), but does not have to be pixel perfect. You can use the provided
[CSS classes](./src/styles.css) or write your own CSS.

## Requirements

1. Transform the messy data given in the JSON files to a well restructured response for the frontend.
   - Should adhere to REST standards
   - Should not send excessive information
   - Should be structured so it is easy to use in the frontend
1. Solve incomplete setup steps to get all data to the frontend
   - Hide that the app is powered by Express
   - User must be authorized to view the "Recently Played" game list
1. Send the structured response and **fetch** it in the frontend.
1. Use JSX through modern React to produce an information structure.
   - Should resemble the given designs
   - Should use the data sent from the backend
1. Provide a short list of things you would do to make the app production ready

## Restrictions

1. No additional packages are to be installed.
1. The _.json_-files are to be considered as api-responses, they cannot be altered directly.
   - _backend.ts_, _frontend.tsx_, _styles.css_ and _index.html_ can be freely changed.

**Author your solution in the following places:**

- `src/backend.ts`
- `src/frontend.tsx`

## Getting started

This setup provides a development server to be used in your machine.
Prerequisites are **node.js** _(LTS)_

1. Install dependencies:
   ```bash
   npm ci
   ```
1. Start server:
   ```bash
   npm start
   ```
1. When done, package your solution with the following command:
   ```bash
   npm pack
   ```
1. And then send us your `paf-back-office-exercise-1.0.0.tgz`.

## Evaluation

Your code test will be evaluated against the following criteria:

- Meets the stated requirements
- Ability to transform and structure the data
- Simple over clever
- Understanding of:
  – REST fundamentals
  - React fundamentals
  - TypeScript
  - Immutability vs. mutability
