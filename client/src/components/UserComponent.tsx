import React, { useEffect, useState } from "react";
import { fetchUserData } from "../services/Api";

type UserData = {
  user: {
    _id: string;
    username: string;
  };
}[];

const UserComponent: React.FC = () => {
  const [data, setData] = useState<UserData>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUserData();
        setData(userData);
      } catch (error) {
        console.error('error fetching data:', error);
      }
    }
    fetchData();
    }, [])
  
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.user._id}>
            User: {item.user.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserComponent;