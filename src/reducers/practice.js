function appReducer(state, action) {
  switch (action.type) {
    case "DELETE_FLAVOR":
      return state.filter((icecream) => icecream.flavor !== action.flavor);

    default:
      return state;
  }
}

const result = appReducer(
  [
    { flavor: "Chocolate", count: 36 },
    { flavor: "Vanilla", count: 210 },
  ],
  { type: "DELETE_FLAVOR", flavor: "Vanilla" }
);

console.log(result);
