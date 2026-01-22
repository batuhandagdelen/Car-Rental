import type { FC } from "react";

interface Props {
  text: string;
  name?: string;
  designs?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  fn?: () => void;
}

const Button: FC<Props> = ({ text, name, designs, disabled, type, fn }) => {
  return (
    <button
      name={name}
      disabled={disabled}
      type={type}
      onClick={fn}
      className={`custom-btn ${designs}`}
    >
      {text}
    </button>
  );
};

export default Button;
