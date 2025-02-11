class CustomerUser {
  getRole() {}
}

class User extends CustomerUser {
  getAccessLevel() {
    console.log("User access level");
  }

  getRole() {
    console.log("user role");
  }
}

class Admin extends User {
  getAccessLevel(): void {
    console.log("Admin access level");
  }

  getRole() {
    console.log("Admin Role");
  }
}

class Manager extends User {
  getRole() {
    console.log("Manager Role");
  }
}

class Customer extends CustomerUser {
  getRole() {
    console.log("Customer Role");
  }
}

function getUserAccesslevel(user: User) {
  user.getAccessLevel();
}

getUserAccesslevel(new User());

//Interface Segregation Pipeline
