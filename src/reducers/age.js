export default function ageReducer(state = "", action) {
  switch (action.type) {
    case "CHANGE_AGE":
      return action.payload;
    default:
      return state;
  }
}
