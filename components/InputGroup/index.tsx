import type { InputGroupProps } from "./types";

const InputGroup: React.FC<InputGroupProps> = ({
  title,
  description,
  guide,
  children,
}) => {
  return (
    <div className="input-group">
      {title && <div className="input-group__title">{title}</div>}
      {description && (
        <div className="input-group__description">{description}</div>
      )}
      {children}
      {guide && <div className="input-group__guide">{guide}</div>}
    </div>
  );
};

export default InputGroup;
