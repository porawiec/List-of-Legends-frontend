export const signIn = (credentials) => {
   return {
       type: 'LOGIN_SUCCESS',
       credentials
   }
}

export const signOut = () => {
    return {
        type: 'SIGNOUT_SUCCESS'
    }
}