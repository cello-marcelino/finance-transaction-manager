import { TransactionItem } from "./TransactionItem.js";

export function TransactionList(transactions) {
  if (transactions.length === 0) {
    return `
      <div class="bg-white p-6 rounded-xl shadow-sm text-sm text-slate-500">
        No transactions yet.
      </div>
    `;
  }

  return `
    <div class="space-y-3">
      ${transactions
        .sort((a, b) => b.createdAt - a.createdAt)
        .map((t) => TransactionItem(t))
        .join("")}
    </div>
  `;
}
