// // ./src/reducers/bookReducers.js
// export default (state = [], action) => {
//   switch (action.type){
//     // Check if action dispatched is
//     // CREATE_BOOK and act on that
//     case 'CREATE_BOOK':
//         state.push(action.book);
//     default:
//           return state;
//   }
// };

const DEFAULT_BOOKS = [
  { author: "Marijn Haverbeke",
    title: "Eloquent Javascript",
    published: 2011,
    image: "/public/images/eloquentJavascript.jpeg",
    genre: "technology"
  }
];

// ./src/reducers/bookReducers.js
export default (state = DEFAULT_BOOKS, action) => {
  switch (action.type){
    case 'CREATE_BOOK':
        return [
          ...state,
          Object.assign({}, action.book)
        ];
    default:
          return state;
  }
};
