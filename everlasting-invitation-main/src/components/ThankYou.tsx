import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const ThankYou = () => {
  return (
    <section className="min-h-[70vh] bg-transparent flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      <AnimatedBackground image="/palace_jal_mahal.png" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="glass-box">
          <h2 className="heading-display text-4xl md:text-6xl text-foreground leading-tight">
            We can't wait to
            <br />
            <span className="text-champagne">celebrate with you</span>
          </h2>

          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <span className="heading-display italic text-xl text-foreground/60">Abhishek</span>
            <span className="text-champagne text-xl">&</span>
            <span className="heading-display italic text-xl text-foreground/60">Kanika</span>
          </motion.div>

          <motion.p
            className="label-style text-foreground/30 mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            MARCH 2026 • JAIPUR
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default ThankYou;
