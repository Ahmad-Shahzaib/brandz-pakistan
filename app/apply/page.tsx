import type { Metadata } from 'next';
import { PageHero } from '../../components/PageHero';
import { FranchiseApplication } from '../../components/FranchiseApplication';
import { TEAM_IMAGE } from '../../data/corporateData';

export const metadata: Metadata = {
  title: 'Franchise Application',
  description:
    'Apply to become a Fri-Chiks ® franchise partner. Complete the multi-step application and our franchise development team will be in touch.',
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Franchise Application"
        crumbs={[{ label: 'Franchise', href: '/franchise' }, { label: 'Apply' }]}
        image={TEAM_IMAGE}
        title={
          <>
            Start Your <span className="text-[#F6A18F]">Franchise Journey</span>
          </>
        }
        description="It takes a few minutes. Your details are reviewed by our franchise development team — there is no commitment at this stage."
      />
      <section className="py-16 sm:py-20 bg-[#F7F7F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FranchiseApplication />
        </div>
      </section>
    </>
  );
}
