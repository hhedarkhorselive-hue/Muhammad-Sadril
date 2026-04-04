import { motion } from "motion/react";
import { Shield, Users, TrendingUp, Heart } from "lucide-react";

const visions = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "সততা ও ন্যায়বিচার",
    description: "প্রতিটি নাগরিকের কণ্ঠস্বর শোনা নিশ্চিত করা এবং প্রতিটি পদক্ষেপ ন্যায়বিচার ও স্বচ্ছতার সাথে পরিচালনা করা।",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "জনশক্তি ক্ষমতায়ন",
    description: "স্থানীয় প্রতিভা এবং ব্যবসায় বিনিয়োগ করে সবার জন্য একটি স্বনির্ভর ও সমৃদ্ধ সমাজ গঠন করা।",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "অর্থনৈতিক সমৃদ্ধি",
    description: "উদ্ভাবন এবং কর্মসংস্থান সৃষ্টির মাধ্যমে দীর্ঘমেয়াদী অর্থনৈতিক স্থিতিশীলতা নিশ্চিত করা।",
    color: "bg-amber-50 text-amber-600 border-amber-100"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "সামাজিক কল্যাণ",
    description: "স্বাস্থ্যসেবা, শিক্ষা এবং সামাজিক নিরাপত্তা নিশ্চিত করে সমাজের অবহেলিত মানুষের পাশে দাঁড়ানো।",
    color: "bg-red-50 text-red-600 border-red-100"
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title text-emerald-800">আগামীর স্বপ্ন ও পরিকল্পনা</h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-medium">
            একটি সমৃদ্ধ ও অন্তর্ভুক্তিমূলক সমাজ গঠনের জন্য আমাদের এই চারটি মূল স্তম্ভ।
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-[2rem] border-2 ${item.color} card-hover bg-white`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm mb-6 ${item.color}`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-stone-900">{item.title}</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
