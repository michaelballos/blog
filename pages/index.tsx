import React from 'react';
import type { NextPage } from 'next'
import HomeContent from '../components/HomeContent';

const Home: NextPage = () => {
   return (
     <div>
       <HomeContent />       
       <h1
         style={{
            color: 'red',
         }}
       >
         THis is home
       </h1> 
        <div
          style={{
            position: 'absolute',
            top: '100vh',
            color: 'white'
          }}
        >
        YUP
        </div>
     </div>
 )
}

export default Home
