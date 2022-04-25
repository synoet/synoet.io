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
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16 w-full">
        <h1 className="mt-16 text-5xl text-gray-200 font-bold">Work</h1>
        <p className="text-gray-300 mt-4">Work Experience, Education, Languages, Tools</p>
        <h2 className="text-3xl text-gray-300 mt-12 font-bold">Positions</h2>
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
        <h2 className="text-3xl text-gray-300 mt-12 font-bold">Education</h2>
        <div className="flex flex-col w-full mt-6">
          <Position
            title={"Bachelor of Computer Science"} 
            company={"New York University"}
            dateRange={"2022"}
            active={true}
          />
        </div>

        <h2 className="text-3xl font-bold text-gray-300 mt-14">Knowledge</h2>
        <p className="text-gray-400 flex items-center gap-2 mt-8"><Star className="text-gray-300" size={17}/>Profficiency from [beginner, advanced]</p>
        <p className="text-gray-400 flex items-center gap-2 mt-2"><Award className="text-orange" size={17}/>Primary Skill</p>
        <h3 className ="text-xl text-gray-300 mt-10">Concepts</h3>
        <div className="flex flex-col gap-6 mt-2 w-full grid grid-cols-2">
          {concepts.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>

        <h3 className ="text-xl text-gray-300 mt-10">Technologies</h3>
        <div className="flex flex-col gap-6 mt-2 w-full grid grid-cols-2">
          {languages.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>

        <h3 className ="text-xl text-gray-300 mt-10">Libraries / Frameworks</h3>
        <div className="flex flex-col gap-4 mt-6 w-full grid grid-cols-2">
          {libs.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>


        <h3 className ="text-xl text-gray-300 mt-10">Tools</h3>
        <div className="flex flex-col gap-4 mt-6 w-full grid grid-cols-2">
          {tools.map((skill) => (
            <Skill key={skill.name} {... skill} />
          ))}
        </div>


        
      </div>
    </Layout>
  )
}

const concepts = [
  {
    name: "FE Development",
    rating: 4,
    isPrimary: true,
  },
  {
    name: "API Development",
    rating: 4,
    isPrimary: true,
  },
  {
    name: "OOP",
    rating: 4,
  },
  {
    name: "FP",
    rating: 3,
  },
  {
    name: "Agile/Scrum",
    rating: 3,
  },
  {
    name: "Unit Testing",
    rating: 5
  },
  {
    name: "E2E Testing",
    rating: 3,
  },
  {
    name: "Devops",
    rating: 3,
  },
  {
    name: "Version Control",
    rating: 4,
  },
  {
    name: "Infra",
    rating: 3,
  }
]

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
  },
  {
    name: "Nextjs",
    rating: 4,
  },
  {
    name: "Express Js",
    rating: 4,
  },
  {
    name: "Prisma/TypeORM",
    rating: 4,
  },
  {
    name: "Nodejs",
    rating: 4,
    isPrimary: true,
  },
  {
    name: "FastAPI",
    rating: 2,
  },
  {
    name: "Flask",
    rating: 3,
  },
  {
    name: "Jest",
    rating: 4,
  },
  {
    name: "Mocha",
    rating: 4,
  },
  {
    name: "Serverless Framework",
    rating: 3,
  },
  {
    name: "Cypress",
    rating: 3,
  }
]

const tools = [
  {
    name: "git",
    rating: 5,
  },
  {
    name: "docker",
    rating: 4,
  },
  {
    name: "docker-compose",
    rating: 3,
  },
  {
    name: "serverless",
    rating: 3,
  },
  {
    name: "postgres",
    rating: 3,
  },
  {
    name: "redis",
    rating: 3,
  },
  {
    name: "mysql",
    rating: 4,
  },
  {
    name: "mongo",
    rating: 3,
  },
  {
    name: "aws",
    rating: 3,
  },
  {
    name: "kubernetes",
    rating: 2 
  },
]

const positions = [
  {
    title: "Software Engineer",
    company: "Epam Systems",
    dateRange: "Jun 2021 - Present",
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
    dateRange: "Jan 2022 - Present",
    active: true,
  },
  {
    title: "Maintainer",
    company: "AnubisLMS",
    dateRange: "Jun 2021 - Present",
    active: true,
  },
  {
    title: "Jr Software Engineer",
    company: "Epam Systems",
    dateRange: "Nov 2021 - Jun 2021",
    active: false,
  },
  {
    title: "Founder & Engineer",
    company: "Clarissa AI",
    dateRange: "March 2020 - Jan 2021",
    active: false,
  },
]
