const INITIAL_STATE = [{ id: 1, text: "Eat" }, { id: 2, text: "Sleep" }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
