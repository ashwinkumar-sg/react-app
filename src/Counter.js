import React from 'react'

class Counter extends React.Component {
    constructor(){
        console.log('constructor');
        super(); // call constructor in parent class
        this.state = { 
            count : 1,
            text : 'counter'
         }
    }

    handleClick(){
        console.log('handle click');
        // this.state.count +=1
        // console.log(this.satae)

        this.setState(function(prevState){
            return {
                count:prevState.count+1
            }
        })
    }

    handleClickDown(){
        this.setState(function(prevState){
            return{
                count:prevState.count-1
            }
        })
    }

        render(){
            console.log('render',this)
        return(
            <div>
                <h1>{this.state.text} {this.state.count}</h1>
                <button className="btn btn-success" onClick={this.handleClick.bind(this)}>UP</button>
                <button className="btn btn-danger" onClick={this.handleClickDown.bind(this)}>DOWN</button>
            </div>
        )
    }
}

export default Counter