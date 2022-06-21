import type { SwitchProps } from "./types";

const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  checked = false,
  ...props
}) => {
  return (
    <div className={`switch ${checked && "checked"}`}>
      <input id={id} type="checkbox" checked={checked} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Switch;
