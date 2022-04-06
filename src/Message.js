import React, { useEffect, useState } from 'react';

export default function Message({isUserLoggedIn}) {
  useEffect(()=>{
    console.log('User is loggedin')
    return  ()=> {
      console.log('Bye!')
    };
  }, [isUserLoggedIn] )

  return <h1>User is logged in</h1>;
}
