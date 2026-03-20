import { motion } from "framer-motion";
import palaceHero from "@/assets/palace-hero.jpg";

const brandEase = [0.16, 1, 0.3, 1] as const;

interface CurtainOpeningProps {
  onOpen: () => void;
  isOpen: boolean;
}

const CurtainOpening = ({ onOpen, isOpen }: CurtainOpeningProps) => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Left Curtain */}
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 bg-midnight curtain-gradient pointer-events-auto"
        initial={{ x: 0 }}
        animate={isOpen ? { x: "-100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: brandEase }}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.15) 100%), url(${palaceHero})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      />
      
      {/* Right Curtain */}
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 bg-midnight curtain-gradient pointer-events-auto"
        initial={{ x: 0 }}
        animate={isOpen ? { x: "100%" } : { x: 0 }}
        transition={{ duration: 1.4, ease: brandEase }}
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.15) 100%), url(${palaceHero})`,
          backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      />

      {/* Center seam line */}
      {!isOpen && (
        <motion.div
          className="absolute inset-y-0 left-1/2 w-px bg-champagne/30 pointer-events-none"
          exit={{ opacity: 0 }}
        />
      )}

      {/* Enter Button */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: brandEase }}
        >
          <button
            onClick={onOpen}
            className="relative px-10 py-4 border border-champagne bg-transparent text-champagne font-body uppercase text-sm tracking-[0.25em] hover:bg-champagne/10 transition-colors duration-500"
          >
            <span className="relative z-10">Enter the Theater</span>
            <motion.span
              className="absolute inset-0 border border-champagne/50"
              style={{ margin: "-4px" }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default CurtainOpening;
