import React from 'react'
import FavoriteButton from './FavoriteButton'

export default class Form extends React.Component {

    state = {
        src: 'https://dev-inavisphere.chrobinson.com/orders/audit/v1',
        favorites: []
    }

    handleChange = e => {
        const src = e.target.value;
        this.setState(state => ({
            src
        }));
        console.log(`Changed state to ${e.target.value}`)
    }

    onNavigateClick = () => {
        this.props.onNavigate(this.state.src)
    }

    manageFavorite = () => {
        debugger
        const alreadyAdded = this.state.favorites.some(url => url === this.state.src)
        const resultingFavorites = alreadyAdded
            ? this.state.favorites.filter(src => src !== this.state.src)
            : [...this.favorites.src, this.state.src]
        console.log(`Resulting array : ${JSON.stringify(resultingFavorites)}`)
        this.setState({ faviorites: resultingFavorites })
    }

    render() {
        console.log(`Rendering with ${JSON.stringify(this.props)}`)
        console.log(`Rendering with state ${JSON.stringify(this.state)}`)
        return (
            <form>
                <input
                    value= { this.state.src }
                    onChange= {this.handleChange }
                />
                <button
                    type="button"
                    onClick= { this.onNavigateClick }>
                    Navigate
                </button>
                <FavoriteButton currentSrc={this.state.src} />
            </form>
        )
    }

}