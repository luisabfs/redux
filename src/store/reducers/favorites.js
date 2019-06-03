const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return [
        ...state,
        {
          id: Math.random(),
          name: "infinitered/reactotron",
          description:
            "A desktop app for inspecting your React JS and React Native projects. macOS, Linux, and Windows.",
          url: "https://github.com/infinitered/reactotron"
        }
      ];
    default:
      return state;
  }
}
