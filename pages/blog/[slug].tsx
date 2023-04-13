import { sanityClient, urlFor } from "@/sanity";
import { formatBlogDate } from "@/utils/helpers";
import type { GetStaticProps } from "next";
import PortableText from "react-portable-text";

const BlogPost = ({ post }: { post: Post }) => {
  return (
    <div>
      <img src={urlFor(post.mainImage).url()} alt={post.title} />
      <h1>{post.title}</h1>
      <div>{formatBlogDate(post.publishedAt)}</div>
      <div>{post.description}</div>
      <div>{post.author.name}</div>
      <div>
        {post?.categories?.map((category: Category) => (
          <span key={category._id}>{category.title}</span>
        ))}
      </div>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={post.body}
      />
    </div>
  );
};

export default BlogPost;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]|order(publishedAt desc) [0...20]{
        _id,
       slug
      }
    `;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        title,
        mainImage,
        publishedAt,
        description,
        author -> {
          name,
          image
        },
        categories,
        publishedAt,
        body
      }
    `;
  let post = {};
  try {
    post = await sanityClient.fetch(query, { slug: params?.slug });
  } catch (err) {
    console.log(err);
    return {
      notFound: true,
    };
  }
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 5,
  };
};
