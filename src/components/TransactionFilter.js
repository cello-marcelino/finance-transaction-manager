export function TransactionFilter(activeFilter) {
  const filters = ["all", "income", "expense"];

  return `
    <div class="flex gap-2">
      ${filters
        .map(
          (filter) => `
        <button 
          data-filter="${filter}"
          class="filter-btn px-3 py-1 rounded-lg text-sm ${
            activeFilter === filter
              ? "bg-slate-800 text-white"
              : "bg-white shadow-sm"
          }"
        >
          ${filter.toUpperCase()}
        </button>
      `
        )
        .join("")}
    </div>
  `;
}