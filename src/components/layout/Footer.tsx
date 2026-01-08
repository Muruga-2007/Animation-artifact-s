import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-surface border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-display tracking-tight text-white mb-6 block">
                            A-Zentrix
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Developing intelligent enterprise systems that automate complexity and scale performance.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><Link href="/services/ai-analytics" className="hover:text-primary transition-colors">AI Analytics</Link></li>
                            <li><Link href="/services/custom-software" className="hover:text-primary transition-colors">Custom Software</Link></li>
                            <li><Link href="/services/cloud" className="hover:text-primary transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/cases" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Connect</h4>
                        <ul className="space-y-4 text-sm text-text-muted">
                            <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Email</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
                    <p>© {new Date().getFullYear()} A-Zentrix. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
