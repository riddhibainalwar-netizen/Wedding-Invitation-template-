import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

const DressCode = () => {
  return (
    <section className="min-h-screen bg-transparent flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      <AnimatedBackground image="/palace_lake.png" />

      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-box">
          <p className="label-style text-champagne mb-8">THE CELEBRATION CALLS FOR</p>

          <h2 className="heading-display text-5xl md:text-7xl text-foreground mb-12">
            Dress Code
          </h2>

          {/* Couple illustration */}
          <div className="flex justify-center mb-12">
            <img 
              src="/indian_formal_couple.png" 
              alt="Traditional Indian Couple" 
              className="w-64 md:w-80 h-auto rounded-2xl shadow-[0_4px_20px_rgba(235,213,179,0.15)] border border-champagne/30 object-cover" 
            />
          </div>

          <motion.div
            className="border border-champagne/30 px-12 py-8 inline-block mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-display text-3xl md:text-4xl text-foreground italic">
              Traditional Indian Formal
            </p>
          </motion.div>

          <div className="flex justify-center gap-16">
            {/* Suit icon */}
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-2 text-foreground/70">
                <path d="M24 4L16 12V44H32V12L24 4Z" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16 12L8 16V44H16" stroke="currentColor" strokeWidth="0.5" />
                <path d="M32 12L40 16V44H32" stroke="currentColor" strokeWidth="0.5" />
                <path d="M22 12L24 20L26 12" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <span className="label-style text-foreground/60 w-32 inline-block">SHERWANI / SUIT</span>
            </div>

            {/* Gown icon */}
            <div className="text-center">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-2 text-foreground/70">
                <path d="M24 4C22 4 20 6 20 8C20 10 22 12 24 12C26 12 28 10 28 8C28 6 26 4 24 4Z" stroke="currentColor" strokeWidth="0.5" />
                <path d="M20 12L16 44H32L28 12" stroke="currentColor" strokeWidth="0.5" />
                <path d="M16 44C12 44 10 40 10 40L20 28" stroke="currentColor" strokeWidth="0.5" />
                <path d="M32 44C36 44 38 40 38 40L28 28" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <span className="label-style text-foreground/60 w-32 inline-block">LEHENGA / SAREE</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DressCode;
