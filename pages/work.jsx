import Layout from '../components/Layout';
export default function Work(){


  function Position({title, company, dateRange}){
    return (
      <div className="w-full flex flex-col text-gray-300 mt-4 ">
        <div className="w-full flex justify-between items-center">
          <h1>{title}<span className="ml-4 text-gray-500">({company})</span></h1>
          <p className="text-gray-500">{dateRange}</p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <h1 className="mt-16 text-5xl text-gray-300">Work</h1>
        <p className="text-gray-500 mt-4">A Collection of thoughts, discoveries that passed through my mind. I will also occasionally post content from my lectures at nyu</p>
        <h2 className="text-2xl text-gray-300 mt-6">Positions</h2>
        <div className="flex flex-col gap-4 w-full">
          {positions && positions.map((position, index) => (
            <Position
              key={`${position.title}-${index}`}
              title={position.title}
              company={position.company}
              dateRange={position.dateRange}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}


const positions = [
  {
    title: "Software Engineer",
    company: "Epam Systems",
    dateRange: "June 2021 - Present",
  },
  {
    title: "Researcher",
    company: "New York University",
    dateRange: "January 2022 - Present",
  },
  {
    title: "Maintainer",
    company: "AnubisLMS",
    dateRange: "June 2021 - Present",
  },
  {
    title: "Junior Software Engineer",
    company: "Epam Systems",
    dateRange: "November 2021 - June 2021",
  },
  {
    title: "Founder & Engineer",
    company: "Clarissa AI",
    dateRange: "March 2020 - Jan 2021",
  },
]
