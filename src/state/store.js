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
  notify();
}

export function subscribe(listener) {
  listeners.push(listener);
}

function notify() {
  listeners.forEach((listener) => listener(getState()));
}
