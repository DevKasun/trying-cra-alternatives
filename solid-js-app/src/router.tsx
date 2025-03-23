import { Router, Route } from "@solidjs/router";
import Home from "./pages/Home";
import About from "./pages/About";
import Characters from "./pages/Characters";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/characters" component={Characters} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}
