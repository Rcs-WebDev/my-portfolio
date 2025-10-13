"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const blogs = [
  {
    id: 1,
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large-scale React applications using TypeScript, custom hooks, and modern patterns for maintainable code.',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
  },
  {
    id: 2,
    title: 'Optimizing Laravel Performance for High-Traffic Applications',
    excerpt: 'Discover advanced techniques for optimizing Laravel applications, including database optimization, caching strategies, and queue management.',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Laravel',
  },
  {
    id: 3,
    title: 'Modern JavaScript Patterns and Best Practices',
    excerpt: 'Explore modern JavaScript features, design patterns, and best practices that will make your code more efficient and maintainable.',
    thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'JavaScript',
  },
  {
    id: 4,
    title: 'Database Design Principles for Web Applications',
    excerpt: 'Learn essential database design principles, normalization techniques, and optimization strategies for modern web applications.',
    thumbnail: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-12-28',
    readTime: '15 min read',
    category: 'Database',
  },
  {
    id: 5,
    title: 'Creating Responsive UIs with Tailwind CSS',
    excerpt: 'Master the art of building responsive, mobile-first user interfaces using Tailwind CSS utility classes and component composition.',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-12-20',
    readTime: '7 min read',
    category: 'CSS',
  },
  {
    id: 6,
    title: 'API Development Best Practices with Node.js',
    excerpt: 'Build robust and secure APIs using Node.js, Express, and modern authentication techniques for scalable backend systems.',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2023-12-15',
    readTime: '11 min read',
    category: 'Node.js',
  },
];

export function BlogSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development, technology, and best practices
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-indigo-600 text-white">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(blog.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {blog.title}
                  </CardTitle>
                  
                  <CardDescription className="line-clamp-3">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-indigo-600 hover:text-indigo-700 group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-indigo-500 text-indigo-600 hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            View All Posts
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}