import { useState, useEffect } from "react";
import ProfileCard from "./component/ProfileCard";
import SearchBar from "./component/SearchBar";

export default function App() {
  const [userData, setUserData] = useState({
    username: "no-user",
    followers: "0",
    following: "0",
    repos: "0",
    date:"",
    imageURL: "https://images.unsplash.com/photo-1612916628677-475f676a6adf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "no-user"
  });
  const [error, setError] = useState(null);
  const [userId,setUserId]=useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.github.com/users/${userId}`);
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const data = await res.json();
        const obj = {
          username: data.login,
          followers: data.followers,
          following: data.following,
          repos: data.public_repos,
          date: new Date(data.created_at),
          imageURL:data.avatar_url,
          url:data.html_url,
        }
       
        setUserData(obj);
      } catch (err) {
         setError(err.message);
      }
    }
    if(userId)fetchData();
  }, [userId]);
  return (
   <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-150 flex justify-center items-center flex-col">
      <SearchBar setUserId={setUserId}/>
      <ProfileCard
       userData={userData}
       error={error}
      />
    </div>
   </div>
    
  );
}
