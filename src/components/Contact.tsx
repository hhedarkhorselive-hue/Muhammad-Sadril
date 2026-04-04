import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden grid lg:grid-cols-2 border border-emerald-100">
          <div className="p-12 lg:p-20 bg-emerald-900 text-white">
            <h2 className="font-serif text-4xl font-bold mb-8">যোগাযোগ করুন</h2>
            <p className="text-emerald-100 mb-12 text-lg font-medium">
              আপনার কোনো প্রশ্ন আছে কি? অথবা আমাদের আন্দোলনে যোগ দিতে চান? আমরা আপনার কথা শুনতে আগ্রহী। একসাথে আমরা পরিবর্তন আনতে পারি।
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-emerald-400 text-sm uppercase tracking-widest font-bold">ইমেইল</p>
                  <p className="text-lg font-bold">contact@sadril.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-emerald-400 text-sm uppercase tracking-widest font-bold">ফোন</p>
                  <p className="text-lg font-bold">+8801306871054</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-emerald-400 text-sm uppercase tracking-widest font-bold">ঠিকানা</p>
                  <p className="text-lg font-bold">শরীয়তপুর সখিপুর বালার বাজার</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-emerald-800">
              <p className="text-emerald-400 mb-6 uppercase tracking-widest text-sm font-bold">আমাদের সাথে যুক্ত থাকুন</p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 border-2 border-emerald-700 rounded-full flex items-center justify-center hover:bg-white hover:text-emerald-900 transition-all transform hover:scale-110">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="p-12 lg:p-20">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">প্রথম নাম</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">শেষ নাম</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border-2 border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">ইমেইল ঠিকানা</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border-2 border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">আপনার বার্তা</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border-2 border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-emerald-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-emerald-700 transition-all shadow-xl transform hover:-translate-y-1">
                বার্তা পাঠান
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
