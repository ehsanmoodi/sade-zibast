import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  mode = "primary",
  children,
  classes = "",
  ...props
}) => {
  return (
    <button className={`button button--${mode} ${classes}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
