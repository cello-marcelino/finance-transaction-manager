import { subscribe, getState } from "../state/store.js";
import { renderApp } from "./render.js";
import { bindEvents } from "./events.js";
import { calculateSummary } from "../utils/aggregation.js";
import { renderDonutChart } from "./chart.js";

export function initApp() {
  const root = document.getElementById("app");

  function update(state) {
    renderApp(root, state);
    bindEvents();

    const { totalIncome, totalExpense } = calculateSummary(state.transactions);
    renderDonutChart(totalIncome, totalExpense);
  }

  subscribe(update);
  update(getState());
}
