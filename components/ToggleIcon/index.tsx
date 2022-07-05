import type { ToggleIconProps } from "./types";

const ToggleIcon: React.FC<ToggleIconProps> = ({ isActive, ...props }) => {
  return (
    <button {...props} className={`toggle_icon ${isActive && "open"}`}>
      <span></span>
      <span></span>
    </button>
  );
};

export default ToggleIcon;
