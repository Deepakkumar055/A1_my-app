import React from 'react'
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
