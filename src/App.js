import React from 'react'
import Home from './Home'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Counter from './Counter'
import About from './About'
import Service from './Service'
import Assignment from './Assignment'
import ListingUsers from './ListingUsers'
import GenerateRandom from './GenerateRandom'
import UserShow from './UserShow'
import ThisName from './ThisName'



function App(){
    return(
        
        <div>
            <BrowserRouter>
            <h2>Hello React</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/users">Users</Link></li>  
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/assignment">Assignment</Link></li> 
            </ul>

            <Route path="/" component={Home} exact={true} />
            <Route path="/counter" component={Counter} />
            <Route path="/about" component={About}/>
            <Route path="/services" component={Service}/>
            <Route path="/assignment" component={Assignment} />
            
            <Route path="/users" component={ListingUsers} exact={true}/>
            <Route path="/users/:id" component={UserShow}/>
            <Route path="/users/:id/:name" component={ThisName} exact={true}/>
            </BrowserRouter>
        </div>
    )
}

export default App