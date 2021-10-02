import {
  USER_ACTION,
  WALLET_ACTION,
  DELETE_ACTION, UPDATE_TOTAL_ACTION } from './actionTypes';

export const loginAction = (email, password) => ({
  type: USER_ACTION,
  email,
  password,
});

export const walletAction = (currentExpenses, total) => ({
  type: WALLET_ACTION,
  currentExpenses,
  total,
});

export const deleteAction = (currentExpenses) => ({
  type: DELETE_ACTION,
  currentExpenses,
});

export const updateTotalAction = (value) => ({
  type: UPDATE_TOTAL_ACTION,
  value,
});
