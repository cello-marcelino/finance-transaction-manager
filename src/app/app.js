import { subscribe, getState, setState } from "../state/store.js";
import { renderApp } from "./render.js";
import { bindEvents } from "./events.js";
import { calculateSummary } from "../utils/aggregation.js";
import { renderDonutChart } from "./chart.js";
import { loadTransactions } from "../services/persistence.js";

export function initApp() {
  const root = document.getElementById("app");

  // HYDRATE ONCE
  const savedTransactions = loadTransactions();

  if (savedTransactions.length > 0) {
    setState((prev) => ({
      ...prev,
      transactions: savedTransactions,
    }));
  }

  function update(state) {
    renderApp(root, state);
    bindEvents();

    const { totalIncome, totalExpense } =
      calculateSummary(state.transactions);

    
    renderDonutChart(totalIncome, totalExpense);
  }

  subscribe(update);
  update(getState());
}