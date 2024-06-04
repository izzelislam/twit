import {prisma} from "."
import bcrypt from 'bcrypt';


export const createUser = (userData:any) => {
  const userModel = {
    ...userData,
    password: bcrypt.hashSync(userData.password, 10)
  }

  return prisma.user.create({data: userModel});
}

export const getUserByEmail = (email:string) => {
  return prisma.user.findUnique(
    {where: {email: email}}
  )
}

export const getUserById = (id:any) => {
  return prisma.user.findUnique(
    {where: {id: id}}
  )
}