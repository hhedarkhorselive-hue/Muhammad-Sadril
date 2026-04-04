import { motion } from "motion/react";

export default function Initiatives() {
  return (
    <section className="pt-12 pb-24 bg-emerald-900 text-white min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold mb-8">নিজের উদ্যোগ</h2>
          <p className="text-emerald-50 max-w-4xl mx-auto text-2xl font-serif italic leading-relaxed">
            "আমি নিজে দুইটা প্রতিষ্ঠানের মালিক মেরিগোল্ড ফ্লাওয়ার এন্ড ইভেন ম্যানেজমেন্ট আরেকটা হচ্ছে যে নিমন্ত্রণ রেস্টুরেন্ট এন্ড পার্টি সেন্টার শেয়ার হোল্ডার"
          </p>
        </motion.div>

        {/* Split Frame Images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-emerald-800/50 bg-emerald-950 grid grid-cols-2 gap-2 p-2">
            <div className="h-full w-full overflow-hidden rounded-l-[2rem]">
              <img
                src="https://i.postimg.cc/BnrR2HNr/FB-IMG-1772133718634.jpg"
                alt="মেরিগোল্ড ফ্লাওয়ার"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="h-full w-full overflow-hidden rounded-r-[2rem]">
              <img
                src="https://i.postimg.cc/9FM32WrK/FB-IMG-1772133687039.jpg"
                alt="নিমন্ত্রণ রেস্টুরেন্ট"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
