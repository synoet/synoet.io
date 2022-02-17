import BlogPost from '../../templates/BlogPost';
import {allBlogs} from '../../.contentlayer/generated/allBlogs.mjs';

export default function Post({ post }) {
  return (
    <BlogPost post={post}>
      <div dangerouslySetInnerHTML={{__html: post.body.html}} />
    </BlogPost>
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

  return { props: { post} };
}
