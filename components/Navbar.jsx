import cn from 'classnames';

import NextLink from 'next/link';
import {useRouter} from 'next/router';
import {Box} from 'react-feather';

function NavItem({ href, text }) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

export default function Navbar(){
  return (
    <div className="flex flex-col justify-center items-center pb-4 pt-4">
      <div className="flex w-full justify-between max-w-2xl items-center">
        <div>
          <Box size={24} className="text-green" />
        </div>
        <div className="flex gap-2 items-center">
          <NavItem href='/' text="Home" />
          <NavItem href='/about' text="About" />
          <NavItem href='/projects' text="Projects" />
          <NavItem href='/articles' text="Articles" />
          <NavItem href="/lab" text="Lab" />
        </div>
      </div>
    </div>
  )
}


