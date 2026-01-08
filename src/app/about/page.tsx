import FinalCTA from "@/components/sections/FinalCTA";

export default function AboutPage() {
    return (
        <main className="pt-32">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8">About Us</h1>
                <p className="text-xl text-text-muted max-w-2xl mx-auto">
                    A team of engineers, data scientists, and architects dedicated to building the future of intelligence.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-card aspect-[3/4] rounded-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/5" />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <h3 className="text-xl font-bold text-white">Team Member {i}</h3>
                            <p className="text-primary text-sm">Lead Architect</p>
                        </div>
                    </div>
                ))}
            </div>

            <FinalCTA />
        </main>
    )
}
