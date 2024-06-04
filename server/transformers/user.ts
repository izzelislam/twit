export const userTransformer = (user: any) => {
  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    profileImage: user.profileImage
  }
}