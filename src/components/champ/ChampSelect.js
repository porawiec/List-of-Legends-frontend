import React, { useState } from 'react'

const ChampSelect = () => {
    const [champs, setChamps] = useState([
        {
            name: 'Aatrox',
            icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png'
        },
        {
            name: 'Ahri',
            icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png'

        },
        {
            name: 'Akali',
            icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Akali.png'
        },
        {
            name: 'Draven',
            icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Draven.png'
        }
    ])


    return(
    <div class="ui grid">
        {champs.map(champ => (
            <div class="column">
                <img src={champ.icon_img} class="ui image" />
        </div>
        ))}
    </div>
    )
}

export default ChampSelect