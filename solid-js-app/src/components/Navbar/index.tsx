import { Component } from "solid-js";
import logo from "../../logo.svg";

const Navbar: Component = () => {
  return (
    <nav>
      <a href="/">
        <img src={logo} class="w-8" alt="Logo" />
      </a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
