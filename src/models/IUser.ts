export interface IAuthUser {
  email: string;
  password: string;
  loginError: string;
}

export interface IUser {
  id: number;
  document_type: string;
  name: string;
  last_name: string;
  password: null;
  document_number: string;
  user_role: string | null;
  email: string;
  date_of_birth: string;
  created_at: string;
  updated_at: string;
}
