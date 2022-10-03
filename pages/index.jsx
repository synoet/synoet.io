import React from 'react';
import Link from 'next/link';

import {ArrowRight} from 'react-feather';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import ArticleCard from '../components/ArticleCard';
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
