import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
    title: "A-Zentrix | Intelligent Enterprise Systems",
    description: "Build the AI advantage your competitors can't copy.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-background text-text-primary overflow-x-hidden selection:bg-primary/20 selection:text-white`}>
                <SmoothScroll>
                    <Header />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
