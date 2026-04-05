import { motion } from "motion/react";

export default function PersonalLife() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-6xl font-serif font-bold text-stone-900 mb-24 text-center tracking-tighter"
        >
          ব্যক্তিগত জীবন
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Main Image with decorative elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white"
            >
              <img
                src="https://i.postimg.cc/wMYQ9sWz/IMG-20260226-232920-880.jpg"
                alt="ব্যক্তিগত জীবন ১"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating secondary image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-12 -right-12 z-20 w-2/3 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white hidden md:block"
            >
              <img
                src="https://i.postimg.cc/wxb94cbn/FB-IMG-1772132582613.jpg"
                alt="ব্যক্তিগত জীবন ২"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-stone-100 relative"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-lg">
                “
              </div>
              <p className="text-2xl text-stone-700 leading-relaxed font-serif italic">
                আমি মুহাম্মদ সাদরিল আমার বাবার নাম মুহাম্মদ ইউসুফ বালা আমার মায়ের নাম মোসাম্মৎ শাহিনুর বেগম।
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-emerald-900 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <p className="text-2xl text-emerald-50 leading-relaxed font-serif italic">
                  আমার মা একজন আদর্শ গৃহিণী এবং তিনি অনেক ভালো একজন মানুষ।
                </p>
              </div>
              {/* Decorative background for the dark card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-800 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700" />
            </motion.div>

            {/* Third Image for mobile or extra detail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-[2rem] overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="https://i.postimg.cc/85sW9vY7/IMG-20260226-232920-880.jpg"
                alt="ব্যক্তিগত জীবন ৩"
                className="w-full h-48 object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
