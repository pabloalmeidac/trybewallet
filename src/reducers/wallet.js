import { WALLET_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

// id = expenses.length +1
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return { ...state,
      expenses: [...state.expenses, action.currentExpenses],
    };
  default:
    return state;
  }
};

export default walletReducer;
