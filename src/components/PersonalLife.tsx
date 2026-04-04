import { motion } from "motion/react";

export default function PersonalLife() {
  return (
    <section className="pt-12 pb-24 bg-stone-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-stone-100">
              <img
                src="https://i.postimg.cc/wMYQ9sWz/IMG-20260226-232920-880.jpg"
                alt="ব্যক্তিগত জীবন"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-emerald-800 mb-8">ব্যক্তিগত জীবন</h2>
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-medium mb-8">
              <p className="font-serif italic text-2xl text-emerald-900/90 leading-snug">
                "রাজনীতির বাইরে আমি একজন সাধারন মানুষ আমার পরিবারে বাবা আমি এবং আমরা দুই ভাই আমার ছোট ভাইয়ের নাম জুলফিকার"
              </p>
            </div>
            
            {/* New Personal Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-stone-100"
            >
              <img
                src="https://i.postimg.cc/wxb94cbn/FB-IMG-1772132582613.jpg"
                alt="ব্যক্তিগত জীবন ২"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Mother's Memory Text */}
            <div className="mt-12 space-y-6 text-stone-600 text-lg leading-relaxed font-medium mb-8">
              <p className="font-serif italic text-2xl text-emerald-900/90 leading-snug">
                "মা অনেকদিন আগেই আমাদেরকে ছেড়ে দুনিয়ার মায়া ত্যাগ করেছেন আপনারা দোয়া করবেন আমার মার জন্য আমিন"
              </p>
            </div>

            {/* Third Personal Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white bg-stone-100"
            >
              <img
                src="https://i.postimg.cc/ZnQdCbZc/FB-IMG-1772133179353.jpg"
                alt="ব্যক্তিগত জীবন ৩"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
