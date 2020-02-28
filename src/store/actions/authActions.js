export const signIn = (user) => {
   return {
       type: 'LOGIN_SUCCESS',
       user
   }
}

export const signOut = () => {
    return {
        type: 'SIGNOUT_SUCCESS'
    }
}

export const signUp = (user) => {
    return {
        type: 'SIGN_UP_SUCCESS',
        user
    }
 }

 export const getProfileAction = (user) => {
    return {
        type: 'GET_PROFILE',
        user
    }
    }