export function TransactionForm() {
  return `
    <form id="transaction-form" class="bg-white rounded-xl space-y-4">
      <input 
        type="text"
        id="title-input"
        placeholder="Transaction title"
        class="w-full border border-slate-500 rounded-lg px-3 py-2 text-sm"
        required
      />

      <input 
        type="number"
        id="amount-input"
        placeholder="Amount"
        class="w-full border border-slate-500 rounded-lg px-3 py-2 text-sm"
        required
      />

      <select 
        id="type-input"
        class="w-full border border-slate-500 rounded-lg px-3 py-2 text-sm"
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button 
        type="submit"
        class="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm cursor-pointer"
      >
        Add Transaction
      </button>
    </form>
  `;
}
