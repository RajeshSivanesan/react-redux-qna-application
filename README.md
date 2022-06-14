> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React QNA application

### Purpose

This project is to provide provision to handle CRUD operations with questions and answers. Highlights of the project are:

 - User should be able to see a question by default on load (read from localStorage which is set on App load)
 - Used react-secure-storage to save data to localStorage (for security reasons it has been encrypted so that no one can see whats there in localStorage)
 - User will be able to create a question/answer and save it. Since we don't save this on DB, we are relying on the previous question max id and based on that
   the next question is created
 - On create, a side effect is redux is initiated which is a promise which will get resolved after 5 seconds (since no backend is involved)
 - Once the question is created, it gets listed on the created questions section
 - User will be able to edit/delete a specific question
    - Edit is handled by a modal to update the content
    - Delete is direct deletion from redux as well as from localStorage
 - User will be able to sort the questions (based on questionText alphabetically)
 - User will be able to remove all the questions in one shot
 - Basically any state changes which happens, will be subscribed and hence propagated to localStorage and no dependency
 - Custom implementation of modal and tooltip

### Tech Stacks Used
```bash
React.js
Redux
Jest
React Testing Library
Bootstrap
react-secure-storage
redux thunk for side effects
scss preprocessors

Note: (this app is powered by CRA)
```

### Setting up & Running

```bash
npm install
npm start || npm run start
npm run test
```

or

```bash
yarn install
yarn start
yarn test
```

### License
MIT

#### Author
[@RajeshSivanesan](https://github.com/RajeshSivanesan)
