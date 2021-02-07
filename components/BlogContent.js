import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'components/HighlightCode';

import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({
      node: {
        language,
        code,
        filename
      }
    }) => (
      <HighlightCode
        language={language}
      >
        {code}
        <div className="code-filename">{filename}</div>
      </HighlightCode>
    ),
    // serializers for the images
    image: ({node: { alt, asset, imagePosition }}) => {
      debugger
      return (
        <div className="blog-image">
          <img src={urlFor(asset).height(300).fit('max').url()} />
          <div className="image-alt">{alt}</div>
        </div>
      )
    }
  }
};

const BlogContent = ({content}) => {
  return (
    <>
      <BlockContent
        serializers={serializers}
        blocks={content}
      />
    </>
  );
};

export default BlogContent;
