import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { AwardsSection } from '../../components/AwardsSection';
import { HistoryTimeline } from '../../components/HistoryTimeline';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Milestones, growth numbers, awards and recognition earned by Brandz Pakistan across two decades of building homegrown QSR brands.',
};

export default async function AchievementsPage() {
  const { stats, awards, timeline, images, pageHeroes } = await getSiteContent();
  const hero = pageHeroes.achievements;

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Achievements'}
        crumbs={[{ label: 'Achievements' }]}
        image={images.award}
        title={hero?.title ||
          <>
            Two Decades of <span className="text-[#F6A18F]">Milestones</span>
          </>
        }
        description={hero?.description || 'Milestones, awards and recognition across our hospitality platform.'}
      />

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="By the Numbers" title="Growth You Can Measure" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="bg-[#F7F7F7] rounded-2xl p-6 border border-gray-200/80 text-center">
                <div className="font-heading font-extrabold text-4xl text-[#F05535]">{stat.prefix}{stat.value}{stat.suffix}</div>
                <div className="font-bold text-sm text-[#343538] mt-1">{stat.label}</div>
                <p className="text-xs text-[#717275] mt-0.5">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HistoryTimeline timeline={timeline} />
      <AwardsSection awards={awards} image={images.award} />
      <CTABand
        heading="Celebrate the Next Milestone With Us"
        text="Connect with Brandz Pakistan for partnerships, media enquiries, and growth opportunities."
        primaryLabel="Contact the Team"
        primaryHref="/contact"
        image={images.interior}
      />
    </>
  );
}
