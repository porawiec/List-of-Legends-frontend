const initState = {
    champs: [
        {id: 1, name: "Aatrox", icon_img: "http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png"},
        {id: 2, name: "Ahri", icon_img: "http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png"},
        {id: 3, name: "Akali", icon_img: "http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Akali.png"},
        {id: 4, name: "Aurelion Sol", icon_img: "http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/AurelionSol.png"}
    ],
    wishes: [

    ]
}

const wishReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_CHAMPS':
            console.log('received notes', action.notes)
            return {
                ...state,
                notes: action.notes
            }

        case 'GET_CHAMPS_ERROR':
            console.log('received notes error', action.err)
            return state


        case 'CREATE_WISH':
            console.log('created note', action.note)
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

        case 'CREATE_WISH_ERROR':
            console.log('create wish error', action.err)
            return state

        default:
            return state
    }
}

export default wishReducer