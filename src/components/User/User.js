import React, { useRef } from 'react'
import './User.css'
import Button from '../Button/Button'

const User = ({avatar_url,created_at,login,public_repos}) => {
    const classNameUser=useRef(null)

  return (
    <div className='user'  ref={classNameUser}>          
        <img src={avatar_url}/>
        <div className='login'>{login}</div>
        <div className='Created'>Created At: {created_at}</div> 
        <div className='repos'>  
            <div className='public'>{public_repos}</div>
            <div className='Repositories'>Repositories</div>
        </div>
        <button className='clear' onClick={(e)=>(e.target.parentElement.remove())}>Clear</button>            
    </div>    
  )
}

export default User