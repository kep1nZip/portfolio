import { useEffect, useState } from "react";

export const Background = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;

    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* LIGHT THEME — Pink / White + subtle video */}
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          isDark ? "opacity-0" : "opacity-[0.20]"
        }`}
        src="/0830(1).mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* LIGHT THEME — soft white/pink wash */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.72) 0%, rgba(255,247,250,0.58) 45%, rgba(252,228,237,0.48) 100%)",
        }}
      />

      {/* DARK THEME — Beige / Brown */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(85,23,5,0.10), transparent 38%), linear-gradient(135deg, #E7CEB5 0%, #F2E3D3 100%)",
        }}
      />

      {/* Subtle ambient accent */}
      <div
        className={`absolute left-[-12rem] top-[25%] h-[28rem] w-[28rem] rounded-full blur-3xl transition-opacity duration-700 ${
          isDark
            ? "bg-[#551705]/5 opacity-100"
            : "bg-primary/10 opacity-100"
        }`}
      />
    </div>
  );
};