import React, {useState} from 'react'


//react router
import { Switch, Route } from 'react-router-dom'; 
import { useHistory } from 'react-router-dom' 


//components
import Form from './Form';
import Dashboard from './Dashboard';
import FriendsList from './FriendList';
import NavBar from './NavBar';  
import PrivateRoute from './PrivateRoute'; 
import User from './User'; 


//styled 
import '../App.css'; 
import axios from 'axios';





const App = () => {

    const credentials = {
        username: 'Lambda School', 
        password: 'i<3Lambd4', 
    }

    let history = useHistory(); 

    const [information, setInformation] = useState(credentials)
    const [isLoggedIn, setIsLoggedIn] = useState(false); 


    const onInputChange = e => {


        setInformation({
            ...information, 
            [e.target.name]: e.target.value, 
        })
    }

    const onFormSubmit = e => {

        e.preventDefault(); 
        //make axios call to post your information
        axios.post('http://localhost:5000/api/login', information)
        .then(res => {
            localStorage.setItem("token", res.data.payload); 
            setIsLoggedIn(true); 
            history.push('/protected'); 

        })
        .catch(err => {
            console.log(err); 
        })

        
    }


    const onLogoutClick = () => {
        localStorage.removeItem("token"); 
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact>
                    <NavBar onLogoutClick={onLogoutClick} />
                    <Form onInputChange={onInputChange} information={information} onFormSubmit={onFormSubmit}/> 
                </Route>

                <Route path="/protected">
                    <NavBar onLogoutClick={onLogoutClick} /> 
                    <Dashboard /> 
                    <FriendsList /> 
                </Route>

                <Route path="/user">
                    <User /> 
                </Route>
            </Switch>
        </div>
    )
}

export default App
