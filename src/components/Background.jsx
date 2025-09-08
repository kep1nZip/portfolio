import { useEffect, useState } from "react";

export const Background = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark") // 🟢 baca langsung dari HTML
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains("dark"));
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* 🌞 Siang → Video */}
      <video
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out brightness-50 ${
          !isDark ? "opacity-100" : "opacity-0"
        }`}
        src="/0830(1).mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌙 Malam → Gambar */}
      <div
        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(150% 140% at 50% 100%, #000000 40%, #7f6ce0 100%)",
        }}
      />
    </div>
  );
};
