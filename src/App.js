import {useEffect,useState} from "react";
import axios from 'axios'
import Search from "./components/Search/Search";
import Button from "./components/Button/Button";
import User from "./components/User/User";
import Sort from "./components/Sort/Sort";
import "./App.css"



function App() {
 const[gitUser,setGitUser] = useState("")
 const[searchUser,setSearchUser] =useState("")
 const[users,setUsers]=useState([]) 
 const[isSearched, setIsSearched] = useState(false); 
 const[sortBy,setSortBy]=useState("")
 


 
 


//npm i axios

  useEffect(()=>{
    try{
    async function fetchData(){
      const gitHubApiUl=`https://api.github.com/users/${searchUser}`
      if(searchUser==="")return;
      const {data}=await axios.get(gitHubApiUl)
      const {avatar_url,created_at,login,public_repos}=data
      setUsers([...users,{avatar_url,created_at,login,public_repos}])     
    }
    fetchData()}catch(e){
      console.log(e);
    }
  },[searchUser,sortBy])

  
  
  return (
    <>
    <Search setGitUser={setGitUser} gitUser={gitUser}/>

    <Button text={"Search"}
     clickEvent={()=>{
       console.log("Search");
       setSearchUser(gitUser);
       setIsSearched(true);
      console.log(isSearched);
       setGitUser("")}} />

    <Button text={"Reset"}
     clickEvent={(e)=>{
       /*e.target.parentElement.children[5].remove()*/
       setUsers([])}}/>     

    <Sort users={users} setGitUser={setGitUser} gitUser={gitUser} sortBy={sortBy} setSortBy={setSortBy}/>    
    
    <div id="flex"> 
      {isSearched? users.map((user)=>      
       <User avatar_url={user.avatar_url}
        created_at={user.created_at.split("T")[0]}
        login={user.login}
        public_repos={user.public_repos}/>):("")}   
    </div>
    
    </> 
  );
}

export default App;
