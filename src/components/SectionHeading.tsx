"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  text: string;
  className?: string;
};

export default function ScrollTextHeading({ text, className = "" }: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: "words" });

    const words = split.words;

    gsap.set(words, {
      opacity: 0.2,
    });

    gsap.to(words, {
      opacity: 1,
      stagger: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top-=200 center",
        end: "bottom center",
        scrub: 1.2,
      },
    });

    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <h2 ref={ref} className={`scroll-text ${className}`}>
      {text}
    </h2>
  );
}
