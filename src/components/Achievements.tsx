import { motion } from "motion/react";

const achievements = [
  {
    year: "২০২৩",
    title: "শিক্ষা সংস্কার উদ্যোগ",
    description: "৫০টিরও বেশি স্থানীয় স্কুলে ডিজিটাল সরঞ্জাম সরবরাহ করা হয়েছে, যা ২০,০০০+ শিক্ষার্থীর জীবনে প্রভাব ফেলেছে।"
  },
  {
    year: "২০২২",
    title: "সবুজ শহর প্রকল্প",
    description: "জেলাজুড়ে ১,০০,০০০ গাছ লাগানোর অভিযান এবং নতুন বর্জ্য ব্যবস্থাপনা পদ্ধতি চালু করা হয়েছে।"
  },
  {
    year: "২০২১",
    title: "স্বাস্থ্যসেবা অধিকার আইন",
    description: "অবহেলিত গ্রামীণ এলাকায় ৫টি নতুন কমিউনিটি হেলথ সেন্টার স্থাপনের জন্য আইন প্রণয়ন করা হয়েছে।"
  },
  {
    year: "২০২০",
    title: "যুব নেতৃত্ব ফোরাম",
    description: "বার্ষিক ফোরাম প্রতিষ্ঠা করা হয়েছে যা এ পর্যন্ত ৫,০০০-এর বেশি তরুণ নেতাকে প্রশিক্ষণ দিয়েছে।"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-emerald-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 leading-tight">
              কাজের মাধ্যমে <span className="italic text-emerald-400">সাফল্যের</span> প্রমাণ।
            </h2>
            <p className="text-emerald-100 text-lg mb-12 font-medium">
              কথায় নয়, কাজে বিশ্বাসী। বছরের পর বছর ধরে আমরা আমাদের জনপদের উন্নয়নে নিরলসভাবে কাজ করে যাচ্ছি।
            </p>
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-100 transition-all shadow-xl">
              সম্পূর্ণ রিপোর্ট দেখুন
            </button>
          </div>

          <div className="space-y-8">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start group"
              >
                <span className="text-3xl font-serif italic text-emerald-500 group-hover:text-emerald-300 transition-colors">
                  {item.year}
                </span>
                <div className="pb-8 border-b border-emerald-800 flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                  <p className="text-emerald-100/80 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
