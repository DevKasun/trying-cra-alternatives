import { Component, JSXElement } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

interface AppLayoutProps {
  children: JSXElement;
}

const AppLayout: Component<AppLayoutProps> = (props) => {
  return <div>{props.children}</div>;
};

export default AppLayout;
