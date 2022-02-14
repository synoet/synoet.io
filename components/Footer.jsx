import Link from 'next/link';
import {Box} from 'react-feather';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full flex items-center text-gray-300 gap-4 mb-8">
        <Box size={16} className="text-green" />
        <p className="text-sm">Made by Teo Nys 2022</p>
      </div>
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600 transition">
              About
            </a>
          </Link>
          <Link href="/newsletter">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Contact
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/synoet">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/nysteo">GitHub</ExternalLink>
          <ExternalLink href="https://github.com/resume">Resume</ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600 transition">Projects</a>
          </Link>
          <Link href="/lab">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Lab
            </a>
          </Link>
          <Link href="/tweets">
            <a className="text-gray-500 hover:text-gray-600 transition">
              Articles
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
