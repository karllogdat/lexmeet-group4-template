// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scrolls the main window element to the top-left
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you prefer animated scrolling
    });
  }, [pathname]); // Fires every time the URL path changes

  return null;
}
