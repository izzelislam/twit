import { useCookie } from "nuxt/app"
import { getRefrefreshTokenByToken } from "~/server/db/refreshTokens"
import { getUserById } from "~/server/db/users"
import { decodeRefreshToken } from "~/server/utils/jwt"

export default defineEventHandler(async (event) => {

  const cookies = getCookie(event, 'refresh_token')

  if (!cookies){
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    }))
  }

  const rToken = await getRefrefreshTokenByToken(cookies)

  if (!rToken){
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    }))
  }

  const token:any  = await decodeRefreshToken(cookies)

  try {
    const user = await getUserById(token.userId)

    const {accessToken} = generateTokens(user)

    return {
      access_token: accessToken
    }
  
  } catch (error) {
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    }))
  }
})