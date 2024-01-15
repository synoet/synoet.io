import React from 'react';
import Link from 'next/link'

const projects = [
  {
    title: "cdwe",
    description: "configurable cd wrapper that lets you define your environment per directory.",
    link: "https://github.com/synoet/cdwe"
  },
  {
    title: "ballast",
    description: "a simple api load testing tool that lets you compare performance snapshots of your api.",
    link: "https://github.com/synoet/ballast"
  },
  {
    title: "Anubis LMS",
    description: "A Distributed Learning Management System for Computer Science Students",
    link: "https://github.com/AnubisLMS/Anubis"
  },
]

const Project = ({title, description, link}) => {
  return (
    <Link href={link} className="w-full ">
      <div className="flex w-full px-4 py-4 space-y-1 space-x-4 items-center border border-gray-600
      rounded-md cursor-pointer hover:border-purple-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103">
        <i className="devicon-github-original text-3xl text-gray-300"></i>
        <div>
          <h3 className="font-semibold text-xl text-gray-300">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}

const Projects = () => {
  return (
    <div className="h-full w-full space-y-4 rounded-md py-8">
      <h2 className="font-bold text-lg md:text-2xl tracking-tight text-gray-300">
        Recent Projects
      </h2>
      <div className="w-full flex flex-col space-y-6">
        {projects.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects;
