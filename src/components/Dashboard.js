import { calculateSummary } from "../utils/aggregation.js";
import { TransactionForm } from "./TransactionForm.js";
import { TransactionList } from "./TransactionList.js";
import { TransactionFilter } from "./TransactionFilter.js";
import { formatRupiah } from "../utils/currency.js";

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
          <div class="size-60">
            <canvas id="summary-chart"></canvas>
          </div>

          <div class="space-y-2">
            <h2 class="text-3xl font-medium">Summary</h2>

            <div class="text-lg text-green-600">
              Income: ${formatRupiah(totalIncome)}
            </div>

            <div class="text-lg text-red-600">
              Expense: ${formatRupiah(totalExpense)}
            </div>

            <div class="text-lg font-semibold">
              Balance: ${formatRupiah(balance)}
            </div>
          </div>
        </div>
        <hr class="my-7 border-slate-600">
        ${TransactionForm()}
      </div>
      ${TransactionFilter(state.filter)}
      ${TransactionList(filteredTransactions)}

    </section>
  `;
}
