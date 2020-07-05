import PageLayout from 'components/PageLayout';

import { getBlogBySlug } from 'lib/api';

const BlogDetail = ({
  blog
}) => {
  console.log('Displaying page');
  return (
    <PageLayout>
      <h1>Detail page {blog?.slug}</h1>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  console.log('Fetching blog by', params.slug);
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog
    }
  }
};

export const getStaticPaths = () => {
  console.log('getting paths for every page');
  return {
    paths: [{
      params: {
        slug: 'my-third-blog'
      }
    },
    {
      params: {
        slug: 'my-second-blog'
      }
    },
    {
      params: {
        slug: 'my-first-blog'
      }
    }],
    fallback: false
  }
};

export default BlogDetail;