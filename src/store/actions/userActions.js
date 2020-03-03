export const getChampsAction = (champs) => {
    return {
        type: 'GET_CHAMPS',
        champs
    }
 }

 export const getChampsFailAction = (error) => {
    return {
        type: 'GET_CHAMPS_ERROR',
        error
    }
 }

 export const getWishesAction = (wishes) => {
    return {
        type: 'GET_USER_WISHED_SKINS',
        wishes
    }
 }

 export const getWishesFailAction = (error) => {
    return {
        type: 'GET_WISHES_ERROR',
        error
    }
 }

 export const postNewWishAction = (wish) => {
    return {
        type: 'CREATE_WISH',
        wish
    }
 }

 export const deleteWishAction = (wish) => {
    // console.log('wish', wish)
    return {
        type: 'DELETE_WISH',
        wish
    }
 }
 export const getUserAction = (friend) => {
    // console.log('wish', wish)
    return {
        type: 'GET_USER',
        friend
    }
 }

 export const getFriendsAction = (user) => {
    return {
        type: 'GET_FRIENDS',
        user
    }
 }

 export const postNewFriendAction = (friendship) => {
    return {
        type: 'CREATE_FRIENDSHIP',
        friendship
    }
 }

 export const deleteFriendAction = (friendship) => {
    return {
        type: 'DELETE_FRIENDSHIP',
        friendship
    }
 }