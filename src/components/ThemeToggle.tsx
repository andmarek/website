"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle(): React.JSX.Element {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="rounded-md p-2 text-gray-700 hover:bg-black/5 dark:text-champagne-pink dark:hover:bg-white/5 transition-colors"
      >
        {/* placeholder to avoid layout shift */}
        <span className="inline-block h-5 w-5" />
      </button>
    );
  }

  const isDark = (theme === "dark") || (theme === "system" && resolvedTheme === "dark");

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="rounded-md p-2 text-gray-700 hover:bg-black/5 dark:text-champagne-pink dark:hover:bg-white/5 transition-colors"
    >
      {isDark ? (
        // Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M12 4.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5A.75.75 0 0 1 12 4.75Zm0 14.75a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75ZM4.75 12a.75.75 0 0 1 .75-.75v-.5a.75.75 0 0 1 1.5 0v.5A.75.75 0 0 1 6.25 12Zm14.75 0a.75.75 0 0 1-.75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75ZM6.47 6.47a.75.75 0 0 1 1.06-1.06l.35.35a.75.75 0 1 1-1.06 1.06l-.35-.35Zm9.65 9.65a.75.75 0 1 1 1.06 1.06l-.35.35a.75.75 0 1 1-1.06-1.06l.35-.35Zm0-10.71.35-.35a.75.75 0 1 1 1.06 1.06l-.35.35a.75.75 0 1 1-1.06-1.06ZM7.53 16.47l-.35.35a.75.75 0 1 1-1.06-1.06l.35-.35a.75.75 0 1 1 1.06 1.06ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>
        </svg>
      ) : (
        // Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79Z"/>
        </svg>
      )}
    </button>
  );
}


