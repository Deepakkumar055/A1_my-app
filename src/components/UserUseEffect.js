import React from 'react'
<<<<<<< HEAD

const UserUseEffect = () => {
  return (
    <div>UserUseEffect</div>
  )
}

export default UserUseEffect
=======
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
function UserUseEffect() {
    const [userData, setUserData] = useState()
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => {
                console.log(response.data);
                setUserData(response.data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    useEffect(()=>{
        getData()
    },[])
   
    return (
        <div>
            {
                userData?.map((obj) => {
                    return(
                        <>
                        <h2>User Id:{obj.id}</h2>
                        <p>title:{obj.title}</p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default UserUseEffect
>>>>>>> 0b62ebc1331f81a075379b642c7e35a0e6bf8687
