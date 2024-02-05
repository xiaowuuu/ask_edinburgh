import React, { useEffect, useState } from "react";
import { getData } from "../services/Api";



const UserComponent: React.FC = () => {
  const [userData, setUserData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        console.log('fetch data', data)
        setUserData(data);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }
    fetchData();
    }, [])
  
  return (
    <div>
      {userData.length > 0 ? (
        <>
        {userData.map((user)=> (
          <h2>
          User:{user.username}
          </h2>
        ))}
        
        </>
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UserComponent;