import React, { useRef } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Test from '../components/Test';

const Home: NextPage = () => {
   return (
    <div>
      <Head>
        <title>Michael Ballos Blog</title>
        <meta name="Description" content="Web Dev Blog" />
      </Head>
      <main>
        <Test /> 
      </main>
    </div>
  )
}

export default Home
