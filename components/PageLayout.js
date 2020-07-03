import React from 'react';
import { Container } from 'react-bootstrap';
import BlogNavbar from './BlogNavbar';

const PageLayout = ({ children, className }) => {
  return (
    <Container>
      <BlogNavbar />
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>    
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>{' | '}
          <a href="#">github</a>{' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
};

export default PageLayout;