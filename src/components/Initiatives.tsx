import { motion } from "motion/react";

export default function Initiatives() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-serif font-bold text-stone-900 tracking-tighter mb-6">উদ্যোগ</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-10 rounded-[3rem] border border-stone-100 shadow-xl"
            >
              <p className="text-2xl text-stone-700 leading-relaxed font-serif italic">
                আমি রাজনীতির পাশাপাশি ব্যবসা করি আমার ব্যবসার নাম বালা এন্টারপ্রাইজ এবং আমি মেসার্স ইউসুফ বালা এন্ড সন্স এর প্রোপাইটর।
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://i.postimg.cc/85sW9vY7/IMG-20260226-232920-880.jpg"
                  alt="উদ্যোগ ১"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://i.postimg.cc/wxb94cbn/FB-IMG-1772132582613.jpg"
                  alt="উদ্যোগ ২"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img
              src="https://i.postimg.cc/wMYQ9sWz/IMG-20260226-232920-880.jpg"
              alt="উদ্যোগ মেইন"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-white text-3xl font-serif font-bold">বালা এন্টারপ্রাইজ</h3>
              <p className="text-emerald-400 font-medium mt-2">ব্যবসা ও উদ্যোগ</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
