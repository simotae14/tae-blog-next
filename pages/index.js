import { useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs, randomNumber }) => {
  console.log('Hello World');
  useEffect(() => {
    console.log(blogs);
    console.log(randomNumber);
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <hr/>
      <h1>{ randomNumber }</h1>
      <Row className="mb-5">
        {/*<Col md="10">
          <CardListItem />
        </Col>*/}
        {
          blogs.map(({ title, subtitle, slug }) => (
            <Col key={slug} md="4">
              <CardItem
                title={title}
                subtitle={subtitle}
              />
            </Col>
          ))
        }
      </Row>
    </PageLayout>
  );
};

// This function is called during the build (build time), always server side
// Provides props to your page
// it will create static page
export const getStaticProps = async () => {
  const randomNumber = Math.random();
  const blogs = await getAllBlogs();
  return {
    props: {
      randomNumber,
      blogs
    }
  }
} 

// request time rendered data
// export const getServerSideProps = async () => {
//   const randomNumber = Math.random();
//   const blogs = await getAllBlogs();
//   return {
//     props: {
//       randomNumber,
//       blogs
//     }
//   }
// } 

export default Home;