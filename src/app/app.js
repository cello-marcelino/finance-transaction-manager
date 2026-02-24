import { subscribe, getState } from "../state/store.js";
import { renderApp } from "./render.js";

export function initApp() {
  const root = document.getElementById("app");

  function update(state) {
    renderApp(root, state);
  }

  subscribe(update);
  update(getState());
}
