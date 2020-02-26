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

export const signUp = (credentials) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        credentials
    }
 }

 export const getProfileAction = (credentials) => {
    return {
        type: 'GET_PROFILE',
        credentials
    }
 }