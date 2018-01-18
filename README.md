# Boilerplate for React web apps with Redux, Router + more

This is the boilerplate set up I use to jump start my react web applications. Most of the default config is  based on an ejected version of create-react-app. It's been customized to use the container/component pattern and has default config added for:

* Redux
* Redux thunk
* React Router (v4)
* CSS modules
* Jest/enzyme for testing

## Demo
I've provided a simple sample app with two pages. The redux store is configured to include the route history and a single reducer that toggles a boolean on the homepage. You can view how the CSS modules are used by looking at `src/components/Home/styles.js`.
To run the demo app:
1. Clone the repository
2. Install dependencies `npm install`
3. Run the clean script `npm run start`

# Setup
To use this boilerplate
1. Clone the repository
2. Install dependencies `npm install`
3. Run the clean script `npm run clean`
    * This script removes all the demo app files while maintaining the file structure and configuration
4. To start with a fresh git repository, delete the `.git` folder in the root directory, rename the project folder to whatever you're working on and run `git init`
