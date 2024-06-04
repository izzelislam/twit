import useFetchApi from "./useFetchApi"

export default () => {

  const useAuthToken = () => useState('auth_token')
  const useAuthUser  = () => useState('auth_user')

  const setToken = (newtoken) => {
    const authToken = useAuthToken()
    authToken.value = newtoken
  }

  const setUser = (newUser) => {
    const authUser = useAuthUser()
    authUser.value = newUser
  }

  const login = ({email, password}) => {
    return new Promise( async (resolve, reject) =>{
      try {
        const data = await $fetch('/api/auth/login', {
          method: 'POST',
          body: {
            email,
            password
          }
        })

        console.log(data);

        setToken(data.acces_token)
        setUser(data.user)

        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  const refreshToken = () => {

    
    return new Promise( async (resolve, reject) =>{
      try {
        const data = await $fetch('/api/auth/refresh')
        setToken(data.access_token)
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  const getUser = () => {

    console.log(useAuthToken().value)

    return new Promise( async (resolve, reject) =>{
      try {
        const data = await useFetchApi("/api/auth/user")
        setUser(data.user)
        resolve(data)
      } catch (error) {
        reject(error)
      }
    })
  }

  const initAuth = () => {
    return new Promise( async (resolve, reject) =>{
      try {
        await refreshToken()
        await getUser()
        resolve(true)
      } catch (error) {
        reject(error)
      }
    })
  }

  return {
    login,
    useAuthUser,
    initAuth,
    useAuthToken
  }
}