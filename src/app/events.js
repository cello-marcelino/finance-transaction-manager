import { setState } from "../state/store.js";

export function bindEvents() {
  const form = document.getElementById("transaction-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title-input").value.trim();
    const amountRaw = document.getElementById("amount-input").value;
    const type = document.getElementById("type-input").value;

    const amount = Number(amountRaw);

    if (!title || isNaN(amount) || amount <= 0) return;

    setState((prev) => ({
      ...prev,
      transactions: [
        ...prev.transactions,
        {
          id: Date.now(),
          title,
          amount,
          type,
          createdAt: Date.now(),
        },
      ],
    }));

    form.reset();
  });
}
