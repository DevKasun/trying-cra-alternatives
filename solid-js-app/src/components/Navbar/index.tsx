import { Component } from "solid-js";
import logo from "../../logo.svg";

const Navbar: Component = () => {
  return (
    <nav class="container mx-auto p-4 flex items-center justify-between">
      <a href="/">
        <img src={logo} class="w-12" alt="Logo" />
      </a>
      <ul class="flex items-center gap-4">
        <li>
          <a href="/" class="text-blue-800 hover:text-blue-400 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            class="text-blue-800 hover:text-blue-400 hover:underline"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/contact"
            class="text-blue-800 hover:text-blue-400 hover:underline"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
