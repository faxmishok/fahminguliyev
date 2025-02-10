import { getBlogPosts } from 'app/blog/utils';

export const baseUrl = 'https://fahminguliyev.com';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', 'blog', 'projects', 'about', 'uses', 'resume'].map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
