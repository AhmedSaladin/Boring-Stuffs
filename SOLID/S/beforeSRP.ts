/*
 Currently user class violates SRP if you look closely
 you find signIn(), signUp(), sendVerificationEmail(), logOut()
 methods do not belong to user class responsibility
 it is related more to system responsibility or authentication class who responsible for logging users in or out. 
*/

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
