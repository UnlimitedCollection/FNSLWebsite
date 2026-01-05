import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

export interface Producer {
    id: string;
    name: string;
    type: string; // e.g., Co-op, SME
    district: string;
    image: string;
    badges: string[]; // e.g., Fairtrade, Organic
    products: string[];
    impactSnippet?: {
        icon: string; // Material symbol name mapping or Lucide icon
        text: string;
    };
}

interface ProducerCardProps {
    producer: Producer;
}

export function ProducerCard({ producer }: ProducerCardProps) {
    return (
        <Card className="flex flex-col p-0 overflow-hidden group border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all hover:-translate-y-1">
            <div className="h-48 w-full overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                <div className="absolute top-3 left-3 z-10 flex gap-2">
                    {producer.badges.map((badge) => (
                        <span key={badge} className="bg-white/90 backdrop-blur text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm">
                            {badge}
                        </span>
                    ))}
                </div>
                {/* Using a placeholder div for now as we don't have configured next/image domains or assets yet */}
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${producer.image})` }}
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                        {producer.name}
                    </h3>
                    <span className="rounded-md bg-gray-100 dark:bg-gray-700 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-gray-300">
                        {producer.type}
                    </span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-gray-400 mb-4">
                    <MapPin size={18} className="text-primary" />
                    {producer.district}
                </div>

                <div className="space-y-3 mb-5">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Main Products</span>
                        <div className="flex flex-wrap gap-2">
                            {producer.products.map((product) => (
                                <span key={product} className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:bg-gray-700 dark:text-gray-200">
                                    {product}
                                </span>
                            ))}
                        </div>
                    </div>

                    {producer.impactSnippet && (
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg border border-green-100 dark:border-green-900/30">
                            <p className="text-xs italic text-green-800 dark:text-green-200 flex gap-2">
                                {/* Simple icon placeholder */}
                                <span>🌱</span>
                                &quot;{producer.impactSnippet.text}&quot;
                            </p>
                        </div>
                    )}
                </div>

                <div className="mt-auto pt-2">
                    <Button variant="outline" className="w-full justify-center group/btn border-primary text-primary hover:bg-primary hover:text-slate-900 hover:border-primary">
                        View Profile
                        <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
