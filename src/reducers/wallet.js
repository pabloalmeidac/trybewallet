import { WALLET_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
  },
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return { ...state, currencies: action.currencies };
  default:
    return state;
  }
};

export default walletReducer;
