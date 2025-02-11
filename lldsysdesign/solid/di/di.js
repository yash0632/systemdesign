"use strict";
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    save() {
        this.userService.save();
    }
}
class UserService {
    save() {
        console.log("save product");
    }
}
class UserRepository {
    save() {
        console.log("save product");
    }
}
const userService = new UserService();
const userController = new UserController(userService);
userController.save();
