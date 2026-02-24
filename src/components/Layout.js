export function Layout(content) {
  return `
    <div class="min-h-screen bg-slate-50">
      <header class="bg-white shadow-sm">
        <div class="max-w-5xl mx-auto px-6 py-4">
          <h1 class="text-xl font-semibold">
            Finance Transaction Manager
          </h1>
        </div>
      </header>

      <main class="max-w-5xl mx-auto px-6 py-10">
        ${content}
      </main>
    </div>
  `;
}