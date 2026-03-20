import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";


const brandEase = [0.16, 1, 0.3, 1] as const;

const HeroNames = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      <AnimatedBackground image="/palace_umaid_bhawan.png" />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: brandEase }}
      >
        <div className="glass-box">
          <motion.p
            className="label-style text-champagne mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            YOU ARE CORDIALLY INVITED
          </motion.p>

          <h1 className="heading-display text-6xl md:text-8xl text-foreground leading-none">
            ABHISHEK
          </h1>
          <p className="font-body uppercase text-sm tracking-[0.3em] text-champagne my-4">
            W E D S
          </p>
          <h1 className="heading-display text-6xl md:text-8xl text-foreground leading-none">
            KANIKA
          </h1>

          <motion.p
            className="label-style text-champagne mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            SAVE THE DATE
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="label-style text-champagne text-[10px]">SCROLL TO BEGIN</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-champagne">
          <path d="M10 4L10 16M10 16L4 10M10 16L16 10" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroNames;
