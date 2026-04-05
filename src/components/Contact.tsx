import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl font-serif font-bold text-stone-900 tracking-tighter mb-6">যোগাযোগ</h2>
          <div className="w-24 h-1.5 bg-emerald-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <Mail size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">ইমেইল</h3>
                <p className="text-stone-600 text-lg">hhedarkhorselive@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <Phone size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">ফোন</h3>
                <p className="text-stone-600 text-lg">+8801306871054</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100 flex items-start gap-6"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">ঠিকানা</h3>
                <p className="text-stone-600 text-lg">শরীয়তপুর সখিপুর বালার বাজার</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-stone-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-2">আপনার নাম</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    placeholder="নাম লিখুন"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 ml-2">ইমেইল ঠিকানা</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                    placeholder="ইমেইল লিখুন"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 ml-2">বার্তা</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-stone-50 border border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                  placeholder="আপনার বার্তা লিখুন..."
                />
              </div>
              <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 group">
                বার্তা পাঠান
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
