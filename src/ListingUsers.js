import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class ListingUsers extends React.Component {
    constructor(){
        console.log('constructor');
        super()
        this.state = {
            users : []
        }
    }
 
    componentDidMount(){
        //get,post,put,delete
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //console.log(response.data)
            const users = response.data
            this.setState({users})
        })//success
        .catch((err)=>{
            console.log(err)
        })//failure
    }



render() {
    console.log('render');
    return(
        <div>
            {
                this.state.users.length == 0 ? (<p>loading ...</p>) : (
                    <div>
                        <h2>Listing users - {this.state.users.length}</h2>
                        <ul>
                            {
                                this.state.users.map(function(user){
                                    return <li key={user.id}><Link to={`/users/${user.id}`}></Link></li>
                                })
                            }
                        </ul>
                    </div>
                )  
            }
        </div>
    )
}
}

export default ListingUsers