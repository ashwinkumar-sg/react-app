import React from 'react'
import {Link,Route} from 'react-router-dom'
import ListingUsers from './ListingUsers'
import GenerateRandom from './GenerateRandom'



function Assignment(){
    return(
        
        <div>
            <h2>Listing Assignment</h2>
            <ol>
                <li><Link to="/assignment/listing-users">Listing Users</Link></li>
                <li><Link to="/assignment/generate-random">generate random</Link></li>
            </ol>
            <Route path="/assignment/listing-users" component={ListingUsers}/>
            <Route path="/assignment/generate-random" component={GenerateRandom}/>
            
        </div>
    )
}
export default Assignment 