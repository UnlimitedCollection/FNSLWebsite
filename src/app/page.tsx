import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-dark py-24 lg:py-32">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
            Fairtrade NAPP Sri Lanka
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-4xl">
            Empowering <span className="text-primary">Producers</span>,<br />
            Connecting Markets.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            We bridge the gap between small-scale farmers and the international Fairtrade network, ensuring ethical trade and sustainable livelihoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/products">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                Explore Products
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Join Our Network
              </Button>
            </Link>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
          <Leaf size={400} className="text-primary rotate-45" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hoverEffect>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Producer Support</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Direct assistance to over 15,000 farmers across Sri Lanka.
              </p>
            </Card>

            <Card hoverEffect>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Certification</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Guiding cooperatives through rigorous Fairtrade standards.
              </p>
            </Card>

            <Card hoverEffect>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary-dark dark:text-primary mb-4">
                <Leaf size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Sustainability</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Promoting climate-resilient and organic farming practices.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
