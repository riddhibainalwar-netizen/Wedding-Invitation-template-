import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import CurtainOpening from "@/components/CurtainOpening";
import HeroNames from "@/components/HeroNames";
import ScratchToReveal from "@/components/ScratchToReveal";
import FlowerCelebration from "@/components/FlowerCelebration";
import CountdownVenue from "@/components/CountdownVenue";
import ThingsToKnow from "@/components/ThingsToKnow";
import DressCode from "@/components/DressCode";
import GiftsSection from "@/components/GiftsSection";
import RSVPSection from "@/components/RSVPSection";
import ThankYou from "@/components/ThankYou";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [allDatesRevealed, setAllDatesRevealed] = useState(false);

  return (
    <div className="relative no-scrollbar">
      <BackgroundMusic play={curtainOpen} />

      <AnimatePresence>
        {!curtainOpen && (
          <CurtainOpening onOpen={() => setCurtainOpen(true)} isOpen={curtainOpen} />
        )}
      </AnimatePresence>

      {/* Keep curtains visible during animation */}
      {curtainOpen && (
        <CurtainOpening onOpen={() => {}} isOpen={curtainOpen} />
      )}

      {curtainOpen && (
        <main>
          <HeroNames />
          <ScratchToReveal onAllRevealed={() => setAllDatesRevealed(true)} />
          {allDatesRevealed && <FlowerCelebration />}
          <CountdownVenue />
          <ThingsToKnow />
          <DressCode />
          <GiftsSection />
          <RSVPSection />
          <ThankYou />
        </main>
      )}
    </div>
  );
};

export default Index;
