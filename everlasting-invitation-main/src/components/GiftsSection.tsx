import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const GiftsSection = () => {
  return (
    <section className="min-h-[60vh] bg-transparent flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      <AnimatedBackground image="/palace_hawa_mahal.png" />
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-box">
          <p className="label-style mb-6">A NOTE ON GIFTS</p>

          <h2 className="heading-display text-4xl md:text-6xl text-foreground mb-6">
            Your presence is our present
          </h2>

          <p className="font-body text-foreground/60 leading-relaxed mb-10">
            Your love, blessings, and presence at our wedding celebrations are the greatest gifts we could ever ask for. However, if you wish to bless us with something more, we would be grateful for a contribution towards our new journey together.
          </p>

          <motion.button
            className="px-10 py-3 border border-champagne bg-champagne/10 text-foreground font-body uppercase text-sm tracking-[0.2em] hover:bg-champagne/20 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send with Love
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftsSection;
