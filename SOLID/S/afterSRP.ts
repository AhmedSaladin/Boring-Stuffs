
class User {
  private name: string;
  private password: string;
  private email: string;
  constructor(name: string, password: string, email: string) {
    this.name = name;
    this.password = password;
    this.email = email;
  }

  getName() {}

  getEmail() {}

  getPassword() {}
}

class Authentication {
  signIn() {}

  signUp() {}

  logOut() {}

  sendverificationEmail() {}
}
