import React from 'react';
import Link from 'next/link'

const Branding = () => {
  return (
    <div className="h-full space-y-2 rounded-md py-8 ">
      <h1 className="font-bold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 w-[300px] h-[60px]">
        Teo Nys
      </h1>
      <p className="text-xl text-gray-400 font-normal">
        Software Engineer & Tinkerer
      </p>
      <p className="text-lg text-gray-500 font-normal">
        Passionate about solving problems, and building/designing tools and software that make people lives easier.
      </p>
    </div>
  )
}

export default Branding