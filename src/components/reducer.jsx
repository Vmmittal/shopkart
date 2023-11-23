export function reducer(state, action) {
  switch (action.type) {
    case "isLogged":
      return { ...state, isLogged: false };
  }
}
