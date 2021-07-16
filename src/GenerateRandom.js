import React from 'react'

class GenerateRandom extends React.Component{
    constructor(){
        super()
        this.state = {
            random:''
        }
    }

    handleClick = () =>{
        this.setState({random:Math.round(Math.random()*100)})
    }





    render(){
        return(
            <div>
                <h1>{this.state.random}</h1>
                <Show handleClick={this.handleClick}/>
            </div>
        )
    }
}

function Show(props){
    return <button onClick={props.handleClick}>generate</button>
}

export default GenerateRandom