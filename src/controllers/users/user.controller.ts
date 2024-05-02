import UserService from "../../services/users/user.service";

export default class UserController {
  async findAll() {
    const userService = new UserService();
    return await userService.findAll();
  }

  async findById(id: string) {
    const userService = new UserService();
    return await userService.findById(id);
  }
}