import { userTransformer } from "~/server/transformers/user"

export default defineEventHandler(async (event) => {

  const user = event.context.auth?.user

  if (!user){
    throw sendError(event, createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    }))
  }

  return {
    user : userTransformer(user)
  }
})