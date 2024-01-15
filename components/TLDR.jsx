import React from 'react';

const TLDR = () => {
  return (
    <div className="h-full w-full space-y-2 rounded-md py-6">
      <h2 className="font-bold text-lg md:text-2xl tracking-tight text-gray-300">
        TLDR;
      </h2>
      <div className="w-full flex items-center justify-between mt-4">
        <div className="">
          <h2 className="text-sm text-gray-500">Software Engineer at:</h2>
          <h1 className="font-bold text-lg text-gray-400">Macro</h1>
        </div>
        <div className="">
          <h2 className="text-sm text-gray-500">Located In:</h2>
          <h1 className="font-bold text-lg text-gray-400">New York City</h1>
        </div>
        <div className="">
          <h2 className="text-sm text-gray-500">Hacking On:</h2>
          <h1 className="font-bold text-lg text-gray-400">Ballast</h1>
        </div>
      </div>

    </div>
  )
}

export default TLDR;
