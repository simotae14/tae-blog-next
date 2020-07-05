import client from './sanity';

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
    .fetch(`*[_type == "blog"]{${blogFields}}`);

  return results;
};

// api to fetch one specific blog post
export const getBlogBySlug = async (slug) => {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug]{
      ${blogFields}
    }`, {slug}).then(res => res?.[0]);
  return result;
}