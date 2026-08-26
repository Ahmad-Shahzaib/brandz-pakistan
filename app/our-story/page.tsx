import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { BrandStory } from '../../components/BrandStory';
import { MissionVision } from '../../components/MissionVision';
import { CoreValues } from '../../components/CoreValues';
import { HistoryTimeline } from '../../components/HistoryTimeline';
import { SomethingDifferentStrip } from '../../components/SomethingDifferentStrip';
import { Leadership } from '../../components/Leadership';
import { CTABand } from '../../components/CTABand';
import { getSiteContent } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Built around food, franchise systems, and bigger ambitions: the story, philosophy, and growth journey of Brandz Pakistan.',
};

export default async function OurStoryPage() {
  const { images, timeline, coreValues, leadership, pageHeroes, ourStoryIntro, ourStorySignature, ourStoryMissionVision, ourStoryCta } = await getSiteContent();
  const hero = pageHeroes['our-story'];
  const cta = ourStoryCta[0];

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow || 'Our Story'}
        crumbs={[{ label: 'Our Story' }]}
        image={images.storefront}
        title={hero?.title ||
          <>
            Born From a Love for Great Chicken.
            <br />
            <span className="text-[#F6A18F]">Built for Bigger Ambitions.</span>
          </>
        }
        description={hero?.description || 'A journey powered by consistent taste, standardized systems and franchise partnership.'}
      />
      <BrandStory image={images.hero} content={ourStoryIntro[0]} />
      <SomethingDifferentStrip teamImage={images.team} interiorImage={images.interior} content={ourStorySignature[0]} />
      <MissionVision items={ourStoryMissionVision} />
      <CoreValues values={coreValues} />
      <HistoryTimeline timeline={timeline} />
      <Leadership members={leadership} />
      <CTABand
        heading={cta?.title || 'Be Part of the Brandz Pakistan Story'}
        text={cta?.text || cta?.description || ''}
        primaryLabel={cta?.label || 'Apply for Franchise'}
        primaryHref={cta?.value || '/apply'}
        image={images.interior}
      />
    </>
  );
}
