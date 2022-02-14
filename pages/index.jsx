import React from 'react';

import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
              Teo Nys 
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Computer Scientist at 
              <span className="font-semibold"> NYU</span>
              , Software Engineer at
              <span className="font-semibold"> EPAM</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping developers build a faster web. Teaching about web
              development, serverless, and React / Next.js.
            </p>
          </div>
        </div>
        <h3 className="font-bold text-xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured Projects
        </h3>
      </div>
    </Layout>
  )
}
