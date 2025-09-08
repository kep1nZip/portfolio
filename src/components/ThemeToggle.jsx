import { RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  console.log("ThemeToggle rendered");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600);

    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition duration-300 focus:outline-none hover:shadow-[0_0_15px] hover:shadow-primary/100"
      )}
    >
      <RefreshCcw
        className={cn(
          "h-6 w-6 text-primary transition-transform duration-500",
          isSpinning && "animate-spin"
        )}
      />
    </button>
  );
};
