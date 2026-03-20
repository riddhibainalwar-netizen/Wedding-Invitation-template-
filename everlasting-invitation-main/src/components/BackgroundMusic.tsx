import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface BackgroundMusicProps {
  play: boolean;
}

const BackgroundMusic = ({ play }: BackgroundMusicProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
    }
  }, [play]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  if (!play) return null;

  return (
    <>
      <audio
        ref={audioRef}
        loop
        src="https://cdn.pixabay.com/audio/2024/11/29/audio_d29de2530c.mp3"
      />
      <motion.button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-midnight/80 backdrop-blur-sm border border-champagne/30 flex items-center justify-center text-champagne hover:bg-midnight transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </motion.button>
    </>
  );
};

export default BackgroundMusic;
