// import React, { useEffect, useState } from "react";
// import { fetchUserData, UserData } from "../services/Api";
// import QuestionComponent from "./QuestionComponent";


// const UserComponent: React.FC = () => {
//   const [data, setData] = useState<UserData[]>([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userData = await fetchUserData();
//         setData(userData);
//       } catch (error) {
//         console.error('error fetching data:', error);
//       }
//     }
//     fetchData();
//     }, [])
  
//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.user._id}>
//             User: {item.user.username}
//             <ul>
//               {item.questions.map((question)=> (
//                 <QuestionComponent key={question._id} question={question}/>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default UserComponent;