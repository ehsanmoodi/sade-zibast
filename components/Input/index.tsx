import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ id, label, type, value, ...props }) => {
  return (
    <div className="input">
      <input
        className={`${value && "not-empty"}`}
        value={value ?? ""}
        id={id}
        type={type}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Input;
