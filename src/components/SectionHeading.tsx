"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
  deps?: any; // 👈 important (we'll pass viewMode)
};

export default function ScrollTextHeading({
  text,
  className = "",
  deps,
}: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const splitRef = useRef<any>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    // cleanup old animation
    animRef.current?.kill();
    splitRef.current?.revert();

    const split = new SplitType(ref.current, {
      types: "words",
    });

    splitRef.current = split;

    const words = split.words;

    gsap.set(words, {
      opacity: 0.2,
      // y: 5,
      // scale:1
    });

    animRef.current = gsap.to(words, {
      opacity: 1,
      // y: 0,
      // scale:1.05,
      stagger: 0.8,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top-=200 center",
        end: "bottom center",
        scrub: 1.2,
        // markers: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      animRef.current?.kill();
      split.revert();
    };
  }, [text, deps]); // 👈 KEY FIX

  return (
    <h2 ref={ref} className={`scroll-text ${className}`}>
      {text}
    </h2>
  );
}
