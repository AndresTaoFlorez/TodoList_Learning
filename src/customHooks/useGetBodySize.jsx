import { useState, useEffect } from 'react';

// Debounce to optimize resize handling
const debounce = (func, delay) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
};

const useGetBodySize = () => {
  const [bodySize, setBodySize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const body = document.documentElement; // More accurate than document

    const updateWindowSize = () => {
      setBodySize({
        width: body.clientWidth,
        height: body.clientHeight,
      });
    };

    const debouncedUpdate = debounce(updateWindowSize, 200);

    window.addEventListener("resize", debouncedUpdate);

    const observer = new MutationObserver(debouncedUpdate);
    observer.observe(body, { attributes: true, childList: true, subtree: true });

    updateWindowSize(); // Initialize size on mount

    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      observer.disconnect();
    };
  }, []);

  return bodySize;
};

export { useGetBodySize };
