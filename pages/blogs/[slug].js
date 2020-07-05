import PageLayout from 'components/PageLayout';
import BlogHeader from 'components/BlogHeader';
import BlogContent from 'components/BlogContent';
import { Row, Col } from 'react-bootstrap';

import { getBlogBySlug, getAllBlogs } from 'lib/api';

const BlogDetail = ({
  blog
}) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader 
            title={blog?.title}
            subtitle={blog?.subtitle}
            author={blog?.author}
            date={blog?.date} 
            coverImage={blog?.coverImage}
          />
          <hr/>
          <BlogContent 
            content={blog?.content}
          />
        </Col>
      </Row>
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