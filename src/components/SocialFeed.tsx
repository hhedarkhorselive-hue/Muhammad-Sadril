import { motion } from "motion/react";
import { Facebook } from "lucide-react";

export default function SocialFeed() {
  const facebookProfileUrl = "https://www.facebook.com/profile.php?id=100063717255555";

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-stone-200"
        >
          {/* Content Area - Facebook Profile Screenshot */}
          <div className="w-full bg-white relative">
            <div className="w-full overflow-hidden flex justify-center bg-stone-50 p-2 md:p-4">
              <img 
                src="https://i.postimg.cc/kGXbgXv6/IMG-20260404-134658-295.jpg" 
                className="w-full h-auto max-w-3xl shadow-2xl rounded-lg contrast-[1.02] brightness-[1.01]" 
                alt="Facebook Profile Screenshot"
                referrerPolicy="no-referrer"
                style={{ 
                  imageRendering: 'high-quality',
                  WebkitBackfaceVisibility: 'hidden'
                }}
              />
            </div>
            
            {/* Overlay to guide users */}
            <div className="absolute bottom-6 right-6 z-20">
              <a 
                href={facebookProfileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition-all flex items-center gap-2"
              >
                ফেসবুকে দেখুন
              </a>
            </div>
          </div>
        </motion.div>

        {/* Requested Text below the screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-2xl md:text-3xl font-bold text-stone-800 leading-relaxed">
            আরো কিছু জানতে উপরে ডানপাশে থ্রি লাইনে ক্লিক করুন
          </p>
        </motion.div>
      </div>
    </section>
  );
}
