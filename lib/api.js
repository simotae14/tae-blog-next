import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{
    name,
    'avatar':avatar.asset->url
  },
  'coverImage': coverImage.asset->url
`;

// api to fetch all blogs
export const getAllBlogs = async () => {
  const results = await client
    .fetch(`*[_type == "blog"]{
      ${blogFields}
    }`);

  return results;
};

const builder = imageUrlBuilder(client);
// function to retrieve the real url of an image
export const urlFor = source => builder.image(source);

// api to fetch one specific blog post
export const getBlogBySlug = async (slug) => {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug]{
      ${blogFields},
      content[]{..., "asset":asset->}
    }`, {slug}).then(res => res?.[0]);
  return result;
}
