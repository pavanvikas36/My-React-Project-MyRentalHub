import React, { useEffect, useState } from 'react'
import { db } from '../../../FirebaseConfig/config'
import { getDoc, doc } from 'firebase/firestore'
import WishlistDisplay from './WishlistDisplay/WishlistDisplay'

const MyWishlist = () => {
  const [myWishlist, setMyWishlist] = useState([])
  const [user, setUser] = useState({});
   
  useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("loggedinRental"))
      if(userData && userData.user){
        setUser(userData.user)
      }
    }, [])

  useEffect(()=>{
    const fetchWishlist = async()=>{
        if (!user || !user.displayName) return;

        const userRef = doc(db, "Rentals", user.displayName);
        const userSnap = await getDoc(userRef)

        if(userSnap.exists()){
            const userData = userSnap.data()
            setMyWishlist(userData.wishlist || [])
        }
    }
    fetchWishlist()
  }, [user])
  return (
    <div>
      <WishlistDisplay myWishlist={myWishlist} />
    </div>
  )
}

export default MyWishlist
