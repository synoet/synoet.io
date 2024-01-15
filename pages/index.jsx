import React from 'react';
import Layout from '../components/Layout';
import Branding from '../components/Branding';
import TLDR from '../components/TLDR';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16 space-y-8">
        <Branding />
        <TLDR />
        <Projects />
      </div>
    </Layout>
  )
}
