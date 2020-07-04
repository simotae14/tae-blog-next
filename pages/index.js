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
      <Row className="mb-5">
        {/*<Col md="10">
          <CardListItem />
        </Col>*/}
        {
          blogs.map(({ title, subtitle, date, coverImage, slug }) => (
            <Col key={slug} md="4">
              <CardItem
                title={title}
                subtitle={subtitle}
                date={date}
                image={coverImage}
              />
            </Col>
          ))
        }
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async () => {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
} 

export default Home;