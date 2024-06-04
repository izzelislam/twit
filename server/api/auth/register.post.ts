import { createUser } from "~/server/db/users"
import { userTransformer } from "~/server/transformers/user"

export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  if (!body){
    throw sendError(event, createError({
      statusCode: 400,
      statusMessage: "Missing body"
    }))
  }

  const {username, email, password, repeatPassword, name} = body

  if (!username || !email || !password || !repeatPassword || !name){
    throw sendError(event, createError({
      statusCode: 400,
      statusMessage: "Missing required fields"
    }))
  }

  if (password !== repeatPassword){
    throw sendError(event, createError({
      statusCode: 400,
      statusMessage: "Passwords do not match"
    }))
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: 'https://picsum.photos/200/200' 
  }

  const user = await createUser(userData)

  return {
    body: userTransformer(user)
  }
})