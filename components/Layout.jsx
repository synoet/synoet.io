import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({children}){
  return (
    <div className="bg-neutral-900 min-h-screen">
      <Head>
        <title>teo nys</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="flex flex-col justify-center px-8 bg-neutral-900 py-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};
