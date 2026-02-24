import { Chart, ArcElement, Tooltip, Legend } from "chart.js/auto";

Chart.register(ArcElement, Tooltip, Legend);

let chartInstance = null;

export function renderDonutChart(totalIncome, totalExpense) {
  const ctx = document.getElementById("summary-chart");

  if (!ctx) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "doughnut",
    data: {
      // labels: ["Income", "Expense"],
      datasets: [
        {
          data: [totalIncome, totalExpense],
          backgroundColor: ["#16a34a", "#dc2626"],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}
