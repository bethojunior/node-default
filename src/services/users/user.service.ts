import UserRepository from "../../repositories/users/user.repository";

export default class UserService{
  async findAll(){
    const userRepository = new UserRepository();
    return await userRepository.findAll();
  }

  async findById(id: string){
    const userRepository = new UserRepository();
    return await userRepository.findById(id);
  }
}