import type { Component } from "solid-js";
import AppRouter from "./router";
import Navbar from "./components/Navbar";
import AppLayout from "./layout/app-layout";

const App: Component = () => {
  return (
    <AppLayout>
      <header>
        <Navbar />
      </header>
      <main class="container mx-auto p-4">
        <AppRouter />
      </main>
    </AppLayout>
  );
};

export default App;
