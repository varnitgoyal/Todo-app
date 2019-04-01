import React from 'react'
import {Redirect} from 'react-router-dom';

function LogOut(props) {
  if(props.isAuthenticated){
    return(
        <div>

    
       { props.toggleAuthentication()}
       <h1>Logout component</h1>
        <Redirect to="/login"/>
        </div>

    )  
   

  }
}

export default LogOut
