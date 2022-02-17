import { useMDXComponent } from 'next-contentlayer/hooks';
import { getTweets } from 'lib/twitter';
import BlogLayout from 'layouts/blog';
import { allBlogs } from '.contentlayer/data';

export default function Post({ post }) {
  const Component = useMDXComponent(post.body.code);

  return (
    <BlogLayout post={post}>
      <Component />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug);
  const tweets = await getTweets(post.tweetIds);

  return { props: { post, tweets } };
}
