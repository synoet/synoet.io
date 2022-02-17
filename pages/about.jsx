import Layout from '../components/Layout';
import Image from 'next/image';

export default function About(){
  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <div className="flex flex-col sm:flex-row items-start mt-16">
          <div className="flex flex-col pr-8 gap-2">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-white ">
              About Me 
            </h1>
            <h2 className="text-xl text-gray-200 mt-4">
              Backstory 
            </h2>
            <p className="text-gray-400 ">
              Hello My name is Teo Nys, I am a 21 year old programmer currently based in New York City.
              I have had a passion for programming and technology since middle school, and live on the small eureka moments I get when solving a problem.
              I am currently pursuing my Bachelor of Science In Computer Science from New York University.
              I am also working as a Software Engineer at EPAM Systems building out microservices aswell as beautiful and fast applications.
            </p>
            <h2 className="text-xl text-gray-200 mt-4">
              Development
            </h2>
            <p className="text-gray-400 ">
              I started my professional journey at the begginning of college, working mostly on front-end projects.
              Since then I have had the wonderful opportunity to work on alot of different production applications.
              Ive worked as a DevOps Engineer, MicroServices Developer, and Full Stack Engineer.
            </p>
            <p className="text-gray-400 mt-3 ">
              More recently I learned that my passion lies in building tools for myself and other engineers.
            </p>

            <p className="text-gray-400 mt-3">
              Alot of the work I do on projects and at work is in typescript/javascript. 
              However I love to explore different languages and tools, I also have frequently used c & python.
              I am currently learning Rust in my free time.
            </p>
            <h2 className="text-xl text-gray-200 mt-4">
              Free Time
            </h2>
            <p className="text-gray-400 ">
              When Im not working I enjoy playing and walking my dog Korra, aswell as reading and playing chess.
            </p>
            <h2 className="text-xl text-gray-200 mt-4">
              Languages
            </h2>
            <p className="text-gray-400 ">
              I speak English, Russian, and German fluently. Though recently german not so much.
            </p>
            <h2 className="text-xl text-gray-200 mt-4">
              My Dev Environment
            </h2>
            <p className="text-gray-300/80 ">
              <span className="text-gray-500">OS:</span> Arch Linux 5.15.5 + i3wm + lightdm
            </p>
            <p className="text-gray-400 ">
              <span className="text-gray-500">Shell:</span> zsh + oh-my-zsh + powerline10k 
            </p>
            <p className="text-gray-400 ">
              <span className="text-gray-500">Terminal:</span> Suckless Terminal + Tmux
            </p>
            <p className="text-gray-400 ">
             <span className="text-gray-500">Editor:</span> Neovim + Telescope + TreeSitter + Lsp (lua)
            </p>
            <p className="text-gray-400 ">
              <span className="text-gray-500">Colorscheme:</span>Dracula
            </p>
            <Image src="/static/images/dev.png" width="900px" height='500px' className="w-full" alt="picture of setup"/>
            <h2 className="text-xl text-gray-200 mt-4">
              Hardware
            </h2>
            <p className="text-gray-300/80 ">
              <span className="text-gray-500">PC:</span> AMD Ryzen 5 3600, RTX 2070 Super, 32gb ram
            </p>
            <p className="text-gray-300/80 ">
              <span className="text-gray-500">Laptop:</span> Razer 14 2021, 3070
            </p>
            <p className="text-gray-400 ">
              <span className="text-gray-500">Monitor:</span> Aorus 32in 4k 144hz IPS
            </p>
            <p className="text-gray-400 ">
              <span className="text-gray-500">Keyboard:</span> GMMK Pro, Milky Yellow and sometimes Kinesis Advantage 2 
            </p>
            <p className="text-gray-400 ">
             <span className="text-gray-500">Mouse</span> Logitech G703 lightspeed
            </p>
            <p className="text-gray-300 mt-10">
              - Teo Nys 
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
