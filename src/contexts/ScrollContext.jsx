import React, { createContext, useRef, useCallback } from "react";

export const ScrollContext = createContext({
  registerServicesRef: () => {},
  scrollToServices: () => {},
});

export function ScrollProvider({ children }) {
  const servicesRef = useRef(null);
  const pendingScroll = useRef(false);

  const registerServicesRef = useCallback((r) => {
    servicesRef.current = r?.current ?? r;
    if (pendingScroll.current) {
      servicesRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      pendingScroll.current = false;
    }
  }, []);

  const scrollToServices = useCallback(() => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      pendingScroll.current = true;
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ registerServicesRef, scrollToServices }}>
      {children}
    </ScrollContext.Provider>
  );
}

export default ScrollProvider;
