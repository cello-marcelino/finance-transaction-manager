import { formatRupiah } from "../utils/currency.js";

export function TransactionItem(transaction) {
  return `
    <div class="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
      <div>
        <div class="font-medium">${transaction.title}</div>
        <div class="text-xs text-slate-500">
          ${transaction.type.toUpperCase()}
        </div>
      </div>

      <div class="flex items-center gap-4">
        <span class="text-sm font-semibold ${
          transaction.type === "income" ? "text-green-600" : "text-red-600"
        }">
          ${transaction.type === "income" ? "+" : "-"}
          ${formatRupiah(transaction.amount)} 
        </span>

        <button 
          data-id="${transaction.id}"
          class="delete-btn text-xs text-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  `;
}
