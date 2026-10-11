"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50, label: "Export clients" },
  { value: 40, label: "OEM brands served" },
  { value: 35000, label: "Pieces produced per day" },
  { value: 150, label: "Skilled workers" }
];

const formatNumber = (value) => new Intl.NumberFormat("en-IN").format(value);

export default function StatsSection() {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);
  const [values, setValues] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const finish = () => setValues(stats.map(({ value }) => value));

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finish();
        return;
      }

      const duration = 1600;
      let startTime;

      const tick = (now) => {
        startTime ??= now;
        const progress = Math.min((now - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        setValues(stats.map(({ value }) => Math.round(value * easedProgress)));

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate();
        observer.disconnect();
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-stats" ref={sectionRef} aria-label="Company statistics">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              className="stat-item"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={stat.label}
            >
              <div className="stat-num">{formatNumber(values[index])}+</div>
              <div className="stat-divider"></div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
