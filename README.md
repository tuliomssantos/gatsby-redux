# Add Redux To Gatsby WebSite

## Important Note About Set State in React

**Keep in mind that the state should never be changed directly.**

If your state is something like a nested object, or array of nested objects, setting the state properly can be difficult to achieve.

Note that even if you use the Spread Operator to Destructuring an Object, **the copying process using spread operator is shallow**. There are some differences between copying using spread operator and copying using Object.assign.

To avoid a complex and verbose sintax in setState we use the **[immutability-helper](https://github.com/kolodny/immutability-helper#readme)**.

Note that even using this, you should be careful with nested objects and add a good layer of unit tests that validate the veracity of setState.

---
```sh
yarn add immutability-helper react-redux redux redux-thunk
```

## Important files and basic structure
```
project_folder
| src
| |  store
│ |  │   createStore.js
│ |  │   reducer.js
│ |  │
│ |  |   actions
│ |  │   │   actionTypes.js
│ |  │   │   index.js
| |  |   └───   
| |  └─── 
| └───
| gatsby-browser.js
| gatsby-ssr.js
| wrap-with-provider.js
└───
```

