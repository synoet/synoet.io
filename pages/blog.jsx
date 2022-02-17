import {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import {allBlogs} from '../.contentlayer/generated/allBlogs.mjs';
import ArticleCard from '../components/ArticleCard';

export default function Blog(){
  const [posts, setPosts] = useState(undefined);
  const [reset, setReset] = useState(0);

  useEffect(() => {
    const blogPosts = allBlogs
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  console.log(blogPosts);

    setPosts(blogPosts);
  }, [reset]);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 mx-auto pb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 mt-16 text-white ">
          My Blog
        </h1>
        <p className="text-gray-500 mt-4">A Collection of thoughts, discoveries that passed through my mind. I will also occasionally post content from my lectures at nyu.</p>
        {posts && (
          <div className="w-full mt-4 flex flex-col gap-2">
            {posts.map((post, index) => (
              <ArticleCard
                key={post.title}
                index={`0${index + 1}`}
                href={`/blog/${post.slug}`}
                length={post.readingTime.text}
                title={post.title}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  )

}

