import Link from "next/link";
import { ArrowRight, Leaf, Users, GraduationCap, Globe, Droplets, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-white">

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-surface-dark">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlNnhPkc7Xqv1lzMJNgNjKlnvb45T4tPFiZEbLCbNFcEsUcZjEV1c5UpD-Wez3SPFXYBE-dt6f2wqCQD0EYZ6gZYt2Rs-6KSCLaMaYdLmI1VX9pDsyAQyMGdPW990lkwtFHsDlUQg05eDGsAF32BvvS5E_l_WKL47ML05WXvWiY-3hqy35TwRvhjG5luvLJYxDbJyKZl0kI5PvcmY5OlN7rO-tfebxs9h930AVVII-7PjmKQMEOkNp22JWDHzVa_yr_KEvzx8UXhg')` }}
          ></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-start justify-center min-h-[600px]">
          <span className="bg-primary text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">Fairtrade NAPP Sri Lanka</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl">
            Empowering Sri Lankan Producers Through Fairtrade
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light">
            Connecting local excellence to ethical global markets. We bridge the gap between small-scale farmers and the international Fairtrade network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/products" className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              Explore Products
            </Link>
            <Link href="/contact" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Global Partners Strip */}
      <section className="border-b border-gray-800 bg-surface-dark py-10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 dark:text-slate-400 mb-8 uppercase tracking-widest">Our Global Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale text-2xl font-black text-white">
            {/* Text Placeholders for Logos matching design HTML */}
            <div className="flex items-center gap-1">Fairtrade</div>
            <div className="flex items-center gap-1">NAPP</div>
            <div className="flex items-center gap-1">AgriExport</div>
            <div className="flex items-center gap-1">GlobalTrade</div>
            <div className="flex items-center gap-1">Rainforest</div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { val: "15,000+", label: "Producers Supported" },
              { val: "500+", label: "Trainings Delivered" },
              { val: "12", label: "Product Categories" },
              { val: "25", label: "Export Markets" }
            ].map((stat, i) => (
              <div key={i} className="bg-surface-dark p-8 rounded-xl shadow-sm border border-gray-800 group hover:border-primary/50 transition-colors">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit text-primary-dark dark:text-primary">
                  {/* Placeholder Icon */}
                  <Leaf className="text-3xl" />
                </div>
                <p className="text-4xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{stat.val}</p>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is FNSL */}
      <section className="py-16 md:py-24 bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="lg:w-1/2 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8P9I19Kenxoj6JzAaUkL4t8o_1Se49qahELoBsOjH2yFzKhB4uGcLSNOSbwVBLS4evqMBU8M8kRILbDaortWUh_wO2Ht60_WEiN3Lar78nlI4oLQQD50edNTJITk84YMJTbBdgHV0cEYJrhHCTuuCYK4XMBkbVZ-0znAL0Dlbh_Kurg7w8DuoJjKdjyyrQmhpg2ICWsBW3w0LHvLqAbyIy9UIRhbXqYoiZn6zdUFFXkXDPXVIeEUXduH8cw8BprBYQSUsIZmZJyg')` }}></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl hidden md:block shadow-lg">
                <Leaf className="text-5xl text-slate-900" size={48} />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">What is FNSL?</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                FNSL (Fairtrade NAPP–Sri Lanka) is dedicated to empowering producers, promoting sustainable farming, and ensuring fair trade practices across the island. We are the bridge to ethical global markets.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                By providing training on standards, facilitating market access, and advocating for producer rights, we ensure that the benefits of trade reach the people who grow the produce.
              </p>
              <Link href="/about" className="inline-flex items-center justify-center h-12 px-6 font-bold text-slate-900 transition-colors bg-primary rounded-lg hover:bg-primary-dark">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Our Product Categories</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">Explore the finest ethically sourced produce from the heart of Sri Lanka.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ceylon Tea", subtitle: "Explore 24 Producers", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlhnRxqVFIneyYb55SOAeahlAsrAjs3gwlPsmVIeER27Ia5c7dvui4lOYo9G2YzOPOtYVVNQ4NpXdmji2hhVeDsZjQWWGP62Jt0QxdNKQ8-SRc8QZDbVMowt4VjE7JwrHMgckNBTx1M96YBwdgJVFRz-E7TfPYT5ty2AY1RIAG1_FGGbSnOTYGc_RsA6WBO_SwoOPomDERLJHg57Mle9zvp2gSwbEXmmrVRPX2yE1WeoCp_meLQl7F9gRLFrWp8kOR2sVS-znW_MY" },
              { title: "Spices", subtitle: "Cinnamon, Pepper, Cloves", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLj1MgT39eXelrpJNnw-yqGNWG6cvVDS3XYDhxbR4cAv0NHVXpvRdjCsWc1FVW_Qi7mENeRykZnlSDNJr9J1jw8JxBSmilaFxId2cjn1VUWDDOTBbViGWVFD6VH2W08TiWbEfosuOJyYz6-b3fdtu_axqVxqXmzPR-gy-0ZiMJKxLoGVsqUHgB3ZWBdFhGsrnMJZ2JyYlsy1DGZSWN7kEac-Wk_IjLtxfrgH47AI88iKF0oZ41wVPePqwsWAK5-PUPJS1OXEd9qqk" },
              { title: "Coconut Products", subtitle: "Oil, Milk, Desiccated", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6uB3_eBOt8zK9RYivOVO2Y2LBZG4Bcc9SoO89qH-tRSZCFjjuMFnV8jx1MC-jXt6TaJYLbqcZ7D5AB8j9xmrZUCKYX82pvViReE4hB94U3lQQuG8rT7I5l3wUSJcgX75QhPfCqyy9Z5_qVF3QppORH0fc1zFhGkL48CP2tO9XEOQt-_LeGBCpZ8xq_i1QCnxn1vbMNBWMgWIhdt-upQU_btEph1A4FbFXWoFP2xtmeUtqKa3FU4SjqI6JMTv2juljH7wo5Zd7JLQ" },
              { title: "Fresh Fruits", subtitle: "Mango, Pineapple, Banana", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_YsLfCKpyWr8_gPuVm2mtw7-yx-BFbXtATi0owPjy-jsNmG18d4iIIGK14ad4FQbOhjMOMjQFdmXclZ0qcwpJg7UJHzQplpCsZH7oG-XmI-Mukbr6mw9rwTXSU52NxRyydS50IOMu5a2frY8rDNj-rt5C-AoiBa-n2s82jDCXBMfvmxdkIfOFNSHuGb_7OQ5-Yd5IkyRN69Q4x1UAwhdD6AA5t6ShLdoAbgKTEEClQT2K9q4t5fm9wPfL1D0XnlrqMicq90ZVWeY" },
              { title: "Handicrafts", subtitle: "Traditional Artisanal Goods", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJ6-8g89giiYn7gO_zZ9Z6TP_URGkzvKYWv8dir_z57jz0vg9XlY-kJQ0Z3rIedQTedv8AIjzWTf89V2ADPK2vYjaBT-yPRWcYTWVKtUyZLeuCfJRnkUq2TouJX7kZykKmF3hwNnHngtC_qsrnnarfu6S5x7XTfdFabtSYIX29v3a4DBTjr5opBt6Aa6HZl9C3ErHF8aAk7-IzablnkabzLXpBBYT-weyCKR9w9dFgoUHn2iAa7oCKsDVajQpBwqfzFH_sUIaoutw" },
              { title: "Herbs & Ayurveda", subtitle: "Medicinal Plants & Oils", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvno5gwrn_dUT0ODJniohH9pS2cVpvKccyQMEYdVs-VVxhsMwHxWQM_Ae3rszKm65zqIzC4-uORoFJAVPZSLmHIcAaJZbSKg-1_3WPWANUPmfm8LAL0ULfpJG9d2aNikVfT-TMwwFmufqu9Q4Q3wjkqm4VPNDloXPxDIuO_XCXy81K62MUxzosuliPlNEGGQTQ6uBw4Aj_vjak9ulDOCvOjzj3HRYg5oeql6O-gx2IGvE7FIOW8cvF1ta6_aD3JbGRFb6FzXMlM-8" }
            ].map((cat, i) => (
              <Link href={`/products?category=${cat.title}`} key={i} className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url('${cat.img}')` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                  <div className="h-0 group-hover:h-6 overflow-hidden transition-all duration-300">
                    <p className="text-sm text-primary font-medium">{cat.subtitle} &rarr;</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-white font-bold hover:text-primary transition-colors">
              View All Categories <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Producers */}
      <section className="py-16 md:py-24 bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-2">Featured Producers</h2>
              <p className="text-lg text-slate-400">Stories of impact and sustainable farming.</p>
            </div>
            <Link href="/producers" className="hidden md:block text-primary font-bold hover:underline">View All Producers</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { region: "Kandy Region", name: "Green Valley Cooperative", desc: "Implementing organic farming techniques that have increased yield by 20% while preserving local biodiversity.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEP54vJEAhSN7rv378kcG0dF_nIAl7p3_c0K-s1IP18-c29-Z0C36-UPFVP78p7bCBtJ-titYvwqKDG6n8o7DpyE30Wx0gpswI7dJikXJE6VxdW8zwDhmNHq1AujUeLEcazAiKQfOZSZhupHnQQSYrM1OotkPyY52ysf_UqY7PwNAZELPODMq5Evt3JQcrFCrVOgDFgYAXnF4zUhVJ5aA95e2XT4HJ_ohVyjYBqsg2K_IJXOC7ciR5k_HyCgsdtBriM_aNXDQFCRM" },
              { region: "Matale District", name: "Spice Gardens Union", desc: "A collective of 200 smallholder farmers exporting premium Ceylon Cinnamon to European markets.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDHXS-QhTdIDLj66iojg6Mc7uSxxxXLECyFgqZ5__1RgH3gb566gA5r6MNr-WlnVJOyiPR4vXFLUqLcYicnz-OK4dXe-MBbzu0aPLMVdz_nNImNZMEhEU-l0mCCES0ypKOw8UMcOrEmV8hYt5fy3Jsikvz_EH9OGZrcoIP31NlG26UKly42UY3UK-N2vP8pR9hkUwvwmw7owPd4htBpGWaYII7Jh4IQ0gM79fak3V47A_y-ve1-x9GLHUP6DlHkEfm4bl6Xfr2Q8o" },
              { region: "Kurunegala", name: "Women's Coconut Network", desc: "Empowering women through value-added coconut production, from virgin oil to activated carbon.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnA2_9eIEvHrJ3LADKXaxBqfS16cg4akrWUsI5CodvCp7sCBlAiDKF6Fg7qUsWbQo_EdAE3O9_sTlps14IW8Dg2GoD6fzLlaN3oIfjHIZJGLB60cGclkoiQt3xyV0Ebfq_F4ltsEP7jXWiKIRnclCTqYkIhLH3Hm-yQcFNjhFfPIYqLxVnQ9dPElx2p2gQuBAGakmy-ukOs4PfeGtGPlvyTqAsJJcbFloIUyosQ7YWWIO1WYDk2T53YM3-ahb9fpljGcufjLoIAgw" }
            ].map((producer, i) => (
              <div key={i} className="flex flex-col bg-background-dark rounded-xl overflow-hidden border border-gray-800">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url('${producer.img}')` }}></div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">{producer.region}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{producer.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 flex-1">
                    {producer.desc}
                  </p>
                  <Link href="#" className="text-sm font-bold text-white hover:text-primary flex items-center gap-1">
                    Read Story <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/producers" className="text-primary-dark dark:text-primary font-bold hover:underline">View All Producers</Link>
          </div>
        </div>
      </section>

      {/* Programs & Impact */}
      <section className="py-16 md:py-24 bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">Programs & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Droplets, color: "blue", title: "Climate Resilience", desc: "Helping farmers adapt to changing weather patterns with sustainable irrigation." },
              { icon: Users, color: "pink", title: "Gender Leadership", desc: "Empowering women to take leadership roles in cooperatives and trade unions." },
              { icon: GraduationCap, color: "yellow", title: "Youth Inclusion", desc: "Training the next generation of farmers in modern agricultural technology." },
              { icon: Globe, color: "purple", title: "Digital Trade", desc: "Connecting remote farmers directly to global buyers via digital platforms." }
            ].map((prog, i) => {
              const Icon = prog.icon;
              return (
                <div key={i} className="bg-surface-dark p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className={`size-12 rounded-full bg-${prog.color}-900/30 flex items-center justify-center text-${prog.color}-400 mb-4`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{prog.title}</h3>
                  <p className="text-slate-400 text-sm">{prog.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-surface-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Latest News & Events</h2>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Article */}
            <Link href="/news/1" className="lg:w-1/2 group cursor-pointer">
              <div className="rounded-xl overflow-hidden aspect-video mb-4 relative">
                <div className="absolute top-4 left-4 bg-white dark:bg-slate-800 px-3 py-1 rounded text-xs font-bold shadow-sm text-slate-900 dark:text-white">OCT 24</div>
                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiJRSGctrz8RPkygL51dsNxhmjwgxW2AomZ9NRpJ5u-zqJxDlH2-F43lV-eKLkgOQIDGWypZ357VsIsupe3LpL-g6Q3pk-IFqEb1bDUIY1JK42rDIOv1S8DwReHRowv4pqoZheM5RzMxOS-5Qgfff-VMEzoZurgMNXo7OsPUOKfyj840iJh5nOVK7mN3S8OaWEqH6jTOBBr-Jm1f_LnqXZ_aK_83eXld9qV5EE_tdSLZOX7tj3eDdIFeRspMPuftbE8gBEemvBjoU')` }}></div>
              </div>
              <div className="flex items-center gap-2 mb-2 text-primary text-sm font-bold">
                <span>Events</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Annual Fairtrade Producer Convention 2024</h3>
              <p className="text-slate-400">Over 500 delegates gathered in Colombo to discuss the future of sustainable agriculture and fair pricing strategies.</p>
            </Link>
            {/* Side Articles List */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              <Link href="/news/2" className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDx5wFKcjIVxtrW__vCFJYxYE9lLY3ITLVgr2EqQ9SDpztKd9qkQjBuWSV7HqERcZFnvhZAJg7wl8_NuyIwq7OZSH372pXN4NbjQK5m97IMLsIvxseoyghwwJAx1UdWCamalQN-Rscx2xDHvH0qyg2-U_eNI-JPbqi9TlXouwBld506dw9quWlL1OCOnm-28X_9fh9BoUYf0jPHtNB9wUK4TgGd6X_ddx7EOXDUEKAwYFQd53nGdQTS3Qhu8qSp5Mhw_Z8NxD1H5rE')` }}></div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">SEP 15, 2024</div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">New Grant Announced for Organic Certification</h4>
                  <p className="text-sm text-slate-400 line-clamp-2">FNSL secures funding to help 50 new smallholder groups achieve organic certification status.</p>
                </div>
              </Link>
              <div className="w-full h-px bg-gray-800"></div>
              <Link href="/news/3" className="flex gap-4 group cursor-pointer">
                <div className="w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLovcQkuzklh40Zeu1d_MljPs9DJaURKZjOxOuRluFlUEVrADnYQqe7BVXLGtpP2ZYnKGXqVlhuXgYgNzpy38pv0pOgrd15aji7mQdxzx3GqhTWqczXoou16C9Vc0_Grdj2aQhEhU8h6iuI2VxaNKds4kT1z3MaFC4XA5v24nm--K7wPi4Uw4VYKEj6xqgEDg-w7C2cCzIIfptu_eHk58rhWsB6UZLZtkJrg5JXxuow5WTN2WYkmtFuCjRVHvF4Mlllq8bOWRpYaI')` }}></div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-1">AUG 02, 2024</div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">Partnership with European Retail Giants</h4>
                  <p className="text-sm text-slate-400 line-clamp-2">Expanding the reach of Sri Lankan spices into new supermarkets across Germany and France.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-background-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Quote className="text-6xl text-primary/30 mb-6 mx-auto" size={60} />
          <p className="text-2xl md:text-3xl font-medium text-white mb-8 italic">
            &quot;Working with FNSL has transformed our community. We not only receive fair prices for our harvest but also have the resources to invest in our children&apos;s education and local healthcare.&quot;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 rounded-full overflow-hidden">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-jnSVQZ9vQPOl9nLCVPybLo50DWfaVk563ZIoHTxPdATGCsAijl0zCBVJOjXaOSFvJQsqao6VhAvf5VSno3hNW1JmMICkPwUS4RSiocSx_bu3nTk8vQ5qGGk0bqvQKi4uHOdJp9TzsHq3megGVJtQ-RxlSWSxt8jEzzB_Q2O50RJfqS8uVkU1CTTO9NLPZ2FUCFhepLzuID93Yo01VBLIiRzPsPaQRkTekSn-oSCZ7O-Z0rIgBNp2uRhfx0KVLHZ0VadCa6w2ry4')` }}></div>
            </div>
            <div className="text-left">
              <p className="text-white font-bold">Rohan Perera</p>
              <p className="text-slate-400 text-sm">Secretary, Uva Tea Smallholders Association</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 bg-surface-dark rounded-2xl shadow-xl">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-black text-white mb-2">Join Our Network</h2>
              <p className="text-slate-300">Stay updated on the latest Fairtrade news, market trends, and success stories from Sri Lanka.</p>
            </div>
            <div className="md:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-3">
                <input className="flex-1 px-4 py-3 rounded-lg border border-gray-600 bg-background-dark text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Enter your email address" type="email" />
                <button className="bg-primary hover:bg-primary-dark text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors whitespace-nowrap" type="button">
                  Subscribe Now
                </button>
              </form>
              <p className="text-xs text-slate-500 mt-2">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}
