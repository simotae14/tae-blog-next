import PageLayout from 'components/PageLayout';

import { getBlogBySlug } from 'lib/api';

const BlogDetail = ({
  blog
}) => {
  return (
    <PageLayout>
      <h1>Detail page {blog?.slug}</h1>
    </PageLayout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog
    }
  }
} 

export default BlogDetail;