import {ArrowRight, Clock} from 'react-feather';

export default function ArticleCard({ href, length, title, index }) {
  return (
    <a
      className="w-full"
      href={href}
      aria-label={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full border p-4 rounded-sm border-gray-700 py-3 transform hover:scale-[1.01] transition-all">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center">
            <div className="text-gray-400 text-left mr-6">
              {index}
            </div>
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-100 w-32">
              {title}
            </h4>
          </div>
          <div className="flex items-center mt-2 sm:mt-0 w-full gap-3 sm:w-auto">
            <Clock size={14} className="text-gray-400"/>
            <p className="text-gray-400 text-left sm:text-right">
              {length} min
            </p>
          </div>
          <ArrowRight  className="text-gray-300"/>
        </div>
      </div>
    </a>
  );
}
