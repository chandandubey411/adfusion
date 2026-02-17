import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({ children, className, variant = 'primary', ...props }) => {
    const baseStyles = 'px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group';

    const variants = {
        primary: 'bg-gradient-to-r from-gold-500 to-gold-400 text-dark-900 hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]',
        outline: 'border border-gold-500 text-gold-500 hover:bg-gold-500/10',
        glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20'
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === 'primary' && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            )}
        </motion.button>
    );
};

export default Button;
