import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Hero() {
  const facebookLink = "https://www.facebook.com/profile.php?id=100063717255555";

  return (
    <section id="home" className="relative pt-8 pb-20 flex flex-col items-center justify-center overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1 
          }}
          className="relative flex flex-col items-center"
        >
          {/* Animated Background Glow */}
          <motion.div 
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360],
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 70%", "60% 40% 30% 70% / 50% 60% 70% 40%", "40% 60% 70% 30% / 40% 50% 60% 70%"]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 -m-16 bg-gradient-to-tr from-emerald-400/40 via-yellow-400/40 to-emerald-500/40 rounded-full blur-3xl -z-10"
          />

          {/* Circular Profile Image */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.4)] mb-8 bg-white"
          >
            <img
              src="https://i.postimg.cc/wvNNGGx4/IMG-20260226-215241-496.jpg"
              alt="মুহাম্মদ সাদরিল"
              className="w-full h-full object-cover scale-[1.1]"
              referrerPolicy="no-referrer"
              style={{ 
                imageRendering: 'high-quality',
                objectPosition: 'center center' 
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/politician/800/800";
              }}
            />
          </motion.div>
          
          {/* Bengali Name below image */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            মুহাম্মদ সাদরিল
          </motion.h2>

          {/* Social Icons */}
          <div className="flex gap-6 p-4 rounded-2xl">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500 transition-all transform hover:scale-125">
              <Facebook size={36} />
            </a>
            <a href="#" className="text-emerald-600 hover:text-emerald-500 transition-all transform hover:scale-125">
              <Twitter size={36} />
            </a>
            <a href="#" className="text-emerald-600 hover:text-emerald-500 transition-all transform hover:scale-125">
              <Instagram size={36} />
            </a>
            <a href="#" className="text-emerald-600 hover:text-emerald-500 transition-all transform hover:scale-125">
              <Linkedin size={36} />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-100 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
