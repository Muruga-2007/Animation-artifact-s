import FinalCTA from "@/components/sections/FinalCTA";

export default function ServicesPage() {
    return (
        <main className="pt-32">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">Our Services</h1>
                <p className="text-xl text-text-muted max-w-2xl">
                    End-to-end intelligent systems, from cloud infrastructure to user-facing applications.
                </p>
            </div>

            {/* Placeholder for Stacked Accordion */}
            <div className="max-w-7xl mx-auto px-6 mb-32 space-y-4">
                {["AI-Powered Analytics", "Custom Software Development", "Machine Learning Solutions", "Cloud Solutions", "Cybersecurity"].map((s, i) => (
                    <div key={i} className="bg-card border border-white/5 p-8 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{s}</h3>
                            <span className="text-2xl font-light text-white/20 group-hover:text-white transition-colors">+</span>
                        </div>
                    </div>
                ))}
            </div>

            <FinalCTA />
        </main>
    )
}
