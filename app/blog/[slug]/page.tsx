import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AppointmentModal from '@/components/booking/AppointmentModal';
import SymptomScreenerModal from '@/components/screener/SymptomScreenerModal';
import ParentAssistant from '@/components/ai/ParentAssistant';
import ScheduleBanner from '@/components/home/ScheduleBanner';
import ArticleCTA from '@/components/blog/ArticleCTA';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts';
import { Metadata } from 'next';
import { Clock, Calendar, ChevronLeft, Share2, Tag, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return {
      title: 'Article Not Found | Vice Versa Speech and Language Services',
    };
  }

  return {
    title: `${post.title} | Vice Versa Clinical Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);

  // JSON-LD structured data for SEO (Medical/Clinical Article)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'MedicalBusiness',
      name: 'Vice Versa Speech and Language Services',
      logo: {
        '@type': 'ImageObject',
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=400',
      },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Top Breadcrumb & Article Header */}
        <div className="bg-gray-50 border-b border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#9C1D38] hover:underline"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Volver a la Lista de Artículos / All Articles</span>
            </Link>

            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-red-100 text-[#9C1D38] text-xs font-bold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
              <span className="text-xs text-gray-500 flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2B2B2B] font-serif leading-tight">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {post.description}
            </p>

            {/* Author Profile */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#9C1D38]">
                <Image
                  src={post.authorAvatar}
                  alt={post.author}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#2B2B2B]">{post.author}</h3>
                <p className="text-xs text-[#9C1D38] font-medium">{post.authorRole}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative h-72 sm:h-[450px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Article Body Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article
            className="prose prose-lg max-w-none text-gray-800 font-sans leading-relaxed
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#2B2B2B] [&>h2]:font-serif [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:border-b [&>h2]:border-gray-200 [&>h2]:pb-2
              [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#9C1D38] [&>h3]:mt-6 [&>h3]:mb-3
              [&>p]:text-base [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-4
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2 [&>ul]:mb-6
              [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:space-y-2 [&>ol]:mb-6
              [&>li]:text-sm [&>li]:sm:text-base [&>li]:text-gray-700
              [&>blockquote]:bg-red-50/70 [&>blockquote]:border-l-4 [&>blockquote]:border-[#9C1D38] [&>blockquote]:p-4 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:my-6
              [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:text-xs [&>table]:sm:text-sm
              [&>table_th]:bg-[#9C1D38] [&>table_th]:text-white [&>table_th]:p-3 [&>table_th]:text-left
              [&>table_td]:border [&>table_td]:border-gray-200 [&>table_td]:p-3"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Interactive CTA Card for Appointment */}
          <div className="mt-12">
            <ArticleCTA category={post.category} />
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#9C1D38]">
                  Continuar Leyendo
                </span>
                <h3 className="text-2xl font-bold text-[#2B2B2B] font-serif">
                  Artículos Relacionados / Related Clinical Articles
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rel) => (
                  <div
                    key={rel.slug}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="relative h-40 w-full bg-gray-100">
                        <Image
                          src={rel.coverImage}
                          alt={rel.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <span className="text-[10px] font-bold text-[#9C1D38] bg-red-50 px-2 py-0.5 rounded-full">
                          {rel.category}
                        </span>
                        <h4 className="font-bold text-sm text-[#2B2B2B] font-serif line-clamp-2 hover:text-[#9C1D38]">
                          <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                        </h4>
                      </div>
                    </div>
                    <div className="p-4 pt-0 border-t border-gray-100 mt-2 flex justify-end">
                      <Link
                        href={`/blog/${rel.slug}`}
                        className="text-xs font-bold text-[#9C1D38] hover:underline inline-flex items-center space-x-1"
                      >
                        <span>Leer</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <ScheduleBanner />
      </main>
      <Footer />
      <AppointmentModal />
      <SymptomScreenerModal />
      <ParentAssistant />
    </div>
  );
}
