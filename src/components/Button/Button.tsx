import type { ButtonProps } from "src/components/Button/types";
import "src/components/Button/Button.css";

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
}

export { Button };
