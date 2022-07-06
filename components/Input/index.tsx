import type { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  id,
  label,
  type,
  value,
  dir = "rtl",
  guide,
  ...props
}) => {
  return (
    <div className="input" dir={dir}>
      {guide && <span>{guide}</span>}
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
