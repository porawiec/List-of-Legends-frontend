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

 export const getWishesAction = (skins) => {
    return {
        type: 'GET_CHAMP_SKINS',
        skins
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
    return {
        type: 'DELETE_WISH',
        wish
    }
 }