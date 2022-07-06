import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  dir = "rtl",
  extra,
  ...props
}) => {
  return (
    <div className="input" dir={dir}>
      {extra && <span>{extra}</span>}
      <input
        className={`${value && "not-empty"}`}
        value={value ?? ""}
        id={id}
        type={type}
        {...props}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Input;
