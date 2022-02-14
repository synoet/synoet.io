import Link from 'next/link';

import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-40 mt-40">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
         500 - Developer Laziness 
        </h1>
        <p className="text-gray-400 mb-8">
          Seems like I got distracted and forgot to implement this page.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto text-center rounded-md text-slate-400 hover:text-slate-200">
            Return Home
          </a>
        </Link>
      </div>
    </Layout>
  );
}
