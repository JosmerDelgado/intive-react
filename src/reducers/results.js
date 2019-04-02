export default function resultsReducer(state = [], action) {
  switch (action.type) {
    case "CHANGE_RESULTS":
      return action.payload;
    default:
      return state;
  }
}
