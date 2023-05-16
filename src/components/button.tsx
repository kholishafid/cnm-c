import { Component, JSXElement } from "solid-js";

const Button: Component<{ variant: "fit" | "full", children: JSXElement }> = ({ children, variant }) => {
  if (variant === "full") {
    return (
      <button class="button button-full">
        {children}
      </button>
    );
  }
  return (
    <button class="button button-fit">
      {children}
    </button>
  );
}

export default Button;