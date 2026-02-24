import { subscribe, getState } from "../state/store.js";
import { renderApp } from "./render.js";
import { bindEvents } from "./events.js";

export function initApp() {
  const root = document.getElementById("app");

  function update(state) {
    renderApp(root, state);
    bindEvents();
  }

  subscribe(update);
  update(getState());
}