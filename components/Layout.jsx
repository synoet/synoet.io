import React from 'react';
import Head from 'next/head';

import Footer from './Footer';

export default function Layout({children}){
  return (
    <div className="bg-gray-900">
      <Head>
        <title>teo</title>
        <meta name="description" content="my personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center px-8 bg-gray-900">
        {children}
        <Footer />
      </main>
    </div>
  );
};
