const initState = {
    champs: [
        // {
        //     id: 1,
        //     name: 'Aatrox',
        //     icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png'
        // },
        // {
        //     id: 2,
        //     name: 'Ahri',
        //     icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png'

        // },
        // {
        //     id: 3,
        //     name: 'Akali',
        //     icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Akali.png'
        // },
        // {
        //     id: 4,
        //     name: 'Draven',
        //     icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Draven.png'
        // }
    ],
    skins: [
    //     {
    //     id: 1,
    //     name: 'default',
    //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg',
    //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg',
    //     champ_id: 1
    // },
    // {
    //     id: 2,
    //     name: 'Justicar Aatrox',
    //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg',
    //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_1.jpg',
    //     champ_id: 1
    // },
    // {
    //     id: 3,
    //     name: 'Mecha Aatrox',
    //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg',
    //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_2.jpg',
    //     champ_id: 1
    // },
    // {
    //     id: 4,
    //     name: 'Sea Hunter Aatrox',
    //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg',
    //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_3.jpg',
    //     champ_id: 1
    // }
],
    wishes: [
        // {
        //     id: 1170,
        //     name: 'default',
        //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg',
        //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_0.jpg',
        //     champ_id: 148
        // },
        // {
        //     id: 1171,
        //     name: 'Wildfire Zyra',
        //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_1.jpg',
        //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_1.jpg',
        //     champ_id: 148
        // },
        // {
        //     id: 1172,
        //     name: 'Haunted Zyra',
        //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_2.jpg',
        //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_2.jpg',
        //     champ_id: 148
        // },
        // {
        //     id: 1173,
        //     name: 'SKT T1 Zyra',
        //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_3.jpg',
        //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Zyra_3.jpg',
        //     champ_id: 148
        // },
        // {
        //     id: 2,
        //     name: 'Justicar Aatrox',
        //     splash_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg',
        //     loading_img: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_1.jpg',
        //     champ_id: 1
        // }
    ],
    friends: [

    ]
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CHAMPS':
            // console.log('received champs', action.champs.skins)
            return {
                ...state,
                champs: action.champs,
                skins: action.champs.map(champ => ({id: champ.id, champ: champ.skins}))
            }
        case 'GET_PROFILE':
            console.log('FOO ', action.user)
                return {
                    ...state,
                    wishes: action.user.skins
                }
        case 'LOGIN_SUCCESS':
                console.log('login success', action.user)
                return {
                    ...state,
                    wishes: action.user.skins
                }
        case 'GET_CHAMPS_ERROR':
            // console.log('received champs error', action.err)
            return {...state}

        case 'GET_CHAMP_SKINS':
            // console.log('received skins', action.skins)
            return {
                ...state,
                skins: action.skins
            }

        case 'GET_CHAMP_SKINS_ERROR':
            // console.log('received skins error', action.err)
            return {...state}

        case 'GET_USER_WISHED_SKINS':
            // console.log('received user wishes', action.user)
            return {
                ...state,
                wishes: action.user.skins
            }

        case 'GET_USERS_ERROR':
            // console.log('received users error', action.err)
            return state

        case 'CREATE_WISH':
            // console.log('added wish', action.wish)
            return {
                ...state,
                wishes: [
                    ...state.wishes,
                    action.wish
                ]
            }
            
        case "DELETE_WISH":
            console.log(state)
            return {
                ...state,
                wishes: state.wishes.filter(wish => wish.id !== action.wish.id)
            }

        default:
            return state
    }
}



export default userReducer