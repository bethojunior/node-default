import { User } from "@prisma/client";
import prismaClient from "../../providers/prisma/prisma.provider";

export default class UserRepository{

  async findAll(): Promise<User[] | Error>{
    try {
      return await prismaClient.user.findMany();
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error("Error at Message repository");
    }
  }

  async findById(id: string){
    return await prismaClient.user.findUnique({
      where: {
        id
      }
    });
  }

  async create(data: any){
    return await prismaClient.user.create({
      data
    });
  }

  async update(id: string, data: any){
    return await prismaClient.user.update({
      where: {
        id
      },
      data
    });
  }

  async delete(id: string){
    return await prismaClient.user.delete({
      where: {
        id
      }
    });
  }
}