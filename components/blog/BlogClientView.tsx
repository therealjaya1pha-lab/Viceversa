'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';
import { useApp } from '@/context/AppContext';
import { Search, Clock, Calendar, User, ArrowRight, Tag, BookOpen } from 'lucide-react';

interface BlogClientViewProps {
  posts: Post[];
  featuredPost: Post | null;
}

export default function BlogClientView({ posts, featuredPost }: BlogClientViewProps) {
  const { language } = useApp();
  const isEs = language === 'es';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-12">
      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEs ? 'Buscar artículos o temas...' : 'Search articles or topics...'}
            className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#9C1D38]"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#9C1D38] text-white shadow-sm'
                  : 'bg-white text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat === 'All' ? (isEs ? 'Todos' : 'All') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post Card (Show if 'All' category and no search query) */}
      {featuredPost && selectedCategory === 'All' && !searchQuery && (
        <div className="bg-white rounded-2xl border-2 border-red-100 shadow-md overflow-hidden hover:shadow-xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[300px]">
              <Image
                src={featuredPost.coverImage}
                alt={featuredPost.title}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#9C1D38] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {isEs ? 'Artículo Destacado' : 'Featured Article'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <span className="bg-red-50 text-[#9C1D38] font-bold px-3 py-1 rounded-full border border-red-100">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#2B2B2B] font-serif leading-tight hover:text-[#9C1D38] transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {featuredPost.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={featuredPost.authorAvatar}
                      alt={featuredPost.author}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#2B2B2B]">{featuredPost.author}</h4>
                    <p className="text-[10px] text-gray-500">{featuredPost.date}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center space-x-1 text-xs font-bold text-[#9C1D38] hover:text-[#7A1429]"
                >
                  <span>{isEs ? 'Leer Artículo' : 'Read Article'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-[#2B2B2B] font-serif flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-[#9C1D38]" />
          <span>
            {isEs
              ? `Artículos de Desarrollo y Salud (${filteredPosts.length})`
              : `All Clinical Articles (${filteredPosts.length})`}
          </span>
        </h3>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
            <p className="text-sm text-gray-500">
              {isEs
                ? 'No se encontraron artículos que coincidan con su búsqueda.'
                : 'No clinical articles found matching your criteria.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-[#9C1D38] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center space-x-3 text-[11px] text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#2B2B2B] font-serif hover:text-[#9C1D38] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>

                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                  <div className="flex items-center space-x-2 pt-3">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={post.authorAvatar}
                        alt={post.author}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[11px] font-medium text-gray-700">{post.author}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="pt-3 text-xs font-bold text-[#9C1D38] hover:underline flex items-center space-x-1"
                  >
                    <span>{isEs ? 'Leer' : 'Read'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
