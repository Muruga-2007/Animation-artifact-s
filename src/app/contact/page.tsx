export default function ContactPage() {
    return (
        <main className="pt-32 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-6xl md:text-7xl font-display font-bold text-white mb-8">Let&#39;s Talk.</h1>
                    <p className="text-xl text-text-muted mb-12">
                        Tell us about your project. We'll help you architect a solution that scales.
                    </p>

                    <div className="space-y-6 text-text-muted">
                        <p>hello@azentrix.com</p>
                        <p>+1 (555) 123-4567</p>
                        <p>San Francisco, CA</p>
                    </div>
                </div>

                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">First Name</label>
                            <input className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white">Last Name</label>
                            <input className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Email</label>
                        <input type="email" className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white">Message</label>
                        <textarea rows={6} className="w-full bg-surface border border-white/10 rounded-lg p-3 text-white focus:border-primary focus:outline-none transition-colors" />
                    </div>
                    <button className="w-full bg-primary text-black font-bold py-4 rounded-lg hover:bg-primary/90 transition-colors">
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    )
}
