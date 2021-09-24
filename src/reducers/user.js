import { USER_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  user: {
    email: '',
    password: '',
  },
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_ACTION:
    return { ...state, email: action.email, password: action.password };
  default:
    return state;
  }
};

export default userReducer;
