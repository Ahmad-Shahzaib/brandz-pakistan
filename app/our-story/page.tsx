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

  const introFallback = {
    id: 'intro',
    label: 'Culinary Passion',
    title: 'Born from Flavor. Scaled Through Systems.',
    text: 'Brandz Pakistan started with a singular conviction: that extraordinary food concepts thrive when delicious recipes are matched with uncompromising kitchen discipline and transparent franchise partnerships.',
    description: 'Today, our group supports dozens of food and hospitality brands across Pakistan, combining central procurement, chef-led menu innovation, and rigorous field audits.',
    value: 'Strict temperature controls, certified halal sourcing, and daily culinary checks across every kitchen.',
    icon: 'ShieldCheck',
  };

  const signatureFallback = {
    id: 'signature',
    label: 'Brand Philosophy',
    title: 'Flavours Built for Everyday Memories',
    text: 'Every brand in our portfolio is designed to create joyful dining moments — whether it is a fast-casual lunch, a celebratory family dinner, or late-night takeout.',
    description: 'Passionate hospitality professionals at your service',
    value: 'Crafted with genuine care',
    icon: 'Heart',
  };

  const missionVisionFallback = [
    {
      id: 'mission',
      label: 'Our Mission',
      title: 'Elevate Pakistan’s Hospitality Experience',
      text: 'To build, nurture and expand high-standard food brands that deliver consistent taste, memorable service and accessible quality in every community we serve.',
      description: 'Customer obsession in every recipe and guest encounter',
      icon: 'Target',
      value: '',
    },
    {
      id: 'vision',
      label: 'Our Vision',
      title: 'Pakistan’s Leading Multi-Brand Platform',
      text: 'To become the gold standard of restaurant franchising in South Asia — empowering hundreds of local entrepreneurs with proven operational models.',
      description: 'Durable business growth powered by integrity and innovation',
      icon: 'Eye',
      value: '',
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={hero?.eyebrow && hero.eyebrow.toLowerCase() !== 'our story' ? hero.eyebrow : 'Heritage & Vision'}
        crumbs={[{ label: 'Our Story' }]}
        image={images.storefront}
        title={hero?.title ||
          <>
            Born From a Love for Great Taste.
            <br />
            <span className="text-[#F6A18F]">Built for National Scale.</span>
          </>
        }
        description={hero?.description || 'A journey powered by consistent taste, standardized systems, and durable franchise partnerships.'}
      />
      <BrandStory image={images.hero} content={ourStoryIntro[0] || introFallback} />
      <SomethingDifferentStrip teamImage={images.team} interiorImage={images.interior} content={ourStorySignature[0] || signatureFallback} />
      <MissionVision items={ourStoryMissionVision?.length >= 2 ? ourStoryMissionVision : missionVisionFallback} />
      <CoreValues values={coreValues} />
      <HistoryTimeline timeline={timeline} />
      <Leadership members={leadership} />
      <CTABand
        heading={cta?.title || 'Be Part of the Brandz Pakistan Story'}
        text={cta?.text || cta?.description || 'Partner with a growing hospitality group committed to operational excellence and long-term brand equity.'}
        primaryLabel={cta?.label || 'Apply for Franchise'}
        primaryHref={cta?.value || '/apply'}
        image={images.interior}
      />
    </>
  );
}
