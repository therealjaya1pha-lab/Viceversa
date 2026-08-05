import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  coverImage: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  readTime: string;
  featured: boolean;
  contentHtml: string;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const contentHtml = marked.parse(content) as string;

      return {
        slug,
        title: data.title || 'Untitled Post',
        date: data.date || '',
        description: data.description || '',
        category: data.category || 'General',
        coverImage: data.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
        author: data.author || 'Vice Versa Clinical Team',
        authorRole: data.authorRole || 'Speech-Language Pathologist',
        authorAvatar: data.authorAvatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
        readTime: data.readTime || '4 min read',
        featured: Boolean(data.featured),
        contentHtml,
      };
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const contentHtml = marked.parse(content) as string;

    return {
      slug,
      title: data.title || 'Untitled Post',
      date: data.date || '',
      description: data.description || '',
      category: data.category || 'General',
      coverImage: data.coverImage || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200',
      author: data.author || 'Vice Versa Clinical Team',
      authorRole: data.authorRole || 'Speech-Language Pathologist',
      authorAvatar: data.authorAvatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
      readTime: data.readTime || '4 min read',
      featured: Boolean(data.featured),
      contentHtml,
    };
  } catch {
    return null;
  }
}

export function getFeaturedPost(): Post | null {
  const posts = getAllPosts();
  return posts.find((p) => p.featured) || posts[0] || null;
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): Post[] {
  const posts = getAllPosts().filter((p) => p.slug !== currentSlug);
  const sameCategory = posts.filter((p) => p.category === category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const fallback = posts.filter((p) => p.category !== category);
  return [...sameCategory, ...fallback].slice(0, limit);
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  return categories;
}
