import { calculateSummary } from "../utils/aggregation.js";
import { TransactionForm } from "./TransactionForm.js";
import { TransactionList } from "./TransactionList.js";
import { TransactionFilter } from "./TransactionFilter.js";

export function Dashboard(state) {
  const { totalIncome, totalExpense, balance } = calculateSummary(
    state.transactions,
  );

  let filteredTransactions = state.transactions;

  if (state.filter !== "all") {
    filteredTransactions = state.transactions.filter(
      (t) => t.type === state.filter,
    );
  }
  return `
    <section class="space-y-6">
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <div class="grid grid-cols-2 gap-6 items-center">

          <div>
            <canvas id="summary-chart"></canvas>
          </div>

          <div class="space-y-2">
            <h2 class="text-lg font-medium">Summary</h2>

            <div class="text-sm text-green-600">
              Income: ${totalIncome}
            </div>

            <div class="text-sm text-red-600">
              Expense: ${totalExpense}
            </div>

            <div class="text-sm font-semibold">
              Balance: ${balance}
            </div>
          </div>

        </div>
        ${TransactionForm()}
      </div>
      ${TransactionFilter(state.filter)}
      ${TransactionList(filteredTransactions)}

    </section>
  `;
}
