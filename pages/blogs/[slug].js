import PageLayout from 'components/PageLayout';

import { getBlogBySlug, getAllBlogs } from 'lib/api';

const BlogDetail = ({
  blog
}) => {
  return (
    <PageLayout>
      <h1>Detail page {blog?.slug}</h1>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog
    }
  }
};

export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();
  const paths = blogs?.map(({ slug }) => ({
    params: {
      slug
    }
  }));
  return {
    paths,
    fallback: false
  }
};

export default BlogDetail;