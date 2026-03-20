import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import { Camera, Cloud, Users, Car } from "lucide-react";

const items = [
  { icon: Camera, title: "HASHTAG", desc: "While posting photos on social media please use the hashtag - #AbhishekWedsKanika" },
  { icon: Cloud, title: "WEATHER", desc: "It will be mostly sunny with temperature reaching up to 28 degrees at the venue" },
  { icon: Users, title: "STAFF", desc: "We recommend the nearby hotel called Bhola Bhawan near the venue for the staff members" },
  { icon: Car, title: "PARKING", desc: "Valet parking for all our guests will be available at the venue" },
];

const ThingsToKnow = () => {
  return (
    <section className="min-h-[80vh] bg-transparent flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at 50% 50%, rgba(197,160,89,0.05) 0%, transparent 70%)",
      }}
    >
      <AnimatedBackground image="/palace_umaid_bhawan.png" />
      <div className="glass-box max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="heading-display text-4xl md:text-6xl text-foreground">
            Things to Know
          </h2>
          <p className="font-body text-foreground/50 mt-4 max-w-md mx-auto italic">
            To help you feel at ease and enjoy every moment of the celebrations, we've gathered a few thoughtful details.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <item.icon className="mx-auto mb-3 text-champagne" size={32} strokeWidth={1} />
              <h3 className="label-style text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-foreground/50 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsToKnow;
