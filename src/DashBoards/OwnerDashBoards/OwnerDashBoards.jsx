// import React, { useEffect, useState } from 'react'
// import TopLayer from './TopLayer/TopLayer';
// import { Outlet } from 'react-router-dom'
// import { onAuthStateChanged } from 'firebase/auth';
// import { db, authentication } from '../../FirebaseConfig/config';
// import { doc, getDoc } from 'firebase/firestore';

// const OwnerDashBoards = () => {
//   const [ownerName, setOwnerName] = useState("");

//   useEffect(()=>{
//     const fetchOwnerData = async()=>{
//       onAuthStateChanged(authentication, async (user) =>{
//         if (user) {
//           try{
//             const docRef = doc(db, "Owners", user.uid); // 'owners' collection
//             const docSnap = await getDoc(docRef)

//             if (docSnap.exists()){
//               const data = docSnap.data()
//               setOwnerName(data.displayName || "Owner"); // Ensure Firestore field is 'name'
//             }else{
//               console.log("🚫 No user logged in")
//             }
//           }
//           catch(error){
//             console.error('Error fetching owner data:', error);
//           }
//         }
//       })
//     }

//     fetchOwnerData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <TopLayer ownerName={ownerName}/>
//       </div>
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   )
// }

// export default OwnerDashBoards


import React, { useEffect, useState } from 'react';
import TopLayer from './TopLayer/TopLayer';
import { Outlet } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from '../../FirebaseConfig/config';

const OwnerDashBoards = () => {
  const [ownerName, setOwnerName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      if (user) {
        console.log("🔐 Authenticated user:", user);
        setOwnerName(user.displayName || 'Owner');
      } else {
        console.log("🚫 No user logged in");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div>
        <TopLayer ownerName={ownerName} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default OwnerDashBoards;

