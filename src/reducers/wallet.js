import { WALLET_ACTION,
  DELETE_ACTION, UPDATE_TOTAL_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  totalExpenses: 0,
  currencies: [],
  expenses: [],
};

// id = expenses.length +1
const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_ACTION:
    return { ...state,
      totalExpenses: +action.total,
      expenses: [...state.expenses, action.currentExpenses],
    };
  // logica do delete peguei no github do Rogerio https://github.com/tryber/sd-013-a-project-trybewallet/pull/55/files?authenticity_token=MzWJGSTDHk5EAYZs21X%2FyE8bzolWyX2HaKDXi3iAbHhL9aCWXhP4e%2Fxkgy787A0XfI%2FN%2FSbBDHWu8pAyz8jmyg%3D%3D&file-filters%5B%5D=.js&file-filters%5B%5D=.png
  case DELETE_ACTION:
    return { ...state,
      expenses: state.expenses
        .filter((expense) => expense.id !== action.currentExpenses) };
  case UPDATE_TOTAL_ACTION:
    return { ...state, totalExpenses: state.totalExpenses - action.value };
  default:
    return state;
  }
};

export default walletReducer;
