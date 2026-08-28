'use client';

import React, { createContext, useContext, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FranchiseModal } from './FranchiseModal';
import { VideoModal } from './VideoModal';
import { ScrollReveal } from './ScrollReveal';
import type { FooterSection, MenuItem, SiteContent } from '@/lib/api';

interface ModalContextValue {
  openFranchiseModal: () => void;
  openVideoModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openFranchiseModal: () => {},
  openVideoModal: () => {},
});

export const useModals = () => useContext(ModalContext);

type ChromeContent = Pick<SiteContent, 'settings' | 'images' | 'menus' | 'footer'>;

const settingText = (settings: ChromeContent['settings'], group: string, key: string, fallback = '') => {
  const raw = settings[group]?.[key]?.text ?? settings[group]?.[key]?.value;
  return typeof raw === 'string' ? raw : fallback;
};

export const SiteChrome: React.FC<{ children: React.ReactNode; content?: ChromeContent }> = ({
  children,
  content,
}) => {
  const [franchiseOpen, setFranchiseOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const partnerLabel = settingText(content?.settings || {}, 'site', 'partner_portal_label', 'Partner Portal');
  const partnerUrl = settingText(content?.settings || {}, 'site', 'partner_portal_url', '/contact');

  return (
    <ModalContext.Provider
      value={{
        openFranchiseModal: () => setFranchiseOpen(true),
        openVideoModal: () => setVideoOpen(true),
      }}
    >
      <Navbar
        logo={content?.images.logo}
        links={(content?.menus.primary?.items || []) as MenuItem[]}
        partnerLabel={partnerLabel}
        partnerUrl={partnerUrl}
      />
      <ScrollReveal />
      <main className="grow">{children}</main>
      <Footer
        logo={content?.images.footerLogo}
        tagline={settingText(content?.settings || {}, 'site', 'tagline')}
        email={settingText(content?.settings || {}, 'contact', 'email')}
        phone={settingText(content?.settings || {}, 'contact', 'phone')}
        address={settingText(content?.settings || {}, 'contact', 'address')}
        sections={(content?.footer || []) as FooterSection[]}
      />
      <FranchiseModal
        isOpen={franchiseOpen}
        onClose={() => setFranchiseOpen(false)}
      />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} poster={content?.images.hero} />
    </ModalContext.Provider>
  );
};
