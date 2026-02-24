import { saveTransactions } from "../services/persistence.js";

let state = {
  transactions: [],
  filter: "all", // all | income | expense
};

const listeners = [];

export function getState() {
  return structuredClone(state);
}

export function setState(updater) {
  const draft = structuredClone(state);
  const newState = updater(draft);

  if (!newState || typeof newState !== "object") {
    throw new Error("Invalid state update");
  }

  state = newState;

  // Persist hanya transaksi
  saveTransactions(state.transactions);

  notify();
}

export function subscribe(listener) {
  listeners.push(listener);
}

function notify() {
  listeners.forEach((listener) => listener(getState()));
}
