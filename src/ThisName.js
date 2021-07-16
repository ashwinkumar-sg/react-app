import React from 'react'

function ThisName(props){
    return(
        <div>
            <h2>{props.match.params.name}</h2>
        </div>
    )
}

export default ThisName