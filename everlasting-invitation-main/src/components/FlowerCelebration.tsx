import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import floralCorner from "@/assets/floral-corner.png";

const brandEase = [0.16, 1, 0.3, 1] as const;

const petals = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 4,
  duration: 4 + Math.random() * 4,
  size: 16 + Math.random() * 24,
  rotation: Math.random() * 360,
}));

const FlowerCelebration = () => {
  return (
    <section className="relative min-h-screen bg-transparent flex flex-col items-center justify-center overflow-hidden py-20">
      <AnimatedBackground image="/palace_jal_mahal.png" />
      {/* Falling petals */}
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-0 text-champagne pointer-events-none"
          style={{ left: p.left, fontSize: p.size }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{ y: "110vh", opacity: [0, 1, 1, 0], rotate: 720 }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        >
          ✿
        </motion.div>
      ))}

      {/* Floral corners */}
      <motion.img
        src={floralCorner}
        className="absolute top-0 left-0 w-32 md:w-48 opacity-80"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: brandEase }}
      />
      <motion.img
        src={floralCorner}
        className="absolute top-0 right-0 w-32 md:w-48 opacity-80 -scale-x-100"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: brandEase }}
      />
      <motion.img
        src={floralCorner}
        className="absolute bottom-0 left-0 w-32 md:w-48 opacity-80 -scale-y-100"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4, ease: brandEase }}
      />
      <motion.img
        src={floralCorner}
        className="absolute bottom-0 right-0 w-32 md:w-48 opacity-80 -scale-x-100 -scale-y-100"
        alt=""
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6, ease: brandEase }}
      />

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: brandEase }}
      >
        <div className="glass-box">
          <motion.p
            className="label-style mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            WITH THE BLESSINGS OF OUR FAMILIES
          </motion.p>

          <h2 className="heading-display text-5xl md:text-7xl text-foreground leading-tight">
            We are getting
            <br />
            <span className="text-champagne">married</span>
          </h2>

          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="heading-display italic text-2xl text-foreground/60">Abhishek</span>
            <span className="text-champagne text-2xl">&</span>
            <span className="heading-display italic text-2xl text-foreground/60">Kanika</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FlowerCelebration;
