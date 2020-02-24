import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChampDetails from './ChampDetails'

class ChampSelect extends Component {

    componentDidMount(){

    }
    
    render(){
        const { champs } = this.props
        return(
        <div class="ui grid">
            {champs.map(champ => (
                <div class="column">
                    <img onClick={console.log('nothing')} src={champ.icon_img} class="ui image" />
                </div>
            ))}
        </div>
        )}
    }

const mapStateToProps = (state) => {
    return {
        champs: state.wish.champs
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('dash map state to props', dispatch)
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampSelect)






// const [champs, setChamps] = useState([
                //     {
                //         id: 1,
                //         name: 'Aatrox',
                //         icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Aatrox.png'
                //     },
                //     {
                //         id: 2,
                //         name: 'Ahri',
                //         icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Ahri.png'
            
                //     },
                //     {
                //         id: 3,
                //         name: 'Akali',
                //         icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Akali.png'
                //     },
                //     {
                //         id: 4,
                //         name: 'Draven',
                //         icon_img: 'http://ddragon.leagueoflegends.com/cdn/10.3.1/img/champion/Draven.png'
                //     }
                // ])