import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr/>
      {JSON.stringify(blogs)}
      <Row className="mb-5">
        <Col md="10">
          <CardListItem />
        </Col>
        <Col md="4">
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  );
};

// This function is called during the build (build time), always server side
// Provides props to your page
// it will create static page
export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
} 

export default Home;