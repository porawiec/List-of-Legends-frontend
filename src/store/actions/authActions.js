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

 export const postNewWishAction = (wish) => {
    return {
        type: 'CREATE_WISH',
        wish
    }
 }
 export const deleteWishAction = (wish) => {
    return {
        type: 'DELETE_WISH',
        wish
    }
 }