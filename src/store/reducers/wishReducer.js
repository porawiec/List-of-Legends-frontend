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
    ]
}

const wishReducer = (state = initState, action) => {
    let idx
    switch (action.type) {
        case 'GET_CHAMPS':
            console.log('received champs', action.champs)
            return {
                ...state,
                champs: action.champs
            }

        case 'GET_CHAMPS_ERROR':
            console.log('received champs error', action.err)
            return {...state}

        case 'GET_CHAMP_SKINS':
            console.log('received skins', action.skins)
            return {
                ...state,
                skins: action.skins
            }

        case 'GET_CHAMP_SKINS_ERROR':
            console.log('received skins error', action.err)
            return {...state}

        case 'GET_USERS':
            console.log('received users', action.champs)
            return {
                ...state,
                champs: action.champs
            }

        case 'GET_USERS_ERROR':
            console.log('received users error', action.err)
            return state


        case 'CREATE_WISH':
            console.log('added wish', action.wish)
            return ([
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    splash_img: action.splash_img,
                    loading_img: action.loading_img,
                    champ_id: action.champ_id
                }
            ])

        case "DELETE_WISH":
            idx = state.wishes.findIndex(wish => wish.id === action.id);
            return {
                ...state,
                wishes: [...state.wishes.slice(0, idx), ...state.wishes.slice(idx + 1)]
            }

        default:
            return state
    }
}



export default wishReducer