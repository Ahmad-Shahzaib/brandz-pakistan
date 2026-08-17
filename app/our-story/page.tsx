import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { BrandStory } from '../../components/BrandStory';
import { MissionVision } from '../../components/MissionVision';
import { CoreValues } from '../../components/CoreValues';
import { HistoryTimeline } from '../../components/HistoryTimeline';
import { SomethingDifferentStrip } from '../../components/SomethingDifferentStrip';
import { Leadership } from '../../components/Leadership';
import { CTABand } from '../../components/CTABand';
import { STOREFRONT_IMAGE } from '../../data/corporateData';

export const metadata: Metadata = {
  title: 'Our Story',
  description:
    'Born from a love for great chicken and built for bigger ambitions — the story, philosophy and growth journey of Fri-Chiks ®.',
};

export default function OurStoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        crumbs={[{ label: 'Our Story' }]}
        image={STOREFRONT_IMAGE}
        title={
          <>
            Born From a Love for Great Chicken.
            <br />
            <span className="text-[#FFC700]">Built for Bigger Ambitions.</span>
          </>
        }
        description="From a single kitchen in Lahore in 2002 to a 45+ outlet network — a journey powered by consistent taste, standardized systems and franchise partnership."
      />
      <BrandStory />
      <SomethingDifferentStrip />
      <MissionVision />
      <CoreValues />
      <HistoryTimeline />
      <Leadership />
      <CTABand
        heading="Be Part of the Fri-Chiks ® Story"
        text="Whether you love the food or want to build a business with us, there is a place for you in our journey."
      />
    </>
  );
}
