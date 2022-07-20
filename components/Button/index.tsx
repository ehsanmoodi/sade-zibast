import { Loader } from "../../icons";
import type { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  mode = "primary",
  children,
  classes = "",
  processing = false,
  ...props
}) => {
  return (
    <button className={`button button--${mode} ${classes}`} {...props}>
      {processing ? <Loader className="loader" /> : children}
    </button>
  );
};

export default Button;
