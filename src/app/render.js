import { Layout } from "../components/Layout.js";
import { Dashboard } from "../components/Dashboard.js";

export function renderApp(root, state) {
  root.innerHTML = Layout(Dashboard(state));
}
