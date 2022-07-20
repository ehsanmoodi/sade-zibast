export interface Token {
  token: string;
  exp: number | undefined;
  isLoggedIn: boolean;
}

export interface ProfileType {
  id: string;
  name: string;
  lastname: string;
  mobile: string;
}
