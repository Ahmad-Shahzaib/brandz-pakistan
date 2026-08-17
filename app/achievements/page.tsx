import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { SectionHeader } from '../../components/SectionHeader';
import { AwardsSection } from '../../components/AwardsSection';
import { HistoryTimeline } from '../../components/HistoryTimeline';
import { CTABand } from '../../components/CTABand';
import { STATS_DATA, AWARD_IMAGE } from '../../data/corporateData';

export const metadata: Metadata = {
  title: 'Achievements',
  description:
    'Milestones, growth numbers, awards and recognition earned by Fri-Chiks ® across two decades of building a homegrown QSR brand.',
};

export default function AchievementsPage() {
  return (
    <>
      <PageHero
        eyebrow="Achievements"
        crumbs={[{ label: 'Achievements' }]}
        image={AWARD_IMAGE}
        title={
          <>
            Two Decades of <span className="text-[#FFC700]">Milestones</span>
          </>
        }
        description="Recognised by food-safety guilds, franchise associations and — most importantly — millions of customers across Pakistan."
      />

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="By the Numbers" title="Growth You Can Measure" />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS_DATA.map((stat) => (
              <div key={stat.id} className="bg-[#FAF8F7] rounded-2xl p-6 border border-gray-200/80 text-center">
                <div className="font-heading font-extrabold text-4xl text-[#E51821]">{stat.prefix}{stat.value}{stat.suffix}</div>
                <div className="font-bold text-sm text-[#1A1818] mt-1">{stat.label}</div>
                <p className="text-xs text-[#6B655C] mt-0.5">{stat.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HistoryTimeline />
      <AwardsSection />
      <CTABand />
    </>
  );
}
