export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label?: string;
  value?: string | number;
  dir?: string;
  extra?: string | JSX.Element | ReactElement;
}
