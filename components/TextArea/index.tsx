import type { TextAreaProps } from "./types";

const Input: React.FC<TextAreaProps> = ({ id, label, value, ...props }) => {
  return (
    <div className="textarea">
      <textarea className={`${value && "not-empty"}`} id={id} {...props}>
        {value ?? ""}
      </textarea>
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default Input;
