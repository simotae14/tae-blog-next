import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
import CardListItem from 'components/CardListItem';
import FilteringMenu from 'components/FilteringMenu';

import { getAllBlogs } from 'lib/api';

const Home = ({ blogs }) => {
  const [ filter, setFilter ] = useState({
    view: {
      list: 0
    }
  })
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu onChange={() => {
        setFilter({
          view: {
            list: filter.view.list === 0 ? 1 : 0
          }
        })
      }} />
      <hr/>
      <Row className="mb-5">
        {/*<Col md="10">
          <CardListItem />
        </Col>*/}
        {
          blogs.map(({ title, subtitle, date, coverImage, slug, author }) => (
            filter.view.list ?
            (
              <Col md="9">
                <CardListItem />
              </Col>
            ) : (
              <Col key={slug} md="4">
                <CardItem
                  title={title}
                  subtitle={subtitle}
                  date={date}
                  image={coverImage}
                  author={author}
                  link={{
                    href: "/blogs/[slug]",
                    as: `/blogs/${slug}`
                  }}
                />
              </Col>
            )
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
