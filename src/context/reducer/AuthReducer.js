import { SET_USER, REMOVE_USER } from "../../constants";

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      if (action.payload.token)
        localStorage.setItem("KS_TOKEN", action.payload.token);
        localStorage.setItem('THEME', JSON.stringify(action.payload.user?.properties?.theme));
      return {
        ...state,
        user: action.payload.user,
        isAuthorized: true,
      };
    case REMOVE_USER:
      localStorage.removeItem('KS_TOKEN');
      return {
        ...state,
        user: {},
        isAuthorized: false,
      };
    default:
      return state;
  }
};
