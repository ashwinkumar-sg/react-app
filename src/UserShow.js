import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class UserShow extends React.Component{
    constructor(){
        super()
        this.state = {
            users:{}
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const users=response.data
            this.setState({users})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.state.users)
        return(
            <div>
                <h2>show page - {this.props.match.params.id}</h2>
                <p>{this.state.users.name}- {this.state.users.email}-{this.state.users.website}</p>
                <Link to={`/users/${this.props.match.params.id}/${this.state.users.name}`}>this name</Link><br/>
                <Link to="/users">back</Link>
            </div>
        )
    }
}
export default UserShow