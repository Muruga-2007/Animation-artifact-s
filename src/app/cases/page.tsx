import FinalCTA from "@/components/sections/FinalCTA";

export default function CasesPage() {
    return (
        <main className="pt-32">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">Case Studies</h1>
                <p className="text-xl text-text-muted max-w-2xl">
                    See how we've helped enterprises automate complexity and scale.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-card rounded-2xl border border-white/5 p-8 flex items-end">
                        <div>
                            <span className="text-primary text-sm font-mono mb-2 block">FinTech</span>
                            <h3 className="text-3xl font-bold text-white">Fraud Reduction by 40%</h3>
                        </div>
                    </div>
                ))}
            </div>

            <FinalCTA />
        </main>
    )
}
