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

 export const getWishesAction = (users) => {
    return {
        type: 'GET_WISHES',
        users
    }
 }

 export const getWishesFailAction = (error) => {
    return {
        type: 'GET_WISHES_ERROR',
        error
    }
 }