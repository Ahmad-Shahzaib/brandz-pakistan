'use client';

import React, { createContext, useContext, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FranchiseModal } from './FranchiseModal';
import { VideoModal } from './VideoModal';
import { ScrollReveal } from './ScrollReveal';

interface ModalContextValue {
  openFranchiseModal: () => void;
  openVideoModal: () => void;
}

const ModalContext = createContext<ModalContextValue>({
  openFranchiseModal: () => {},
  openVideoModal: () => {},
});

export const useModals = () => useContext(ModalContext);

export const SiteChrome: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [franchiseOpen, setFranchiseOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openFranchiseModal: () => setFranchiseOpen(true),
        openVideoModal: () => setVideoOpen(true),
      }}
    >
      <Navbar />
      <ScrollReveal />
      <main className="grow">{children}</main>
      <Footer />
      <FranchiseModal
        isOpen={franchiseOpen}
        onClose={() => setFranchiseOpen(false)}
      />
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </ModalContext.Provider>
  );
};
