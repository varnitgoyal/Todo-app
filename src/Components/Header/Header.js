import './Header.css';
import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';


function Header(props) {
  return (
    <div className={props.className}>
        <h1>TODOS</h1>
        <nav>
        
         
            <Link className="link" to="/todos">Todos</Link>
        {props.isAuthenticated ? <Link  className="link" to="/logout">Logout</Link> : <Link  className="link" to="/login">Login</Link>}
        </nav>
        
      
    </div>
  )
}




const HeaderStyled=styled(Header)`
display:flex;
justify-content:space-between;
align-items:center;
background-color:#318BA3;
color:white;

.link{
    margin-right:10px;
    text-decoration:none;
    color:white;
}


h1{
    margin-left:10px;
}

`


export default HeaderStyled
