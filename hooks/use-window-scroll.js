import { useEffect } from "react";

useEffect(() => {
  const scrollAfter = () => window.scrollTo(0, 0);
  return scrollAfter;
}, []);
