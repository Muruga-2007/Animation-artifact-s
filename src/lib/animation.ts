export const ANIMATION_CONFIG = {
    // Durations
    micro: 0.2, // 200ms for hover/tap
    reveal: 0.6, // 600ms for section reveals
    stagger: 0.1, // 100ms stagger between items

    // Easing
    easing: {
        smooth: [0.22, 0.61, 0.36, 1], // Custom brand easing
        // bounce: [0.175, 0.885, 0.32, 1.275], // Optional bounce
    },

    // Variants (Framer Motion)
    variants: {
        fadeInUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
        },
        fadeInScale: {
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
        },
        staggerContainer: {
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
        }
    }
};
