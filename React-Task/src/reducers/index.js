import {
  UPDATE_STATE,
} from "../constants";
const reducer = (
  state = {
    user: {
      username: "Admin",
      password: "Admin"
    },
    title: "",
    description: "",
    authorized: false,
    error: false,
    editIndex: -1,
    skillName: "",
    username: "",
    password: "",
    imageViewing: "",
  },
  action
) => {
  switch (action.type) {
    case UPDATE_STATE: {
      return { ...state, [action.key]: action.value };
    }
    default: {
      return { ...state };
    }
  }
};
export default reducer;
