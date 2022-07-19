export interface Token {
  token: string;
  exp: number | undefined;
  isLoggedIn: boolean;
}
