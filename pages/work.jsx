import Layout from '../components/Layout';
import {Activity, Star, Award} from 'react-feather';
export default function Work(){


  function Position({title, company, dateRange, active}){
    return (
      <div className="w-full relative flex flex-col text-gray-300 mt-2 border border-gray-800 p-4">
        {active && <Activity className="text-orange absolute -top-2 -right-2" size={20}/>}
        <div className="w-full flex justify-between items-center">
          <h1>{title}<span className="ml-4 text-gray-500">({company})</span></h1>
          <p className="text-gray-500">{dateRange}</p>
        </div>
      </div>
    )
  }

  function Skill({name, rating, isPrimary}){
    return (
      <div className="w-full relative flex flex-col text-gray-300 mt-2 border border-gray-800 p-4">
        {isPrimary && <Award className="text-orange absolute -top-2 -right-2" size={20}/>}
        <div className="w-full flex justify-between items-center">
          <h1>{name}</h1>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((r) => {
              if (r <= rating) {
                return (
                <Star size={15} className="text-gray-300" />
                )
              }
            })}
          </div>
        </div>
      </div>

    )
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <h1 className="mt-16 text-5xl text-gray-300">Work</h1>
        <p className="text-gray-300 mt-4">Work Experience, Education, Languages, Tools</p>
        <h2 className="text-3xl text-gray-300 mt-6 font-bold">Positions</h2>
        <p className="text-gray-400 flex items-center gap-2 mt-4"><Activity size={20} className="text-orange"/> means currently active</p>
        <div className="flex flex-col gap-4 w-full mt-6">
          {positions && positions.map((position, index) => (
            <Position
              key={`${position.title}-${index}`}
              title={position.title}
              company={position.company}
              dateRange={position.dateRange}
              active={position.active}
            />
          ))}
        </div>
        <h2 className="text-3xl text-gray-300 mt-8 font-bold">Education</h2>
        <div className="flex flex-col w-full mt-6">
          <Position
            title={"Bachelor of Computer Science"} 
            company={"New York University"}
            dateRange={"2022"}
            active={true}
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-300 mt-8">Knowledge</h2>
        <p className="text-gray-400 flex items-center gap-2 mt-6"><Star className="text-gray-300" size={17}/>Profficiency from [beginner, advanced]</p>
        <p className="text-gray-400 flex items-center gap-2 mt-2"><Award className="text-orange" size={17}/>Primary Skill</p>
        <h3 className ="text-xl text-gray-300 mt-8">Technologies</h3>
        <div className="flex flex-col gap-4 mt-2 w-full grid grid-cols-2">
          {languages.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>

        <h3 className ="text-xl text-gray-300 mt-8">Libraries / Frameworks</h3>
        <div className="flex flex-col gap-4 mt-2 w-full grid grid-cols-2">
          {libs.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>

        
      </div>
    </Layout>
  )
}

const languages = [
  {
    name: "Typescript",
    rating: 5,
    isPrimary: true,
  },
  {
    name: "Javascript",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Python",
    rating: 3,
    isPrimary: false,
  },
  {
    name: "C/C++",
    rating: 2,
    isPrimary: false,
  },
  {
    name: "Rust",
    rating: 2,
    isPrimary: false,
  }
]

const libs = [
  {
    name: "React Js",
    rating: 5,
    isPrimary: true,
  },
  {
    name: "Redux",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Nextjs",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Express Js",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Prisma/TypeORM",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Nodejs",
    rating: 4,
    isPrimary: true,
  },
  {
    name: "FastAPI",
    rating: 2,
    isPrimary: false,
  },
  {
    name: "Flask",
    rating: 3,
    isPrimary: false,
  },
  {
    name: "Jest",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Mocha",
    rating: 4,
    isPrimary: false,
  },
  {
    name: "Serverless Framework",
    rating: 3,
    isPrimary: false,
  },
  {
    name: "Cypress",
    rating: 3,
    isPrimary: false,
  }
]

const positions = [
  {
    title: "Software Engineer",
    company: "Epam Systems",
    dateRange: "June 2021 - Present",
    active: true,
  },
  {
    title: "CS TA",
    company: "New York University",
    dateRange: "May 2021 - Present",
    active: true,
  },
  {
    title: "Researcher",
    company: "New York University",
    dateRange: "January 2022 - Present",
    active: true,
  },
  {
    title: "Maintainer",
    company: "AnubisLMS",
    dateRange: "June 2021 - Present",
    active: true,
  },
  {
    title: "Jr Software Engineer",
    company: "Epam Systems",
    dateRange: "November 2021 - June 2021",
    active: false,
  },
  {
    title: "Founder & Engineer",
    company: "Clarissa AI",
    dateRange: "March 2020 - Jan 2021",
    active: false,
  },
]
