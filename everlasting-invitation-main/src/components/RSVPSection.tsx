import { useState } from "react";
import AnimatedBackground from "./AnimatedBackground";
import { motion, AnimatePresence } from "framer-motion";

const RSVPSection = () => {
  const [formData, setFormData] = useState({ name: "", guests: "1", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-transparent flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      <AnimatedBackground image="/palace_jal_mahal.png" />
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-box">
          <div className="text-center mb-12">
            <p className="label-style mb-4">WE HOPE TO SEE YOU THERE</p>
            <h2 className="heading-display text-4xl md:text-6xl text-foreground">
              Confirm Your Attendance
            </h2>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                exit={{ opacity: 0, y: -20 }}
              >
                <div>
                  <label className="label-style block mb-2">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-body focus:outline-none focus:border-champagne transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="label-style block mb-2">NUMBER OF GUESTS</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-body focus:outline-none focus:border-champagne transition-colors"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n} className="bg-[#0a1128] text-foreground">{n} {n === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-style block mb-2">A MESSAGE FOR THE COUPLE</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-foreground/20 py-3 text-foreground font-body focus:outline-none focus:border-champagne transition-colors resize-none"
                    rows={3}
                    placeholder="Your warm wishes..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 bg-champagne text-white font-body uppercase text-sm tracking-[0.2em] hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Confirm Attendance
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="thanks"
                className="text-center py-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <motion.span
                  className="text-6xl block mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  🎉
                </motion.span>
                <h3 className="font-display text-3xl text-foreground italic">Thank you, {formData.name}!</h3>
                <p className="text-foreground/60 font-body mt-3">Your attendance has been confirmed.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default RSVPSection;
