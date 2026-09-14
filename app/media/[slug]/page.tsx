import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsArticle, getSiteContent } from '@/lib/api';
import { CTABand } from '@/components/CTABand';
import { Calendar, Clock, ArrowLeft, Share2, Tag, ChevronRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { news } = await getSiteContent();
  return news.map((n) => ({ slug: n.slug || n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: `${article.title} – News & Media`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | Brandz Pakistan News`,
      description: article.summary,
      images: [article.image],
      type: 'article',
      publishedTime: article.date,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const { news, images } = await getSiteContent();
  const related = news.filter((n) => (n.slug || n.id) !== slug).slice(0, 2);

  const paragraphs = (article.body || article.summary)
    .split('\n\n')
    .filter((p) => Boolean(p.trim()));

  return (
    <main className="bg-[#F7F7F7] min-h-screen text-[#343538] pb-20">
      {/* Header Banner */}
      <section className="bg-[#292A2D] text-white pt-28 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 90%, #B93A23 0, transparent 35%), radial-gradient(circle at 90% 10%, #55575B 0, transparent 40%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to News &amp; Media
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#F05535] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-gray-400 text-xs">Official Press Release</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-white">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-gray-300 pt-4 border-t border-white/10">
            <span className="flex items-center gap-2 font-medium">
              <Calendar className="w-4 h-4 text-[#F6A18F]" />
              {article.date}
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Clock className="w-4 h-4 text-[#F6A18F]" />
              {article.readTime}
            </span>
            <span className="flex items-center gap-2 font-medium">
              <Tag className="w-4 h-4 text-[#F6A18F]" />
              Brandz Pakistan Corporate Communications
            </span>
          </div>
        </div>
      </section>

      {/* Main Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <article className="bg-white rounded-3xl border border-gray-200/80 shadow-md overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden bg-gray-100">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-12 space-y-6">
            <p className="body-lead text-[#343538] font-medium border-l-4 border-[#F05535] pl-4 italic">
              {article.summary}
            </p>

            <div className="space-y-5 text-sm sm:text-base text-[#343538] leading-relaxed">
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Media Contact Box */}
            <div className="mt-10 p-6 rounded-2xl bg-[#FFF0EC]/50 border border-[#F6A18F]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-extrabold text-base text-[#343538]">
                  Media &amp; Press Enquiries
                </h4>
                <p className="text-xs text-[#717275] mt-1">
                  For executive interviews, official commentary, or high-resolution brand assets.
                </p>
              </div>
              <Link href="/contact" className="btn-primary py-2.5 px-5 text-xs shrink-0 inline-block text-center">
                Contact Media Relations
              </Link>
            </div>
          </div>
        </article>

        {/* Related Coverage */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-extrabold text-2xl text-[#343538]">
                Related Stories
              </h3>
              <Link href="/media" className="text-xs font-bold text-[#F05535] hover:underline flex items-center gap-1">
                View all stories <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/media/${item.slug || item.id}`}
                  className="bg-white rounded-2xl border border-gray-200/80 p-5 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#F05535]">
                      {item.category}
                    </span>
                    <h4 className="font-heading font-extrabold text-base text-[#343538] group-hover:text-[#F05535] transition-colors mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#717275] mt-2 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#717275]">
                    <span>{item.date}</span>
                    <span className="text-[#F05535] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                      Read story <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>

      <div className="mt-20">
        <CTABand
          heading="Stay Connected with Brandz Pakistan"
          text="Subscribe to our quarterly investor and partner briefings or reach our corporate affairs desk."
          primaryLabel="Contact Media Desk"
          primaryHref="/contact"
          secondaryLabel="Partner Portal"
          secondaryHref="/portal"
          image={images.interior}
        />
      </div>
    </main>
  );
}
