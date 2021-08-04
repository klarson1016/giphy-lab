import React from 'react'
import Giphy from './Giphy'
const GiphyList = (props) => { 
    return (
    <> 
        {props.giphys.map(giphy =><Giphy giphy={giphy.images.original.url} /> )}
    </> 
    )
}
export default GiphyList 