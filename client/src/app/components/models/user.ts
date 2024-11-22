export class User {
  id!: string;
  userName: string;
  email: string;
  password: string;

  constructor(email: string, password: string, userName: string = '') {
    this.email = email;
    this.password = password;
    this.userName = userName;
  }
}
