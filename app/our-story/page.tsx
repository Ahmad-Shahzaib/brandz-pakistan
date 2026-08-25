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
    'Born from a love for great chicken and built for bigger ambitions — the story, philosophy and growth journey of Fri-Chiks ®.',
};

export default async function OurStoryPage() {
  const { images, timeline, coreValues, leadership, pageHeroes } = await getSiteContent();
  const hero = pageHeroes['our-story'];

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
      <BrandStory image={images.hero} />
      <SomethingDifferentStrip teamImage={images.team} interiorImage={images.interior} />
      <MissionVision />
      <CoreValues values={coreValues} />
      <HistoryTimeline timeline={timeline} />
      <Leadership members={leadership} />
      <CTABand
        heading="Be Part of the Fri-Chiks ® Story"
        text="Whether you love the food or want to build a business with us, there is a place for you in our journey."
        image={images.interior}
      />
    </>
  );
}
