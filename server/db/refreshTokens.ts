import { prisma } from "."

export const createRefreshToken = (refreshToken:any) => {
  return prisma.refreshToken.create({
    data: refreshToken
  })
}

export const getRefrefreshTokenByToken = (token:string) => {
  return prisma.refreshToken.findUnique({
    where: {
      token: token
    }
  })
}