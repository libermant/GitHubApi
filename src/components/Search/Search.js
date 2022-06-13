import React from 'react'
import "./Search.css"

const Search = ({setGitUser,gitUser}) => {
  return (
    <div id='input'>
    <input type="text" value={gitUser} onChange={(e)=>setGitUser(e.target.value)}/>
    </div>
  )
}

export default Search