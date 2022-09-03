export interface AuthUser {
  id?: number;
  uid?: string;
  fullName?: string;
  email?: string;
  photoURL?: string;
  token?: string;
  role?: string[] | string;
}
