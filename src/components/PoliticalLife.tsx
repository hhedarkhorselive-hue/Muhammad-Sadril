import { motion } from "motion/react";

export default function PoliticalLife() {
  const dailyLifeImages = [
    "https://i.postimg.cc/jqX7HBJ8/FB-IMG-1772106834176.jpg",
    "https://i.postimg.cc/HLDnDtyJ/FB-IMG-1772106769900.jpg",
    "https://i.postimg.cc/BQjnjz5g/FB-IMG-1772107029036.jpg",
    "https://i.postimg.cc/wMdyDyLq/FB-IMG-1772106807815.jpg",
    "https://i.postimg.cc/FRmM11Cr/FB-IMG-1772106803092.jpg"
  ];

  const stories = [
    {
      text: "আমি সেই ছাত্র জীবন থেকেই ছাত্রদলের সাথে আছি এবং থাকবো আমি বিগত ২০১১-১২ সাল থেকেই বা তারও আগে থেকেই রাজনৈতিক করি ছাত্রদলের পক্ষে আমি অনেকগুলো আন্দোলন এবং অনেকগুলো সমাবেশে ছিলাম যেভাবে ২০২৪ সালের আন্দোলনেও আমি ছিলাম এখন পর্যন্ত দলের খারাপ সময়ও আমি দলের পাশেই ছিলাম যেভাবে ছিল আমার বাবা আর আমি।",
      img: "https://i.postimg.cc/bwmrCFcY/FB-IMG-1772106974294.jpg"
    },
    {
      text: "আমার বাবা অনেক আগে থেকেই রাজনীতি করে এবং আমার পরিবারের সকলেই রাজনীতিবিদ বিশেষ করে আমার দাদু চারবারের চেয়ারম্যান জনাব রফিকুল ইসলাম বালা ছোটবেলা থেকেই বাবা চাচাদের সাথে দাদুদের সাথে থেকে আমার রাজনীতির এত হাত ঘড়ি।",
      img: "https://i.postimg.cc/qBwKZY8j/IMG-20260404-141222-015.jpg"
    },
    {
      text: "আমার বিশেষ করে আমার ছোট দাদু জনাব মোস্তাক আহমেদ মাসুম বালা এবং আমার চাচু মাইদুল ইউসুফ জিসানওয়ালা তাদের দুজনের থেকেই আমার এই রাজনীতির জীবন শুরু হয়েছিল এবং এখনো চলমান।",
      img: "https://i.postimg.cc/76fLssD5/IMG-20260227-000049-766.jpg"
    },
    {
      text: "বিশেষ করে আমার বাবা ছোটবেলা থেকেই দেখতাম তিনি রাজনীতি করেন এবং যুবদলের সাথে অনেকদিন ধরেই যুক্ত তার দেখাদেখি আমিও এই বিএনপির ছাত্রদলের যোগ দিলাম ২০১০ সাল থেকে তখন থেকেই আমার এই রাজনীতি জীবন শুরু এবং এখনো চলমান ভবিষ্যতেও চলবে দোয়া করবেন আপনারা সবাই ইনশাল্লাহ আপনাদের অনেক কিছু করার ইচ্ছা এবং স্বপ্ন আছে ইনশাল্লাহ একদিন সবকিছুই করব আপনাদের জন্য আসসালামু আলাইকুম।",
      img: "https://i.postimg.cc/sXY30tqJ/FB-IMG-1775291158929.jpg"
    }
  ];

  return (
    <section className="pt-12 pb-0 bg-white min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* First Image at the top */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full mb-12"
        >
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-stone-50 bg-stone-100">
            <img
              src="https://i.postimg.cc/kg8k7xMc/FB-IMG-1772107029036.jpg"
              alt="রাজনীতির জীবন ব্যানার"
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Title below the first image */}
        <h2 className="text-6xl font-serif font-bold text-emerald-800 tracking-tighter mb-24 text-center">রাজনীতির জীবন</h2>
        
        <div className="space-y-32">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-bold tracking-widest uppercase">
                  অধ্যায় ০{idx + 1}
                </div>
                <p className="text-2xl text-stone-700 leading-relaxed font-medium font-serif italic">
                  "{story.text}"
                </p>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-stone-50 bg-stone-100 group">
                  <img
                    src={story.img}
                    alt={`রাজনৈতিক জীবন ${idx + 1}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Width Daily Life Slider (Fashion Style) */}
      <div className="mt-32 bg-stone-950 py-32">
        <div className="px-4 sm:px-8 lg:px-16 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tighter">জীবনের প্রতিদিন</h2>
            <p className="text-emerald-500 font-mono mt-4 tracking-[0.2em] uppercase text-sm">Daily Life Moments</p>
          </div>
          <div className="text-stone-500 font-medium text-sm">
            ডানে-বামে সোয়াইপ করে স্ক্রল করুন →
          </div>
        </div>

        <div className="flex overflow-x-auto gap-8 px-4 sm:px-8 lg:px-16 pb-12 snap-x scrollbar-hide">
          {dailyLifeImages.map((url, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="flex-none w-[80vw] md:w-[50vw] lg:w-[35vw] aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] snap-center bg-stone-900 border border-white/5"
            >
              <img
                src={url}
                alt={`জীবনের প্রতিদিন ${index + 1}`}
                className="w-full h-full object-contain transition-all duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
