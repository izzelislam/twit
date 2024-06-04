import UrlPattern from "url-pattern";
import { decodeAccessToken } from "../utils/jwt";
import { getUserById } from "../db/users";

export default defineEventHandler(async (event) => {

  const endpoints = [
    "/api/auth/user"
  ]

  const isHandledByMidleware = endpoints.some((endpoint) => {
    const pattern = new UrlPattern(endpoint)
    return pattern.match(event.node.req.url!.toString())
  })

  if (!isHandledByMidleware){
    return
  }
  
  if (!!event.node.req.headers['authorization']){
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    })
  }
  const token = event.node.req.headers['authorization']?.split(' ')[1]
  

  const decoded:any = decodeAccessToken(token!)

  if (!decoded){
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    })
  }

  
  try {
    const userId = decoded.userId
    const user = await getUserById(userId)

    event.context.auth = {user}
  } catch (error) {
    return
  }
  

});