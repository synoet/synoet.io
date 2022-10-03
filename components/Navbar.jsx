import cn from 'classnames';

import NextLink from 'next/link';
import Image from 'next/image';
import {useRouter} from 'next/router';
import {Zap} from 'react-feather';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-white font-semibold'
            : 'font-normal text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:bg-neutral-700/50 rounded-md'
        )}
      >
        <span>{text}</span>
      </a>
    </NextLink>
  );
}

export default function Navbar(){
  return (
    <div className="flex flex-col justify-center items-center pb-4 pt-4">
      <div className="flex w-full justify-between max-w-2xl items-center">
        <NextLink href={"/"}>
          <Image className="cursor-pointer hover:animate-pulse" width={25} height={25} src='/static/images/LogoWhite.svg'/>
        </NextLink>
        <div className="flex gap-2 items-center">
          <NavItem href='/' text="Home" />
          <NavItem href='/about' text="About" />
          <NavItem href='/work' text="Work" />
          <NavItem href='/blog' text="Blog" />
          <NavItem href="/lab" text="Lab" />
        </div>
      </div>
    </div>
  )
}


