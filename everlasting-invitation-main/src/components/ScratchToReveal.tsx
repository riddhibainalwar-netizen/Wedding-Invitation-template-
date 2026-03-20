import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import floralCorner from "@/assets/floral-corner.png";

interface ScratchCardProps {
  title: string;
  date: string;
  venue: string;
  onRevealed: () => void;
}

const ScratchCard = ({ title, date, venue, onRevealed }: ScratchCardProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const isDrawing = useRef(false);

  const checkReveal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] < 128) transparent++;
    }
    const pct = transparent / (imageData.data.length / 4);
    if (pct > 0.6) {
      setIsRevealed(true);
      onRevealed();
    }
  }, [isRevealed, onRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(2, 2);
    ctx.fillStyle = "#C5A059";
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    // Add shimmer text
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "italic 16px 'Cormorant Garamond', serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 6);
  }, []);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc((x - rect.left) * scaleX / 2, (y - rect.top) * scaleY / 2, 20, 0, Math.PI * 2);
    ctx.fill();
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDrawing.current) return;
    scratch(clientX, clientY);
    checkReveal();
  };

  return (
    <motion.div
      className="relative w-64 h-36 md:w-72 md:h-40 rounded-2xl overflow-hidden border border-champagne/30"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Revealed content */}
      <div className="absolute inset-0 bg-cream flex flex-col items-center justify-center p-4">
        <img src={floralCorner} className="absolute top-0 left-0 w-16 h-16" alt="" />
        <img src={floralCorner} className="absolute top-0 right-0 w-16 h-16 -scale-x-100" alt="" />
        <img src={floralCorner} className="absolute bottom-0 left-0 w-16 h-16 -scale-y-100" alt="" />
        <img src={floralCorner} className="absolute bottom-0 right-0 w-16 h-16 -scale-x-100 -scale-y-100" alt="" />
        <h3 className="font-display text-2xl text-ink font-semibold">{title}</h3>
        <p className="font-display italic text-ink/80 text-sm mt-1">{date}</p>
        <p className="font-display italic text-ink/60 text-xs mt-0.5">{venue}</p>
      </div>

      {/* Scratch overlay */}
      <AnimatePresence>
        {!isRevealed && (
          <motion.canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full scratch-canvas z-10"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onMouseDown={() => { isDrawing.current = true; }}
            onMouseUp={() => { isDrawing.current = false; checkReveal(); }}
            onMouseLeave={() => { isDrawing.current = false; }}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onTouchStart={() => { isDrawing.current = true; }}
            onTouchEnd={() => { isDrawing.current = false; checkReveal(); }}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              handleMove(touch.clientX, touch.clientY);
            }}
          />
        )}
      </AnimatePresence>

      {isRevealed && (
        <motion.div
          className="absolute top-1 right-1 z-20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          <span className="text-green-600 text-lg">✓</span>
        </motion.div>
      )}
    </motion.div>
  );
};

interface ScratchToRevealProps {
  onAllRevealed: () => void;
}

const ScratchToReveal = ({ onAllRevealed }: ScratchToRevealProps) => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());

  const events = [
    { title: "MEHENDI", date: "Friday, March 9th 2026", venue: "Rambagh, Jaipur • 6pm" },
    { title: "HALDI", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur • 10am" },
    { title: "COCKTAIL", date: "Friday, March 10th 2026", venue: "Rambagh, Jaipur • 6pm" },
    { title: "ENGAGEMENT", date: "Friday, March 11th 2026", venue: "Rambagh, Jaipur • 6pm" },
    { title: "SHAADI", date: "Friday, March 12th 2026", venue: "Rambagh, Jaipur • 6pm" },
    { title: "RECEPTION", date: "Friday, March 17th 2026", venue: "Rambagh, Jaipur • 6pm" },
  ];

  const handleReveal = (idx: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.add(idx);
      if (next.size === events.length) {
        setTimeout(onAllRevealed, 600);
      }
      return next;
    });
  };

  return (
    <section className="min-h-screen bg-transparent relative flex flex-col items-center justify-center py-20 px-6"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08) 0%, transparent 60%)",
      }}
    >
      <AnimatedBackground image="/palace_lake.png" />
      <motion.h2
        className="heading-display text-4xl md:text-6xl text-cream text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        The Celebrations
      </motion.h2>
      <p className="label-style text-cream/70 mb-12 text-center">
        SCRATCH EACH CARD TO REVEAL THE DATES
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
        {events.map((event, i) => (
          <div key={i} className="flex justify-center">
            <ScratchCard
              title={event.title}
              date={event.date}
              venue={event.venue}
              onRevealed={() => handleReveal(i)}
            />
          </div>
        ))}
      </div>

      <motion.p
        className="mt-8 label-style text-cream/50"
        animate={{ opacity: revealed.size === events.length ? 0 : 1 }}
      >
        {revealed.size} / {events.length} REVEALED
      </motion.p>
    </section>
  );
};

export default ScratchToReveal;
