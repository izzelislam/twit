import { getUserByEmail } from "~/server/db/users"
import { userTransformer } from "~/server/transformers/user"
import bcrypt from 'bcrypt'
import { generateTokens , sendRefreshToken} from "~/server/utils/jwt"
import { createRefreshToken } from "~/server/db/refreshTokens"

export default defineEventHandler( async (event) => {
  const body = await readBody(event)

  if (!body){
    throw sendError(event, createError({
      statusCode: 400,
      statusMessage: "Missing body"
    }))
  }

  const {email, password} = body

  if (!email || !password){
    throw sendError(event, createError({
      statusCode: 400,
      statusMessage: "Missing required fields"
    }))
  }

  const user = await getUserByEmail(email)
  
  if (!user){
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    }))
  }

  const isMatchPass = bcrypt.compareSync(password, user.password)

  if (!isMatchPass){
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Invalid credentials"
    }))
  }

  // generate refresh token
  const { accessToken, refreshToken } = generateTokens(user)
  
  // refreshToken save to db
  await createRefreshToken({
    userId : user.id,
    token  : refreshToken
  })

  // add http only cookie
  sendRefreshToken(event, refreshToken)

  return {
    acces_token : accessToken,
    user: userTransformer(user),
  }

}) 