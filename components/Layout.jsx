import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}){
  return (
    <div className="bg-background">
      <Head>
        <title>teo</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex flex-col justify-center px-8 bg-background">
        {children}
        <Footer />
      </main>
    </div>
  );
};
