import { USER_ACTION, WALLET_ACTION } from './actionTypes';

export const loginAction = (email, password) => ({
  type: USER_ACTION,
  email,
  password,
});

export const walletAction = () => ({
  type: WALLET_ACTION,
});
