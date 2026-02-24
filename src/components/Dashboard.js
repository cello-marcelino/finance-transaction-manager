import { TransactionForm } from "./TransactionForm.js";

export function Dashboard(state) {
  const totalIncome = state.transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = state.transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return `
    <section class="space-y-6">
      <div class="bg-white p-6 rounded-xl shadow-sm space-y-2">
        <h2 class="text-lg font-medium">Summary</h2>
        <div class="text-sm text-slate-600">
          Income: ${totalIncome}
        </div>
        <div class="text-sm text-slate-600">
          Expense: ${totalExpense}
        </div>
        <div class="text-sm font-semibold">
          Balance: ${balance}
        </div>
        <hr class="my-5 border-slate-500">
        ${TransactionForm()}
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm">
        <p class="text-sm text-slate-500">
          Belum ada transaksi.
        </p>
      </div>
    </section>
  `;
}
