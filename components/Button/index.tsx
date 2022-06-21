import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  mode = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`button button--${mode}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
