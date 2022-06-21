export interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  checked?: boolean;
}
