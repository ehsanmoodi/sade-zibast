export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: string;
  children: JSX.Element | string;
  classes?: string | JSX.Element;
  processing?: boolean;
}
