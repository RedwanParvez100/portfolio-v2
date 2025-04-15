"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateInViewProps {
    children: React.ReactNode;
    className?: string;
    animation?:
        | "fade-up"
        | "fade-in"
        | "slide-in-right"
        | "slide-in-left"
        | "zoom-in"
        | "bounce";
    delay?: number;
    threshold?: number;
    once?: boolean;
}

export default function AnimateInView({
    children,
    className,
    animation = "fade-up",
    delay = 0,
    threshold = 0.1,
    once = true,
}: AnimateInViewProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [once, threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return isVisible
                    ? "opacity-100 translate-y-0 transition-all duration-700"
                    : "opacity-0 translate-y-10 transition-all duration-700";
            case "fade-in":
                return isVisible
                    ? "opacity-100 transition-opacity duration-700"
                    : "opacity-0 transition-opacity duration-700";
            case "slide-in-right":
                return isVisible
                    ? "opacity-100 translate-x-0 transition-all duration-700"
                    : "opacity-0 translate-x-20 transition-all duration-700";
            case "slide-in-left":
                return isVisible
                    ? "opacity-100 translate-x-0 transition-all duration-700"
                    : "opacity-0 -translate-x-20 transition-all duration-700";
            case "zoom-in":
                return isVisible
                    ? "opacity-100 scale-100 transition-all duration-700"
                    : "opacity-0 scale-95 transition-all duration-700";
            case "bounce":
                return isVisible ? "opacity-100 animate-bounce" : "opacity-0";
            default:
                return isVisible
                    ? "opacity-100 transition-opacity duration-700"
                    : "opacity-0 transition-opacity duration-700";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(getAnimationClass(), className)}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
