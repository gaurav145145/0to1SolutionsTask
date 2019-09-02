import {
  UPDATE_STATE,
} from "../constants";

export const updateState = (key, value) => {
  return {
    type: UPDATE_STATE,
    key,
    value
  };
};
export const handleLogin = ({ username, password, user }, history) => {
  return dispatch => {
    if (user.username === username && user.password === password) {
      dispatch(updateState("authorized", true));
      dispatch(updateState("error", false));
      history.push("/admin/home");
    } else dispatch(updateState("error", true));
  };
};
