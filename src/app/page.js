import Image from 'next/image'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="md:w-[700px] sm:w-full flex flex-col space-y-4 p-8">
        <h1 className="font-bold text-3xl"> TEO NYS </h1>
        <p> I'm a software engineer based in New York City. Currently working at <a className="text-[#EF7C24]" href="https://www.macro.com">Macro</a>, building the future of document editing.</p>

        <p>I have been working as a software engineer for 4 years. I graduated from <a className="text-[#EF7C24]" href="https://www.nyu.edu">New York University</a> with a Bachelors in Computer Science.</p>

        <p>In my free time, I enjoy building side projects like like <a className="text-[#EF7C24]" href="https://www.github.com/synoet/ballast">ballast</a>, <a className="text-[#EF7C24]" href="https://www.github.com/synoet/cdwe">cdwe</a>, <a className="text-[#EF7C24]" href="https://github.com/AnubisLMS/Anubis">Anubis</a>
        . Currently I'm enjoying writing in <a className="text-[#EF7C24]" href="https://www.rust-lang.org/">Rust</a> and <a className="text-[#EF7C24]" href="https://www.typescriptlang.org/">Typescript</a>. Outside of programming I enjoy photography, and reading science fiction.
      </p>

      <p> Please check me out on <a className="text-[#EF7C24]" href="https://www.github.com/synoet">Github</a> and <a className="text-[#EF7C24]" href="https://www.linkedin.com/in/nysteo/">Linkedin</a>.</p>
      </div>
    </main>
  )
}
