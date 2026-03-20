import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  image?: string;
}

const AnimatedBackground = ({ image }: AnimatedBackgroundProps) => {
  // Generate random positions and delays for stars and lanterns
  const stars = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  const lanterns = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 15,
    size: Math.random() * 15 + 15,
  }));

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-[#0a1128] pointer-events-none">
      {/* Background Image */}
      {image && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            boxShadow: "0 0 6px 2px rgba(255,255,255,0.6)",
          }}
          animate={{
            opacity: [0.1, 1, 0.1],
            scale: [0.8, 1.3, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating Lanterns */}
      {lanterns.map((lantern) => (
        <motion.div
          key={`lantern-${lantern.id}`}
          className="absolute"
          style={{
            left: lantern.left,
            bottom: "-15%",
            width: lantern.size,
            height: lantern.size * 1.5,
          }}
          animate={{
            y: ["0vh", "-130vh"],
            x: ["0vw", `${Math.random() * 10 - 5}vw`, `${Math.random() * 15 - 7.5}vw`, `${Math.random() * 10 - 5}vw`],
            rotate: [-10, 10, -5, 5, -10],
          }}
          transition={{
            y: {
              duration: lantern.duration,
              repeat: Infinity,
              ease: "linear",
              delay: lantern.delay,
            },
            x: {
              duration: lantern.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: lantern.delay,
            },
            rotate: {
              duration: lantern.duration / 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          {/* Lantern Shape */}
          <div className="w-full h-full rounded-md bg-gradient-to-b from-[#ffdb58] to-[#d66a00] opacity-80 relative shadow-[0_0_20px_rgba(255,219,88,0.8)]">
            <div className="absolute top-0 w-full h-1 bg-[#5c2a0b] rounded-t-md" />
            <div className="absolute bottom-0 w-full h-1 bg-[#5c2a0b] rounded-b-md" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
